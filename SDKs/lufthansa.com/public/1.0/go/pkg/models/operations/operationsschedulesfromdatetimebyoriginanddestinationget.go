package operations

import (
	"openapi/pkg/models/shared"
)

type OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams struct {
	Destination  string `pathParam:"style=simple,explode=false,name=destination"`
	FromDateTime string `pathParam:"style=simple,explode=false,name=fromDateTime"`
	Origin       string `pathParam:"style=simple,explode=false,name=origin"`
}

type OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams struct {
	DirectFlights *bool   `queryParam:"style=form,explode=true,name=directFlights"`
	Limit         *string `queryParam:"style=form,explode=true,name=limit"`
	Offset        *string `queryParam:"style=form,explode=true,name=offset"`
}

type OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders struct {
	Accept string `header:"name=Accept"`
}

type OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest struct {
	PathParams  OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams
	QueryParams OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams
	Headers     OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders
	Security    OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity
}

type OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse struct {
	ContentType                                                                      string
	OperationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject map[string]interface{}
	StatusCode                                                                       int64
}
