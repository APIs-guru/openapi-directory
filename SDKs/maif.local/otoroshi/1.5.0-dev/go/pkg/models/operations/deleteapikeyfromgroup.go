package operations

import (
"openapi/pkg/models/shared")

type DeleteAPIKeyFromGroupPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type DeleteAPIKeyFromGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteAPIKeyFromGroupRequest struct {
    PathParams DeleteAPIKeyFromGroupPathParams 
    Security DeleteAPIKeyFromGroupSecurity 
    
}

type DeleteAPIKeyFromGroupResponse struct {
    ContentType string 
    Deleted *shared.Deleted 
    StatusCode int64 
    
}

