package operations

import (
"openapi/pkg/models/shared")

type GetCrmV3ExtensionsCardsAppIDCardIDGetByIDPathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    CardID string `pathParam:"style=simple,explode=false,name=cardId"`
    
}

type GetCrmV3ExtensionsCardsAppIDCardIDGetByIDSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetCrmV3ExtensionsCardsAppIDCardIDGetByIDRequest struct {
    PathParams GetCrmV3ExtensionsCardsAppIDCardIDGetByIDPathParams 
    Security GetCrmV3ExtensionsCardsAppIDCardIDGetByIDSecurity 
    
}

type GetCrmV3ExtensionsCardsAppIDCardIDGetByIDResponse struct {
    Body []byte 
    CardResponse *shared.CardResponse 
    ContentType string 
    StatusCode int64 
    
}

