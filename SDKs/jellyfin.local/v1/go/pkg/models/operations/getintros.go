package operations

import (
"openapi/pkg/models/shared")

type GetIntrosPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetIntrosSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetIntrosRequest struct {
    PathParams GetIntrosPathParams 
    Security GetIntrosSecurity 
    
}

type GetIntrosResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

