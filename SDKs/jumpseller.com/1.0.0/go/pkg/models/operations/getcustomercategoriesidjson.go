package operations

import (
"openapi/pkg/models/shared")

type GetCustomerCategoriesIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCustomerCategoriesIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCustomerCategoriesIDJSONRequest struct {
    PathParams GetCustomerCategoriesIDJSONPathParams 
    QueryParams GetCustomerCategoriesIDJSONQueryParams 
    
}

type GetCustomerCategoriesIDJSONResponse struct {
    ContentType string 
    CustomerCategory *shared.CustomerCategory 
    NotFound *interface{} 
    StatusCode int64 
    
}

