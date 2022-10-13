package operations

import (
	"openapi/pkg/models/shared"
)

type OndStatusQueryParams struct {
	Catalogues *string `queryParam:"style=form,explode=true,name=catalogues"`
	NewRoutes  *string `queryParam:"style=form,explode=true,name=new-routes"`
	OldRoutes  *string `queryParam:"style=form,explode=true,name=old-routes"`
}

type OndStatusHeaders struct {
	Accept string `header:"name=Accept"`
}

type OndStatusSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type OndStatusRequest struct {
	QueryParams OndStatusQueryParams
	Headers     OndStatusHeaders
	Security    OndStatusSecurity
}

type OndStatusResponse struct {
	ContentType                       string
	OndStatus200ApplicationJSONString *string
	StatusCode                        int64
}
