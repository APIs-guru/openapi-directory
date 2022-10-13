package operations

import (
	"openapi/pkg/models/shared"
)

type PostCategoriesJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostCategoriesJSONRequest struct {
	QueryParams PostCategoriesJSONQueryParams
	Request     shared.CategoryEdit `request:"mediaType=application/json"`
}

type PostCategoriesJSONResponse struct {
	Category    *shared.Category
	ContentType string
	StatusCode  int64
}
