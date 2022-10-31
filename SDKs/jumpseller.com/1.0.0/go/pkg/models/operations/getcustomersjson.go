package operations

import (
"openapi/pkg/models/shared")

type GetCustomersJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetCustomersJSONRequest struct {
    QueryParams GetCustomersJSONQueryParams 
    
}

type GetCustomersJSONResponse struct {
    ContentType string 
    Customers []shared.Customer 
    StatusCode int64 
    
}

