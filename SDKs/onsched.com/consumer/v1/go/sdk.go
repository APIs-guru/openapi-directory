package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"https://onsched.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
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

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
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

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// DeleteConsumerV1AppointmentsID - Returns an appointment object
// This end point deletes a booking. Only appointments in a "IN" initial status can be deleted.
// Past dated appointments cannot be cancelled.<br /><br />
//
// A valid appointment id is required. You can use the appointmentId returned from GET /consumer/v1/appointments. <br /><br />
// For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
func (s *SDK) DeleteConsumerV1AppointmentsID(ctx context.Context, request operations.DeleteConsumerV1AppointmentsIDRequest) (*operations.DeleteConsumerV1AppointmentsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteConsumerV1AppointmentsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

func (s *SDK) DeleteConsumerV1CustomersID(ctx context.Context, request operations.DeleteConsumerV1CustomersIDRequest) (*operations.DeleteConsumerV1CustomersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteConsumerV1CustomersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

func (s *SDK) DeleteConsumerV1CustomersSubscriptionsID(ctx context.Context, request operations.DeleteConsumerV1CustomersSubscriptionsIDRequest) (*operations.DeleteConsumerV1CustomersSubscriptionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/subscriptions/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteConsumerV1CustomersSubscriptionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetConsumerV1Appointments - Returns a list of appointments.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.<br /><br />
// Use the other query parameters to optionally filter the list by using the query parameters. <br /><br />
// This endpoint returns appoinments using paging. <br /><br />
// See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
func (s *SDK) GetConsumerV1Appointments(ctx context.Context, request operations.GetConsumerV1AppointmentsRequest) (*operations.GetConsumerV1AppointmentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/appointments"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AppointmentsResponse{
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

			res.AppointmentListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AppointmentsBookingfields - Returns a list of appointment booking fields
// This end point returns Booking Field definitions.<br></br>
//
// Appointment booking fields are different than Customer booking fields. Appointment booking fields are
// stored with each appointment. They are used when the information collected during the booking is specific
// to a particular visit.<br></br>
//
// Use the field, and type to determine how to update field values
// in PUT /consumer/v1/appointments/bookingfields.<br></br>
//
// Booking Fields include any custom appointment fields you wish to capture with the Booking and also
// miscellaneous appointment attributes including address information.<br></br>
// For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
func (s *SDK) GetConsumerV1AppointmentsBookingfields(ctx context.Context, request operations.GetConsumerV1AppointmentsBookingfieldsRequest) (*operations.GetConsumerV1AppointmentsBookingfieldsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/appointments/bookingfields"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AppointmentsBookingfieldsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingFieldListViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingFieldListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AppointmentsCustomfields - Returns a list of appointment custom field definitions
// This end point returns your Appointment custom field definitions.<br /><br />
//
// Appointment custom fields are different than Customer custom fields. Appointment custom fields are
// stored with each appointment. They are used when the information collected during the booking is specific
// to a particular visit.<br /><br />
//
// Use the field, and type to determine how to update field values
// in PUT /consumer/v1/appointments/customfields <br /><br />
// For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
func (s *SDK) GetConsumerV1AppointmentsCustomfields(ctx context.Context, request operations.GetConsumerV1AppointmentsCustomfieldsRequest) (*operations.GetConsumerV1AppointmentsCustomfieldsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/appointments/customfields"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AppointmentsCustomfieldsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomFieldDefinitionListViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomFieldDefinitionListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AppointmentsID - Returns an appointment object.
// The result returned is a single appointment object. A valid id is required to find the appointment. <br /><br />
//
// See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
func (s *SDK) GetConsumerV1AppointmentsID(ctx context.Context, request operations.GetConsumerV1AppointmentsIDRequest) (*operations.GetConsumerV1AppointmentsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AppointmentsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDate - Returns a list of available times.
// Choose your search criteria carefully. Availability is an expensive call. If you search availability for all resources
// then you should only do so for a single date. If you decide to search availability for multiple dates you should only do so
// for a specific resource by specifying the optional resourceId parameter.<br /><br />
//
// Start and End times are specified as military times e.g. 800 = 8:00am, 2230 = 10:30pm.
// You will only see availability within the boundary of your business start and end times.<br /><br />
//
// dayAvailability will return day availablility for the number of days requested from the start date.<br /><br />
//
// firstDayAvailable only works with day availability. If set to true it will look for the first day available within the range specified
// by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month.
// Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.<br /><br />
//
// You should only specify the duration parameter if you let your customers choose the duration of the appointment. e.g. from a list.<br /><br />
//
// The tz parameter allows you to select a suitable timezone for the customer to book in. Your app should be timezone aware if you
// use this option. The requested timezone is specified as an offset(plus or minus) from GMT time.<br /><br />
//
// Availabity can be complex. We provided an endpoint help you troubleshoot:
// /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable.
// This endpoint will show you all the blocks for a given date range. Available times are created from any unblocked time periods.<br /><br />
//
// See more information at <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a>
func (s *SDK) GetConsumerV1AvailabilityServiceIDStartDateEndDate(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AvailabilityViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDateDays - Returns a list of available days.
// This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
//
// Day level availability is a good way to restrict your choices of dates in your app and improve usability.
func (s *SDK) GetConsumerV1AvailabilityServiceIDStartDateEndDateDays(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AvailabilityDayViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AvailabilityDayViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDateTimes - Returns a list of available times.
// <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.
//
//	Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
func (s *SDK) GetConsumerV1AvailabilityServiceIDStartDateEndDateTimes(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/times", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Availability3ViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Availability3ViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailable - Returns a list of unavailable times.
// This endpoint is used to show unavailable times and provides information why the time is unavailable.
func (s *SDK) GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailable(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse{
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

			res.UnavailableTimeListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1AvailabilityServiceIDStartDateEndDateWindows - Returns a list of available booking window times.
// This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
// Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
func (s *SDK) GetConsumerV1AvailabilityServiceIDStartDateEndDateWindows(ctx context.Context, request operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsRequest) (*operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/windows", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.WindowAvailabilityViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WindowAvailabilityViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1Customers - Returns a list of customers.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1Customers(ctx context.Context, request operations.GetConsumerV1CustomersRequest) (*operations.GetConsumerV1CustomersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersResponse{
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

			res.CustomerListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersBookingfields - Returns a list of customer booking fields
// This end point returns Booking Field definitions.
//
// Customer booking fields are different than Appointment booking fields. Customer booking fields are
// stored with each customer. They are used when the information collected during the booking is specific
// to a particular visit.
//
// Use the field, and type to determine how to update field values
// in PUT /consumer/v1/appointments/{id}/book
//
// Customer Booking Fields include any custom customer fields you wish to capture with the Booking and also
// miscellaneous customer attributes including Company Name, Customer Demographic information and Address information.
func (s *SDK) GetConsumerV1CustomersBookingfields(ctx context.Context, request operations.GetConsumerV1CustomersBookingfieldsRequest) (*operations.GetConsumerV1CustomersBookingfieldsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/bookingfields"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersBookingfieldsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BookingFieldListViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BookingFieldListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersCountries - Returns a list of country objects
// Returns a list of countries with the associated country code. Country codes are based on the 2 character ANSI standard.
func (s *SDK) GetConsumerV1CustomersCountries(ctx context.Context) (*operations.GetConsumerV1CustomersCountriesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/countries"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersCountriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CountryViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CountryViewModels = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersCustomfields - Returns a list of customField objects
// This end point returns your Customer custom field definitions.
//
// Customer custom fields are different than Appointment custom fields. Appointment custom fields are
// stored with each appointment. They are used when the information collected during the booking is specific
// to a particular visit, where as Customer custom fields are stored with the customer profile.
//
// Use the key field, and type to determine how to update field values
// in POST /consumer/v1/customers and PUT /consumer/v1/customers/{id}
func (s *SDK) GetConsumerV1CustomersCustomfields(ctx context.Context, request operations.GetConsumerV1CustomersCustomfieldsRequest) (*operations.GetConsumerV1CustomersCustomfieldsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/customfields"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersCustomfieldsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomFieldDefinitionListViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomFieldDefinitionListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersID - Returns a customer object.
// The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
// or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
func (s *SDK) GetConsumerV1CustomersID(ctx context.Context, request operations.GetConsumerV1CustomersIDRequest) (*operations.GetConsumerV1CustomersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTz - Returns a list of customer booking limits.
// The result returned is list of limit rules as defined by the subscribed customer plan along with Booking Counts/Minutes
// The results indicate the remaining bookings count / minutes. Use the results in your app to determine if the customer should continue booking.
// You can enforce Limits in periods: Daily,Weekly,Monthly and for maximum total limits. Maximum total limits is based on six months prior to
// the DateTimeTz and six months after the DateTimeTz. Daily, Weekly and Monthly limits are based on the calculated period relative to the
// subscription plan start. Daily,Weekly and Monthly limits can be setup on a per interval basis e.g. to biweekly, or daily every 10 days.
// See customer plans setup in the Portal for more information.
// All parameters are required. If resourceId is not applicable for a non-resource calendar, pass zero.
// Format of the dateTimeTz field is 2018-10-30T10:00-5:00
func (s *SDK) GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTz(ctx context.Context, request operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzRequest) (*operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}/planlimits/{serviceId}/{resourceId}/{dateTimeTz}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse{
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

			res.PlanLimitListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersIDSubscriptions - Returns a customer subscription object.
// The result returned is a single customer subscription object. A customer can only be subsribed to a single Customer Plan
func (s *SDK) GetConsumerV1CustomersIDSubscriptions(ctx context.Context, request operations.GetConsumerV1CustomersIDSubscriptionsRequest) (*operations.GetConsumerV1CustomersIDSubscriptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}/subscriptions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersIDSubscriptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerSubscriptionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerSubscriptionViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersPlans - Returns a list of customers.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1CustomersPlans(ctx context.Context, request operations.GetConsumerV1CustomersPlansRequest) (*operations.GetConsumerV1CustomersPlansResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/plans"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersPlansResponse{
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

			res.CustomerPlanListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersPlansID - Returns a customer object.
// The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
// or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
func (s *SDK) GetConsumerV1CustomersPlansID(ctx context.Context, request operations.GetConsumerV1CustomersPlansIDRequest) (*operations.GetConsumerV1CustomersPlansIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/plans/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersPlansIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerPlanViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerPlanViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersStates - Returns a list of state objects
// Returns a list of states with the associated state code and country.
//
// Contact us if states for your countries of operation are not currently loaded.
func (s *SDK) GetConsumerV1CustomersStates(ctx context.Context, request operations.GetConsumerV1CustomersStatesRequest) (*operations.GetConsumerV1CustomersStatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/states"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersStatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.StateViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.StateViewModels = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersSubscriptions - Returns a list of customer subscriptions.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1CustomersSubscriptions(ctx context.Context, request operations.GetConsumerV1CustomersSubscriptionsRequest) (*operations.GetConsumerV1CustomersSubscriptionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers/subscriptions"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersSubscriptionsResponse{
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

			res.CustomerSubscriptionListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1CustomersSubscriptionsID - Returns a customer subscription object.
// The result returned is a single customer subscription object.
func (s *SDK) GetConsumerV1CustomersSubscriptionsID(ctx context.Context, request operations.GetConsumerV1CustomersSubscriptionsIDRequest) (*operations.GetConsumerV1CustomersSubscriptionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/subscriptions/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1CustomersSubscriptionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerSubscriptionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerSubscriptionViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1Locations - Returns a list of business locations.
// Use this api end point if you have multiple business locations in your company.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
//
// To leverage the search by serviceId, setup locationService's see endpoints in this controller.
// Location services allow you to exclude company scoped services for locations that do not offer them.
// You can explicitly define which services are offered or if none are defined then all services are offererd
func (s *SDK) GetConsumerV1Locations(ctx context.Context, request operations.GetConsumerV1LocationsRequest) (*operations.GetConsumerV1LocationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/locations"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1LocationsResponse{
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

			res.LocationListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1LocationsID - Returns a business location object.
// The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
func (s *SDK) GetConsumerV1LocationsID(ctx context.Context, request operations.GetConsumerV1LocationsIDRequest) (*operations.GetConsumerV1LocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/locations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1LocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.LocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LocationViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1Resources - Returns a list of resources.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1Resources(ctx context.Context, request operations.GetConsumerV1ResourcesRequest) (*operations.GetConsumerV1ResourcesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/resources"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ResourcesResponse{
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

			res.ResourceListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetConsumerV1ResourcesID - Returns a resource object.
// The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
// or the GET consumer/v1/appointments end point.
func (s *SDK) GetConsumerV1ResourcesID(ctx context.Context, request operations.GetConsumerV1ResourcesIDRequest) (*operations.GetConsumerV1ResourcesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/resources/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ResourcesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ResourceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ResourceViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ResourcesIDServices - Returns a list of resource services.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
// Resource services are used to explicitly define the services that can be booked for a resource. If no resource services are defined then by
// default all services can be booked for the resource.
func (s *SDK) GetConsumerV1ResourcesIDServices(ctx context.Context, request operations.GetConsumerV1ResourcesIDServicesRequest) (*operations.GetConsumerV1ResourcesIDServicesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/resources/{id}/services", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ResourcesIDServicesResponse{
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

			res.ResourceServiceListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetConsumerV1Servicegroups - Returns a list of service groups.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1Servicegroups(ctx context.Context, request operations.GetConsumerV1ServicegroupsRequest) (*operations.GetConsumerV1ServicegroupsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/servicegroups"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicegroupsResponse{
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

			res.ServiceGroupListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ServicegroupsID - Returns a serviceGroup object.
// The result returned is a single serviceGroup object. An id is required to find the serviceGroup. Find serviceGroup id's using
// the GET consumer/v1/servicegroups end point,
func (s *SDK) GetConsumerV1ServicegroupsID(ctx context.Context, request operations.GetConsumerV1ServicegroupsIDRequest) (*operations.GetConsumerV1ServicegroupsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/servicegroups/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicegroupsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceGroupViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceGroupViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1Services - Returns a list of services.
// Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size.
// Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1Services(ctx context.Context, request operations.GetConsumerV1ServicesRequest) (*operations.GetConsumerV1ServicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/services"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicesResponse{
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

			res.ServiceListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ServicesAllocationsID - Get a service allocation
func (s *SDK) GetConsumerV1ServicesAllocationsID(ctx context.Context, request operations.GetConsumerV1ServicesAllocationsIDRequest) (*operations.GetConsumerV1ServicesAllocationsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/services/allocations/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicesAllocationsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceAllocationViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceAllocationViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ServicesID - Returns a service object.
// The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
// or the GET consumer/v1/appointments end point.
func (s *SDK) GetConsumerV1ServicesID(ctx context.Context, request operations.GetConsumerV1ServicesIDRequest) (*operations.GetConsumerV1ServicesIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/services/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicesIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ServiceViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ServiceViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1ServicesIDAllocations - Returns a list of service allocations.
// This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event
// against the service.
//
// You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
// pass in the service id.
//
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1ServicesIDAllocations(ctx context.Context, request operations.GetConsumerV1ServicesIDAllocationsRequest) (*operations.GetConsumerV1ServicesIDAllocationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/services/{id}/allocations", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicesIDAllocationsResponse{
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

			res.ServiceAllocationListViewModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetConsumerV1ServicesIDResources - Returns a list of resources.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1ServicesIDResources(ctx context.Context, request operations.GetConsumerV1ServicesIDResourcesRequest) (*operations.GetConsumerV1ServicesIDResourcesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/services/{id}/resources", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1ServicesIDResourcesResponse{
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

			res.ResourceListViewModel = out
		}
	}

	return res, nil
}

// GetConsumerV1Settings - Returns a list of customers.
// The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
// Use the other query parameters to optionally filter the results list.
func (s *SDK) GetConsumerV1Settings(ctx context.Context, request operations.GetConsumerV1SettingsRequest) (*operations.GetConsumerV1SettingsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/settings"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetConsumerV1SettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OnlineSettingsViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnlineSettingsViewModel = out
		}
	}

	return res, nil
}

func (s *SDK) GetPlanID(ctx context.Context, request operations.GetPlanIDRequest) (*operations.GetPlanIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{planId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPlanIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PostConsumerV1Appointments - Returns an appointment object
// <p>This end point creates a new appointment in an Initial "IN" status. The exception is if completeBooking parameter set.</p>
// <br />
// <p>If you supply a valid customerId in the body, then the POST will create either a booking or reservation using the customer data.</p>
// <br />
// <p> A valid serviceId is required. Use GET consumer/v1/services to retrieve a list of your services.</p>
// <br />
// <p> A valid resourceId is required if your calendar is a resource based calendar and you are booking single resource appointments. </p>
// <br />
// <p> Use consumer/v1/resources to retrieve a list of your resources or use a resourceId returned from the /availability endpoints. </p>
// <br />
// <p> The resourceIds parameter is required for multi-resource appointments. Pass in comma separated valid resourceIds. This is beta until we update the notifications.</p>
// <br />
// <p> The customerIds parameter is required for multi-customer appointments. Pass in comma separated valid customerIds. This is beta until we update the notifications.</p>
// <br />
// <p> The locationId is optional. If the locationId is not passed, the system will default to the primary company location. </p>
// <br />
// <p> ServiceId provided must be valid for the location being searched. A valid serviceId is one that is scoped to
//
//	Primary Company Location or is associated with that business LocationId</p>
//
// <br />
// <p> The customerId is optional. If supplied you can use the completeBooking option and skip the PUT /book step. </p>
// <br />
// <p> The completeBooking option provides a mechanism for immediate booking with a POST. Applies if you have enough customer information
//
//	to complete the booking. Either supply email and name or customerId with required information.
//	Normally, completeBooking is for the BK or RS status, however IN is included to support payment flows.</p>
//
// <br />
// <p> The email, name and phone fields are only used with the completeBooking option. As with customerId you can
//
//	skip the PUT /book step. This endpoint completes the booking, and sends notifications.</p>
//
// <br />
// <p> A bookingWindowId is required if you are booking appointments into a defined booking window on the service.</p>
// <br />
// <p> BookedBy is an optional parameter. If it is not supplied the email address of the booked appointment is used or the ip address if no email address is
//
//	used in the /appointment/book endpoint. Booked by is used in the Appointment Audit trail which can be viewed in the Admin Portal.</p>
//
// <br />
// <p> Location is optional. This is a string representing the location of the actual appointment, not to be confused with a Business Location.</p>
// <br />
// <p>Timezone name is optional. The Timezone name is in Iana format e.g. America/New_York. This is the timezone where the appointment was booked. Populating
//
//	this information can help later in situations where appointments are booked before a Daylight Savings change.</p>
//
// <br />
// <p>StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00</p>
// <br />
// <p>TravelTimeMins and TravelAppointmentId are optional. These are important if you factor in Travel Time for resources to move between appointments.</p>
// <br />
// <p>This information is returned from the availability/times endpoint. <br /><br />
//
//	See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
//
// <br />
func (s *SDK) PostConsumerV1Appointments(ctx context.Context, request operations.PostConsumerV1AppointmentsRequest) (*operations.PostConsumerV1AppointmentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/appointments"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostConsumerV1AppointmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentInitialViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentInitialViewModel = out
		}
	}

	return res, nil
}

// PostConsumerV1Customers - Creates a new customer object.
// Use this endpoint to create a new customer. If not specified the business location id defaults to the first location in the company.
// Email Address and a lastname are required for creating a new customer.
// Type 0 = Person, Type 1 = Business
// For type 0, the firstname and lastname fields are used. For type 1, the Name field is used and the name field is also used to populate the lastname.
func (s *SDK) PostConsumerV1Customers(ctx context.Context, request operations.PostConsumerV1CustomersRequest) (*operations.PostConsumerV1CustomersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/consumer/v1/customers"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostConsumerV1CustomersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerViewModel = out
		}
	}

	return res, nil
}

// PostConsumerV1CustomersIDSubscriptions - Creates a new customer subscription object.
// Use this endpoint to create a new customer subscription.
func (s *SDK) PostConsumerV1CustomersIDSubscriptions(ctx context.Context, request operations.PostConsumerV1CustomersIDSubscriptionsRequest) (*operations.PostConsumerV1CustomersIDSubscriptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}/subscriptions", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostConsumerV1CustomersIDSubscriptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CustomerSubscriptionViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CustomerSubscriptionViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDBook - Returns an appointment object
// This end point completes a new booking. Only appointments in the "IN" initial status can be booked.
// by saving all the relevant details of the booking. <br /><br />
//
// A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.  <br /><br />
//
// To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.  <br /><br />
// to understand your definitions of custom fields and what key and values to update. <br /><br />
// See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a> and
// <a href="https://onsched.readme.io/docs/custom-booking-fields">Custom Booking Fields</a>
func (s *SDK) PutConsumerV1AppointmentsIDBook(ctx context.Context, request operations.PutConsumerV1AppointmentsIDBookRequest) (*operations.PutConsumerV1AppointmentsIDBookResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/book", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutConsumerV1AppointmentsIDBookResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDCancel - Returns an appointment object
// This end point cancels a booking or reservation. Only appointments in a "BK" booked, or "RS" reserved status can be cancelled.
// Past dated appointments cannot be cancelled. <br /><br />
//
// A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments. <br /><br />
// For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
func (s *SDK) PutConsumerV1AppointmentsIDCancel(ctx context.Context, request operations.PutConsumerV1AppointmentsIDCancelRequest) (*operations.PutConsumerV1AppointmentsIDCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/cancel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutConsumerV1AppointmentsIDCancelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDConfirm - Set the Appointment Confirm property to true or false
func (s *SDK) PutConsumerV1AppointmentsIDConfirm(ctx context.Context, request operations.PutConsumerV1AppointmentsIDConfirmRequest) (*operations.PutConsumerV1AppointmentsIDConfirmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/confirm", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutConsumerV1AppointmentsIDConfirmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDNoshow - For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
func (s *SDK) PutConsumerV1AppointmentsIDNoshow(ctx context.Context, request operations.PutConsumerV1AppointmentsIDNoshowRequest) (*operations.PutConsumerV1AppointmentsIDNoshowResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/noshow", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutConsumerV1AppointmentsIDNoshowResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDReschedule - Returns an appointment object
// This end point reschedules a booking. Only appointments in a "BK" booked status can be rescheduled.
// Past dated appointments cannot be cancelled.<br /><br />
//
// A valid appointment id is required. Use the appointmentId returned from GET /consumer/v1/appointments.<br /><br />
//
// StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00<br /><br />
//
// The serviceId is optional. If you want your users to change the service on a reschedule, include the new serviceId.
// The new serviceId's StartDateTime and EndDateTime must match your service's duration.<br /><br />
//
// Use the GET /consumer/v1/availability/{id}/reschedule endpoint to display a list of available times
// for the end user to choose from to reschedule the original appointment.<br /><br />
//
// You cannot reschedule an appointment to a different location. You can cancel and reschedule to a different location.
//
// For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
func (s *SDK) PutConsumerV1AppointmentsIDReschedule(ctx context.Context, request operations.PutConsumerV1AppointmentsIDRescheduleRequest) (*operations.PutConsumerV1AppointmentsIDRescheduleResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/reschedule", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutConsumerV1AppointmentsIDRescheduleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AppointmentViewModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AppointmentViewModel = out
		}
	}

	return res, nil
}

// PutConsumerV1AppointmentsIDReserve - Returns an appointment object
// This end point completes a new reservation. Only appointments in the "IN" initial status can be booked.
// by saving all the relevant details of the booking.<br /><br />
//
// NOTE - appointment reservations are different than appointment bookings. Reservations are a two step booking process.
// An appointment is reserved but may not be completed as a booking until other business conditions have been met. For example
// an appointment may be reserved that is not yet assigned to a resource.<br /><br />
//
// NOTE 2 - this endpoint is new as of April 21, 2019. OnSched will be adding a new Email template for appointment reservations expected by the end of April.
// This will allow you to notify your customer of a reservation versus a booking and customize if required to indicate what conditions will the reservation
// become a booking.<br /><br />
//
// A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.<br /><br />
//
// To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.
// to understand your definitions of custom fields and what key and values to update. <br /><br />
// See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a><br /><br />
func (s *SDK) PutConsumerV1AppointmentsIDReserve(ctx context.Context, request operations.PutConsumerV1AppointmentsIDReserveRequest) (*operations.PutConsumerV1AppointmentsIDReserveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/appointments/{id}/reserve", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutConsumerV1AppointmentsIDReserveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PutConsumerV1CustomersID - Updates a customer object.
// Use this endpoint to update customer information. If not specified the business location id defaults to the first location in the company.
// Blank fields are not changed
func (s *SDK) PutConsumerV1CustomersID(ctx context.Context, request operations.PutConsumerV1CustomersIDRequest) (*operations.PutConsumerV1CustomersIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutConsumerV1CustomersIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// PutConsumerV1CustomersSubscriptionsID - Updates a customer subscription object.
// Use this endpoint to update customer subscription information.
func (s *SDK) PutConsumerV1CustomersSubscriptionsID(ctx context.Context, request operations.PutConsumerV1CustomersSubscriptionsIDRequest) (*operations.PutConsumerV1CustomersSubscriptionsIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/consumer/v1/customers/subscriptions/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutConsumerV1CustomersSubscriptionsIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
