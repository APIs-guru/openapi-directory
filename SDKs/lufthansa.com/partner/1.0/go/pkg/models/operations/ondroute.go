package operations

import (
	"openapi/pkg/models/shared"
)

type OndRoutePathParams struct {
	Destination string `pathParam:"style=simple,explode=false,name=destination"`
	Origin      string `pathParam:"style=simple,explode=false,name=origin"`
}

type OndRouteQueryParams struct {
	Catalogues *string `queryParam:"style=form,explode=true,name=catalogues"`
	Limit      *string `queryParam:"style=form,explode=true,name=limit"`
	Offset     *string `queryParam:"style=form,explode=true,name=offset"`
}

type OndRouteHeaders struct {
	Accept string `header:"name=Accept"`
}

type OndRouteSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type OndRouteRequest struct {
	PathParams  OndRoutePathParams
	QueryParams OndRouteQueryParams
	Headers     OndRouteHeaders
	Security    OndRouteSecurity
}

type OndRouteResponse struct {
	ContentType                      string
	OndRoute200ApplicationJSONString *string
	StatusCode                       int64
}
