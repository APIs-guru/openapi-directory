package operations

import (
	"openapi/pkg/models/shared"
)

type GetLongviewSubscriptionPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type GetLongviewSubscriptionDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLongviewSubscriptionRequest struct {
	PathParams GetLongviewSubscriptionPathParams
}

type GetLongviewSubscriptionResponse struct {
	ContentType                                         string
	LongviewSubscription                                *shared.LongviewSubscription
	StatusCode                                          int64
	GetLongviewSubscriptionDefaultApplicationJSONObject *GetLongviewSubscriptionDefaultApplicationJSON
}
