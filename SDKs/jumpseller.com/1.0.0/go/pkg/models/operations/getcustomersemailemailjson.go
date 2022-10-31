package operations

import (
"openapi/pkg/models/shared")

type GetCustomersEmailEmailJSONPathParams struct {
    Email string `pathParam:"style=simple,explode=false,name=email"`
    
}

type GetCustomersEmailEmailJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCustomersEmailEmailJSONRequest struct {
    PathParams GetCustomersEmailEmailJSONPathParams 
    QueryParams GetCustomersEmailEmailJSONQueryParams 
    
}

type GetCustomersEmailEmailJSONResponse struct {
    ContentType string 
    Customer *shared.Customer 
    NotFound *interface{} 
    StatusCode int64 
    
}

