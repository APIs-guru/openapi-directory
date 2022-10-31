package operations

import (
"openapi/pkg/models/shared")

type GetPromotionsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    
}

type GetPromotionsJSONRequest struct {
    QueryParams GetPromotionsJSONQueryParams 
    
}

type GetPromotionsJSONResponse struct {
    ContentType string 
    Promotions []shared.Promotion 
    StatusCode int64 
    
}

