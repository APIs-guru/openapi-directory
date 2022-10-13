package operations

import (
	"openapi/pkg/models/shared"
)

type GetShippingMethodsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetShippingMethodsJSONRequest struct {
	QueryParams GetShippingMethodsJSONQueryParams
}

type GetShippingMethodsJSONResponse struct {
	ContentType     string
	ShippingMethods []shared.ShippingMethod
	StatusCode      int64
}
