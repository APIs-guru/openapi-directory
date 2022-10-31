package operations

import (
	"openapi/pkg/models/shared"
)

type OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams struct {
	Date        string `pathParam:"style=simple,explode=false,name=date"`
	Destination string `pathParam:"style=simple,explode=false,name=destination"`
	Origin      string `pathParam:"style=simple,explode=false,name=origin"`
}

type OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=limit"`
	Offset *string `queryParam:"style=form,explode=true,name=offset"`
}

type OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest struct {
	PathParams  OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams
	QueryParams OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams
	Headers     OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders
	Security    OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity
}

type OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse struct {
	ContentType                                                                      string
	OperationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject map[string]interface{}
	StatusCode                                                                       int64
}
