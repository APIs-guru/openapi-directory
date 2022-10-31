package operations

import (
	"openapi/pkg/models/shared"
)

type PostCustomerCategoriesIDCustomersJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostCustomerCategoriesIDCustomersJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostCustomerCategoriesIDCustomersJSONRequest struct {
	PathParams  PostCustomerCategoriesIDCustomersJSONPathParams
	QueryParams PostCustomerCategoriesIDCustomersJSONQueryParams
	Request     shared.CustomersToCustomerCategory `request:"mediaType=application/json"`
}

type PostCustomerCategoriesIDCustomersJSONResponse struct {
	ContentType string
	Customers   []shared.Customer
	NotFound    *interface{}
	StatusCode  int64
}
