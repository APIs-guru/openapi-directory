package operations

import (
"openapi/pkg/models/shared")

type APIKeysFromGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type APIKeysFromGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type APIKeysFromGroupRequest struct {
    PathParams APIKeysFromGroupPathParams 
    Security APIKeysFromGroupSecurity 
    
}

type APIKeysFromGroupResponse struct {
    APIKeys []shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

