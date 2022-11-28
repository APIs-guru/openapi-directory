package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

var ServerList = []string{
	"https://api.lufthansa.com/v1",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// CargoGetRouteFromDateProductCodeByOriginAndDestinationGet - Retrieve all flights
// Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
func (s *SDK) CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(ctx context.Context, request operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest) (*operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CargoShipmentTrackingByAwbPrefixAndAwbNumberGet - Shipment Tracking
// With this tracking service you can easily retrieve your shipment or flight status information.
func (s *SDK) CargoShipmentTrackingByAwbPrefixAndAwbNumberGet(ctx context.Context, request operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest) (*operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CargoShipmentTrackingByAwbPrefixAndAwbNumberGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OffersLoungesByLocationGet - Lounges
// Lounge information
func (s *SDK) OffersLoungesByLocationGet(ctx context.Context, request operations.OffersLoungesByLocationGetRequest) (*operations.OffersLoungesByLocationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/offers/lounges/{location}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OffersLoungesByLocationGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OffersLoungesByLocationGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet - Seat Maps
// Cabin layout and seat characteristics.
func (s *SDK) OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(ctx context.Context, request operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest) (*operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet - Flight Status at Arrival Airport
// Status of all arrivals at a given airport up to 4 hours from the provided date time.
func (s *SDK) OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(ctx context.Context, request operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest) (*operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsFlightstatusByFlightNumberAndDateGet - Flight Status
// Status of a particular flight (boarding, delayed, etc.).
func (s *SDK) OperationsFlightstatusByFlightNumberAndDateGet(ctx context.Context, request operations.OperationsFlightstatusByFlightNumberAndDateGetRequest) (*operations.OperationsFlightstatusByFlightNumberAndDateGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/flightstatus/{flightNumber}/{date}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsFlightstatusByFlightNumberAndDateGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OperationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet - Flight Status at Departure Airport
// Status of all departures from a given airport up to 4 hours from the provided date time.
func (s *SDK) OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(ctx context.Context, request operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest) (*operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/flightstatus/departures/{airportCode}/{fromDateTime}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsFlightstatusRouteDateByOriginAndDestinationGet - Flight Status by Route
// Status of flights between a given origin and destination on a given date.
func (s *SDK) OperationsFlightstatusRouteDateByOriginAndDestinationGet(ctx context.Context, request operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest) (*operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/flightstatus/route/{origin}/{destination}/{date}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OperationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsSchedulesFromDateTimeByOriginAndDestinationGet - Flight Schedules
// Scheduled flights between given airports on a given date.
func (s *SDK) OperationsSchedulesFromDateTimeByOriginAndDestinationGet(ctx context.Context, request operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest) (*operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/schedules/{origin}/{destination}/{fromDateTime}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OperationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesAircraftByAircraftCodeGet - Aircraft
// List all aircraft types or one specific aircraft type.
func (s *SDK) ReferencesAircraftByAircraftCodeGet(ctx context.Context, request operations.ReferencesAircraftByAircraftCodeGetRequest) (*operations.ReferencesAircraftByAircraftCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/aircraft/{aircraftCode}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReferencesAircraftByAircraftCodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReferencesAircraftByAircraftCodeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesAirlinesByAirlineCodeGet - Airlines
// List all airlines or one specific airline.
func (s *SDK) ReferencesAirlinesByAirlineCodeGet(ctx context.Context, request operations.ReferencesAirlinesByAirlineCodeGetRequest) (*operations.ReferencesAirlinesByAirlineCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/airlines/{airlineCode}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReferencesAirlinesByAirlineCodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReferencesAirlinesByAirlineCodeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesAirportsByAirportCodeGet - Airports
// List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
func (s *SDK) ReferencesAirportsByAirportCodeGet(ctx context.Context, request operations.ReferencesAirportsByAirportCodeGetRequest) (*operations.ReferencesAirportsByAirportCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/airports/{airportCode}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReferencesAirportsByAirportCodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AirportResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AirportResponse = out
		}
	}

	return res, nil
}

// ReferencesAirportsNearestByLatitudeAndLongitudeGet - Nearest Airports
// List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
func (s *SDK) ReferencesAirportsNearestByLatitudeAndLongitudeGet(ctx context.Context, request operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest) (*operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/airports/nearest/{latitude},{longitude}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReferencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesCitiesByCityCodeGet - Cities
// List all cities or one specific city. It is possible to request the response in a specific language.
func (s *SDK) ReferencesCitiesByCityCodeGet(ctx context.Context, request operations.ReferencesCitiesByCityCodeGetRequest) (*operations.ReferencesCitiesByCityCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/cities/{cityCode}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReferencesCitiesByCityCodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReferencesCitiesByCityCodeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesCountriesByCountryCodeGet - Countries
// List all countries or one specific country. It is possible to request the response in a specific language.
func (s *SDK) ReferencesCountriesByCountryCodeGet(ctx context.Context, request operations.ReferencesCountriesByCountryCodeGetRequest) (*operations.ReferencesCountriesByCountryCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/countries/{countryCode}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReferencesCountriesByCountryCodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ReferencesCountriesByCountryCodeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}
