package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsIDOptionsOptionIDJSONPathParams struct {
	ID       int32 `pathParam:"style=simple,explode=false,name=id"`
	OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
}

type GetProductsIDOptionsOptionIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsIDOptionsOptionIDJSONRequest struct {
	PathParams  GetProductsIDOptionsOptionIDJSONPathParams
	QueryParams GetProductsIDOptionsOptionIDJSONQueryParams
}

type GetProductsIDOptionsOptionIDJSONResponse struct {
	ContentType   string
	NotFound      *interface{}
	ProductOption *shared.ProductOption
	StatusCode    int64
}
