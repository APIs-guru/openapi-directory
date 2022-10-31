package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05SubscriptionsHiuNotifyHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05SubscriptionsHiuNotifyRequests struct {
	ApplicationXML              []byte                              `request:"mediaType=application/xml"`
	HiuSubscriptionNotification *shared.HiuSubscriptionNotification `request:"mediaType=application/json"`
}

type PostV05SubscriptionsHiuNotifyRequest struct {
	Headers PostV05SubscriptionsHiuNotifyHeaders
	Request PostV05SubscriptionsHiuNotifyRequests
}

type PostV05SubscriptionsHiuNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
