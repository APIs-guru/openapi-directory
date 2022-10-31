package operations

import (
"openapi/pkg/models/shared")

type DeleteCustomerCategoriesIDCustomersJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteCustomerCategoriesIDCustomersJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteCustomerCategoriesIDCustomersJSONRequest struct {
    PathParams DeleteCustomerCategoriesIDCustomersJSONPathParams 
    QueryParams DeleteCustomerCategoriesIDCustomersJSONQueryParams 
    Request shared.CustomersToCustomerCategory `request:"mediaType=application/json"`
    
}

type DeleteCustomerCategoriesIDCustomersJSONResponse struct {
    ContentType string 
    DeleteCustomerCategoriesIDCustomersJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

