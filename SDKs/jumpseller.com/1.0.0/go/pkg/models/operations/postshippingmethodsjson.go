package operations

import (
	"openapi/pkg/models/shared"
)

type PostShippingMethodsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostShippingMethodsJSONRequest struct {
	QueryParams PostShippingMethodsJSONQueryParams
	Request     shared.ShippingMethodEdit `request:"mediaType=application/json"`
}

type PostShippingMethodsJSONResponse struct {
	ContentType    string
	NotFound       *interface{}
	ShippingMethod *shared.ShippingMethod
	StatusCode     int64
}
