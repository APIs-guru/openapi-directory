package operations

import (
	"openapi/pkg/models/shared"
)

type PutShippingMethodsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutShippingMethodsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PutShippingMethodsIDJSONRequest struct {
	PathParams  PutShippingMethodsIDJSONPathParams
	QueryParams PutShippingMethodsIDJSONQueryParams
	Request     shared.ShippingMethodEdit `request:"mediaType=application/json"`
}

type PutShippingMethodsIDJSONResponse struct {
	ContentType    string
	NotFound       *interface{}
	ShippingMethod *shared.ShippingMethod
	StatusCode     int64
}
