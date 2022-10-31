package operations

import (
"openapi/pkg/models/shared")

type GetSpecialFeaturesPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetSpecialFeaturesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetSpecialFeaturesRequest struct {
    PathParams GetSpecialFeaturesPathParams 
    Security GetSpecialFeaturesSecurity 
    
}

type GetSpecialFeaturesResponse struct {
    BaseItemDtos []shared.BaseItemDto 
    ContentType string 
    StatusCode int64 
    
}

