package operations

import (
	"openapi/pkg/models/shared"
)

type OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams struct {
	AirportCode  string `pathParam:"style=simple,explode=false,name=airportCode"`
	FromDateTime string `pathParam:"style=simple,explode=false,name=fromDateTime"`
}

type OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest struct {
	PathParams  OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams
	QueryParams OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams
	Headers     OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders
	Security    OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity
}

type OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse struct {
	ContentType                                                                             string
	OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject map[string]interface{}
	StatusCode                                                                              int64
}
