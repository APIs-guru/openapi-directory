package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomerCategoriesIDCustomersJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCustomerCategoriesIDCustomersJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetCustomerCategoriesIDCustomersJSONRequest struct {
	PathParams  GetCustomerCategoriesIDCustomersJSONPathParams
	QueryParams GetCustomerCategoriesIDCustomersJSONQueryParams
}

type GetCustomerCategoriesIDCustomersJSONResponse struct {
	ContentType string
	Customers   []shared.Customer
	NotFound    *interface{}
	StatusCode  int64
}
