package operations

import (
"openapi/pkg/models/shared")

type PutWebhooksV3AppIDSettingsConfigurePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    
}

type PutWebhooksV3AppIDSettingsConfigureSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PutWebhooksV3AppIDSettingsConfigureRequest struct {
    PathParams PutWebhooksV3AppIDSettingsConfigurePathParams 
    Request shared.SettingsChangeRequest `request:"mediaType=application/json"`
    Security PutWebhooksV3AppIDSettingsConfigureSecurity 
    
}

type PutWebhooksV3AppIDSettingsConfigureResponse struct {
    Body []byte 
    ContentType string 
    SettingsResponse *shared.SettingsResponse 
    StatusCode int64 
    
}

