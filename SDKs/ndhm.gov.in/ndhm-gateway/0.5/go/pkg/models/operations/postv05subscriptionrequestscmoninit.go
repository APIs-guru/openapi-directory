package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05SubscriptionRequestsCmOnInitHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
	XHiuID        string `header:"style=simple,explode=false,name=X-HIU-ID"`
}

type PostV05SubscriptionRequestsCmOnInitRequest struct {
	Headers PostV05SubscriptionRequestsCmOnInitHeaders
	Request shared.HiuSubscriptionRequestReceipt `request:"mediaType=application/json"`
}

type PostV05SubscriptionRequestsCmOnInitResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
