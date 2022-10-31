package operations

import (
"openapi/pkg/models/shared")

type PostWebhooksV3AppIDSubscriptionsCreatePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    
}

type PostWebhooksV3AppIDSubscriptionsCreateSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostWebhooksV3AppIDSubscriptionsCreateRequest struct {
    PathParams PostWebhooksV3AppIDSubscriptionsCreatePathParams 
    Request shared.SubscriptionCreateRequest `request:"mediaType=application/json"`
    Security PostWebhooksV3AppIDSubscriptionsCreateSecurity 
    
}

type PostWebhooksV3AppIDSubscriptionsCreateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SubscriptionResponse *shared.SubscriptionResponse 
    
}

