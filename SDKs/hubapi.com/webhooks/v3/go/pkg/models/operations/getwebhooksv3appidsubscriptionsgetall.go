package operations

import (
"openapi/pkg/models/shared")

type GetWebhooksV3AppIDSubscriptionsGetAllPathParams struct {
    AppID int32 `pathParam:"style=simple,explode=false,name=appId"`
    
}

type GetWebhooksV3AppIDSubscriptionsGetAllSecurity struct {
    DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetWebhooksV3AppIDSubscriptionsGetAllRequest struct {
    PathParams GetWebhooksV3AppIDSubscriptionsGetAllPathParams 
    Security GetWebhooksV3AppIDSubscriptionsGetAllSecurity 
    
}

type GetWebhooksV3AppIDSubscriptionsGetAllResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SubscriptionListResponse *shared.SubscriptionListResponse 
    
}

