package operations

import (
"openapi/pkg/models/shared")

type GetOrderIDFulfillmentsJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetOrderIDFulfillmentsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetOrderIDFulfillmentsJSONRequest struct {
    PathParams GetOrderIDFulfillmentsJSONPathParams 
    QueryParams GetOrderIDFulfillmentsJSONQueryParams 
    
}

type GetOrderIDFulfillmentsJSONResponse struct {
    ContentType string 
    Fulfillments []shared.Fulfillment 
    NotFound *interface{} 
    StatusCode int64 
    
}

