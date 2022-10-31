package operations

import (
"openapi/pkg/models/shared")

type GetOrdersAfterIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetOrdersAfterIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetOrdersAfterIDJSONRequest struct {
    PathParams GetOrdersAfterIDJSONPathParams 
    QueryParams GetOrdersAfterIDJSONQueryParams 
    
}

type GetOrdersAfterIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Order *shared.Order 
    StatusCode int64 
    
}

