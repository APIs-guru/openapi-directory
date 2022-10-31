package operations

import (
"openapi/pkg/models/shared")

type UpdateAPIKeyFromGroupPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type UpdateAPIKeyFromGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateAPIKeyFromGroupRequest struct {
    PathParams UpdateAPIKeyFromGroupPathParams 
    Request *shared.APIKey `request:"mediaType=application/json"`
    Security UpdateAPIKeyFromGroupSecurity 
    
}

type UpdateAPIKeyFromGroupResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

