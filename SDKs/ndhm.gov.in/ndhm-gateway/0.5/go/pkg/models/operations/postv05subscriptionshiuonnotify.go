package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05SubscriptionsHiuOnNotifyHeaders struct {
	Authorization string `header:"name=Authorization"`
	XCmID         string `header:"name=X-CM-ID"`
}

type PostV05SubscriptionsHiuOnNotifyRequest struct {
	Headers PostV05SubscriptionsHiuOnNotifyHeaders
	Request shared.HiuSubscriptionNotificationAcknowledgment `request:"mediaType=application/json"`
}

type PostV05SubscriptionsHiuOnNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
