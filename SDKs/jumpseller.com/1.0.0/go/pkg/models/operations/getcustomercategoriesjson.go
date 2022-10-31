package operations

import (
"openapi/pkg/models/shared")

type GetCustomerCategoriesJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetCustomerCategoriesJSONRequest struct {
    QueryParams GetCustomerCategoriesJSONQueryParams 
    
}

type GetCustomerCategoriesJSONResponse struct {
    ContentType string 
    CustomerCategories []shared.CustomerCategory 
    StatusCode int64 
    
}

