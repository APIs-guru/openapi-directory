package operations

import (
	"openapi/pkg/models/shared"
)

type GetWellKnownMercureSubscriptionsTopicSubscriberPathParams struct {
	Subscriber string `pathParam:"style=simple,explode=false,name=subscriber"`
	Topic      string `pathParam:"style=simple,explode=false,name=topic"`
}

type GetWellKnownMercureSubscriptionsTopicSubscriberRequest struct {
	PathParams GetWellKnownMercureSubscriptionsTopicSubscriberPathParams
}

type GetWellKnownMercureSubscriptionsTopicSubscriberResponse struct {
	ContentType   string
	StatusCode    int64
	Subscriptions *shared.Subscriptions
}
