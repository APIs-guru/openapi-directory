package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsIDOptionsOptionIDValuesJSONPathParams struct {
	ID       int32 `pathParam:"style=simple,explode=false,name=id"`
	OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
}

type GetProductsIDOptionsOptionIDValuesJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsIDOptionsOptionIDValuesJSONRequest struct {
	PathParams  GetProductsIDOptionsOptionIDValuesJSONPathParams
	QueryParams GetProductsIDOptionsOptionIDValuesJSONQueryParams
}

type GetProductsIDOptionsOptionIDValuesJSONResponse struct {
	ContentType         string
	NotFound            *interface{}
	ProductOptionValues []shared.ProductOptionValue
	StatusCode          int64
}
