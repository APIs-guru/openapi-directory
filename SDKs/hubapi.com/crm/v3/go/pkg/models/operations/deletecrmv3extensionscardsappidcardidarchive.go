package operations

import (
"openapi/pkg/models/shared")

type DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    CardID string `pathParam:"style=simple,explode=false,name=cardId"`
    
}

type DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest struct {
    PathParams DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams 
    Security DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity 
    
}

type DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

