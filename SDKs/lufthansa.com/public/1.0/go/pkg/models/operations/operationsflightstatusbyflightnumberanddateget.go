package operations

import (
	"openapi/pkg/models/shared"
)

type OperationsFlightstatusByFlightNumberAndDateGetPathParams struct {
	Date         string `pathParam:"style=simple,explode=false,name=date"`
	FlightNumber string `pathParam:"style=simple,explode=false,name=flightNumber"`
}

type OperationsFlightstatusByFlightNumberAndDateGetQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type OperationsFlightstatusByFlightNumberAndDateGetHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type OperationsFlightstatusByFlightNumberAndDateGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type OperationsFlightstatusByFlightNumberAndDateGetRequest struct {
	PathParams  OperationsFlightstatusByFlightNumberAndDateGetPathParams
	QueryParams OperationsFlightstatusByFlightNumberAndDateGetQueryParams
	Headers     OperationsFlightstatusByFlightNumberAndDateGetHeaders
	Security    OperationsFlightstatusByFlightNumberAndDateGetSecurity
}

type OperationsFlightstatusByFlightNumberAndDateGetResponse struct {
	ContentType                                                            string
	OperationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject map[string]interface{}
	StatusCode                                                             int64
}
