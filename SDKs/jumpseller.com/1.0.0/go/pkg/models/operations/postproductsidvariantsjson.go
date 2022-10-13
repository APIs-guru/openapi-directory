package operations

import (
	"openapi/pkg/models/shared"
)

type PostProductsIDVariantsJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostProductsIDVariantsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostProductsIDVariantsJSONRequest struct {
	PathParams  PostProductsIDVariantsJSONPathParams
	QueryParams PostProductsIDVariantsJSONQueryParams
	Request     shared.VariantEdit `request:"mediaType=application/json"`
}

type PostProductsIDVariantsJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	StatusCode  int64
	Variant     *shared.Variant
}
