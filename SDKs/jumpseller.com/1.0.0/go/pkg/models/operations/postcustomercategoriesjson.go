package operations

import (
	"openapi/pkg/models/shared"
)

type PostCustomerCategoriesJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostCustomerCategoriesJSONRequest struct {
	QueryParams PostCustomerCategoriesJSONQueryParams
	Request     shared.CustomerCategoryEdit `request:"mediaType=application/json"`
}

type PostCustomerCategoriesJSONResponse struct {
	ContentType      string
	CustomerCategory *shared.CustomerCategory
	NotFound         *interface{}
	StatusCode       int64
}
