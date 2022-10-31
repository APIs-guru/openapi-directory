package operations

import (
"openapi/pkg/models/shared")

type GetFulfillmentsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetFulfillmentsJSONRequest struct {
    QueryParams GetFulfillmentsJSONQueryParams 
    
}

type GetFulfillmentsJSONResponse struct {
    ContentType string 
    Fulfillments []shared.Fulfillment 
    StatusCode int64 
    
}

