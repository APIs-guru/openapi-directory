package operations

import (
"openapi/pkg/models/shared")

type DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchivePathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    SubscriptionID int32 `pathParam:"style=simple,explode=false,name=subscriptionId"`
    
}

type DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveRequest struct {
    PathParams DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchivePathParams 
    Security DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveSecurity 
    
}

type DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

