package operations

import (
	"openapi/pkg/models/shared"
)

type PutProductsIDOptionsOptionIDValuesValueIDJSONPathParams struct {
	ID       int32 `pathParam:"style=simple,explode=false,name=id"`
	OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
	ValueID  int32 `pathParam:"style=simple,explode=false,name=value_id"`
}

type PutProductsIDOptionsOptionIDValuesValueIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PutProductsIDOptionsOptionIDValuesValueIDJSONRequest struct {
	PathParams  PutProductsIDOptionsOptionIDValuesValueIDJSONPathParams
	QueryParams PutProductsIDOptionsOptionIDValuesValueIDJSONQueryParams
	Request     shared.ProductOptionValueEdit `request:"mediaType=application/json"`
}

type PutProductsIDOptionsOptionIDValuesValueIDJSONResponse struct {
	ContentType        string
	NotFound           *interface{}
	ProductOptionValue *shared.ProductOptionValue
	StatusCode         int64
}
