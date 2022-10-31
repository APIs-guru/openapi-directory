package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05SubscriptionRequestsHiuNotifyHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05SubscriptionRequestsHiuNotifyRequests struct {
	ApplicationXML                   []byte                                   `request:"mediaType=application/xml"`
	SubscriptionApprovalNotification *shared.SubscriptionApprovalNotification `request:"mediaType=application/json"`
}

type PostV05SubscriptionRequestsHiuNotifyRequest struct {
	Headers PostV05SubscriptionRequestsHiuNotifyHeaders
	Request PostV05SubscriptionRequestsHiuNotifyRequests
}

type PostV05SubscriptionRequestsHiuNotifyResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
