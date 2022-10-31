package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05SubscriptionRequestsHiuOnInitHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05SubscriptionRequestsHiuOnInitRequest struct {
	Headers PostV05SubscriptionRequestsHiuOnInitHeaders
	Request shared.HiuSubscriptionRequestReceipt `request:"mediaType=application/json"`
}

type PostV05SubscriptionRequestsHiuOnInitResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
