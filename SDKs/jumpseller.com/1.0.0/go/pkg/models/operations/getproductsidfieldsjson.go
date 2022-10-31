package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsIDFieldsJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProductsIDFieldsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsIDFieldsJSONRequest struct {
	PathParams  GetProductsIDFieldsJSONPathParams
	QueryParams GetProductsIDFieldsJSONQueryParams
}

type GetProductsIDFieldsJSONResponse struct {
	ContentType         string
	NotFound            *interface{}
	ProductCustomFields []shared.ProductCustomField
	StatusCode          int64
}
