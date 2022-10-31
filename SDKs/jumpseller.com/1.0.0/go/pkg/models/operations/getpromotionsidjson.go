package operations

import (
"openapi/pkg/models/shared")

type GetPromotionsIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPromotionsIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetPromotionsIDJSONRequest struct {
    PathParams GetPromotionsIDJSONPathParams 
    QueryParams GetPromotionsIDJSONQueryParams 
    
}

type GetPromotionsIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Promotion *shared.Promotion 
    StatusCode int64 
    
}

