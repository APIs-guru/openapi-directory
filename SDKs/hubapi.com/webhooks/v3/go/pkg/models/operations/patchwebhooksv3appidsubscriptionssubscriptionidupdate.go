package operations

import (
"openapi/pkg/models/shared")

type PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdatePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    SubscriptionID int32 `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateRequest struct {
    PathParams PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdatePathParams 
    Request shared.SubscriptionPatchRequest `request:"mediaType=application/json"`
    Security PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateSecurity 
    
}

type PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SubscriptionResponse *shared.SubscriptionResponse 
    
}

