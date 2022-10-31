package operations

import (
"openapi/pkg/models/shared")

type CreateAPIKeyFromGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type CreateAPIKeyFromGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type CreateAPIKeyFromGroupRequest struct {
    PathParams CreateAPIKeyFromGroupPathParams 
    Request *shared.APIKey `request:"mediaType=application/json"`
    Security CreateAPIKeyFromGroupSecurity 
    
}

type CreateAPIKeyFromGroupResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

