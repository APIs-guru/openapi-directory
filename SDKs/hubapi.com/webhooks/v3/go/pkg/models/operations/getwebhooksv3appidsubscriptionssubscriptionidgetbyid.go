package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDPathParams struct {
	AppID          int32 `pathParam:"style=simple,explode=false,name=appId"`
	SubscriptionID int32 `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDSecurity struct {
	DeveloperHapikey shared.SchemeDeveloperHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDRequest struct {
	PathParams GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDPathParams
	Security   GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDSecurity
}

type GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDResponse struct {
	Body                 []byte
	ContentType          string
	StatusCode           int64
	SubscriptionResponse *shared.SubscriptionResponse
}
