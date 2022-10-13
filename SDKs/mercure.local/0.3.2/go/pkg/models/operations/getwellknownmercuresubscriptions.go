package operations

import (
	"openapi/pkg/models/shared"
)

type GetWellKnownMercureSubscriptionsResponse struct {
	ContentType   string
	StatusCode    int64
	Subscriptions *shared.Subscriptions
}
