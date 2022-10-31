package operations

import (
	"openapi/pkg/models/shared"
)

type SeatDetailsPathParams struct {
	AircraftCode string `pathParam:"style=simple,explode=false,name=aircraftCode"`
	CabinCode    string `pathParam:"style=simple,explode=false,name=cabinCode"`
}

type SeatDetailsQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type SeatDetailsHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type SeatDetailsSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type SeatDetailsRequest struct {
	PathParams  SeatDetailsPathParams
	QueryParams SeatDetailsQueryParams
	Headers     SeatDetailsHeaders
	Security    SeatDetailsSecurity
}

type SeatDetailsResponse struct {
	ContentType                         string
	SeatDetails200ApplicationJSONString *string
	StatusCode                          int64
}
