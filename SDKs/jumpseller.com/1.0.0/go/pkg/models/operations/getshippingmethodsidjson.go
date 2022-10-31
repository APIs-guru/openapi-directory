package operations

import (
	"openapi/pkg/models/shared"
)

type GetShippingMethodsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetShippingMethodsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetShippingMethodsIDJSONRequest struct {
	PathParams  GetShippingMethodsIDJSONPathParams
	QueryParams GetShippingMethodsIDJSONQueryParams
}

type GetShippingMethodsIDJSONResponse struct {
	ContentType    string
	NotFound       *interface{}
	ShippingMethod *shared.ShippingMethod
	StatusCode     int64
}
