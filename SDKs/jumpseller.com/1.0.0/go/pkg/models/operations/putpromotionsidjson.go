package operations

import (
"openapi/pkg/models/shared")

type PutPromotionsIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutPromotionsIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PutPromotionsIDJSONRequest struct {
    PathParams PutPromotionsIDJSONPathParams 
    QueryParams PutPromotionsIDJSONQueryParams 
    Request shared.PromotionEdit `request:"mediaType=application/json"`
    
}

type PutPromotionsIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Promotion *shared.Promotion 
    StatusCode int64 
    
}

