package operations

import (
	"openapi/pkg/models/shared"
)

type PostProductsIDDigitalProductsJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostProductsIDDigitalProductsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostProductsIDDigitalProductsJSONRequest struct {
	PathParams  PostProductsIDDigitalProductsJSONPathParams
	QueryParams PostProductsIDDigitalProductsJSONQueryParams
	Request     shared.DigitalProductEdit `request:"mediaType=application/json"`
}

type PostProductsIDDigitalProductsJSONResponse struct {
	ContentType    string
	DigitalProduct *shared.DigitalProduct
	StatusCode     int64
}
