package operations

import (
	"openapi/pkg/models/shared"
)

type PutProductsIDVariantsVariantIDJSONPathParams struct {
	ID        int32 `pathParam:"style=simple,explode=false,name=id"`
	VariantID int32 `pathParam:"style=simple,explode=false,name=variant_id"`
}

type PutProductsIDVariantsVariantIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PutProductsIDVariantsVariantIDJSONRequest struct {
	PathParams  PutProductsIDVariantsVariantIDJSONPathParams
	QueryParams PutProductsIDVariantsVariantIDJSONQueryParams
	Request     shared.VariantEdit `request:"mediaType=application/json"`
}

type PutProductsIDVariantsVariantIDJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	StatusCode  int64
	Variant     *shared.Variant
}
