package operations

import (
	"openapi/pkg/models/shared"
)

type PutCustomerCategoriesIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutCustomerCategoriesIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PutCustomerCategoriesIDJSONRequest struct {
	PathParams  PutCustomerCategoriesIDJSONPathParams
	QueryParams PutCustomerCategoriesIDJSONQueryParams
	Request     shared.CustomerCategoryEdit `request:"mediaType=application/json"`
}

type PutCustomerCategoriesIDJSONResponse struct {
	ContentType      string
	CustomerCategory *shared.CustomerCategory
	NotFound         *interface{}
	StatusCode       int64
}
