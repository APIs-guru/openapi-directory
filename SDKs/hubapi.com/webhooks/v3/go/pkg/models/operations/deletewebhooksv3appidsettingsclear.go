package operations

import (
"openapi/pkg/models/shared")

type DeleteWebhooksV3AppIDSettingsClearPathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    
}

type DeleteWebhooksV3AppIDSettingsClearSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteWebhooksV3AppIDSettingsClearRequest struct {
    PathParams DeleteWebhooksV3AppIDSettingsClearPathParams 
    Security DeleteWebhooksV3AppIDSettingsClearSecurity 
    
}

type DeleteWebhooksV3AppIDSettingsClearResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

