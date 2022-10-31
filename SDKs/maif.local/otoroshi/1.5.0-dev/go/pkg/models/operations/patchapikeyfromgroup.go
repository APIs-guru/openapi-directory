package operations

import (
"openapi/pkg/models/shared")

type PatchAPIKeyFromGroupPathParams struct {
    ClientID string `pathParam:"style=simple,explode=false,name=clientId"`
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type PatchAPIKeyFromGroupSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PatchAPIKeyFromGroupRequest struct {
    PathParams PatchAPIKeyFromGroupPathParams 
    Request []shared.Patch `request:"mediaType=application/json"`
    Security PatchAPIKeyFromGroupSecurity 
    
}

type PatchAPIKeyFromGroupResponse struct {
    APIKey *shared.APIKey 
    ContentType string 
    StatusCode int64 
    
}

