package operations

import (
	"openapi/pkg/models/shared"
)

type PostProductsIDFieldsJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostProductsIDFieldsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostProductsIDFieldsJSONRequest struct {
	PathParams  PostProductsIDFieldsJSONPathParams
	QueryParams PostProductsIDFieldsJSONQueryParams
	Request     shared.AddProductCustomField `request:"mediaType=application/json"`
}

type PostProductsIDFieldsJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	Product     *shared.Product
	StatusCode  int64
}
