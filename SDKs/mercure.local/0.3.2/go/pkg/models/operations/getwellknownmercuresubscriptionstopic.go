package operations

import (
	"openapi/pkg/models/shared"
)

type GetWellKnownMercureSubscriptionsTopicPathParams struct {
	Topic string `pathParam:"style=simple,explode=false,name=topic"`
}

type GetWellKnownMercureSubscriptionsTopicRequest struct {
	PathParams GetWellKnownMercureSubscriptionsTopicPathParams
}

type GetWellKnownMercureSubscriptionsTopicResponse struct {
	ContentType   string
	StatusCode    int64
	Subscriptions *shared.Subscriptions
}
