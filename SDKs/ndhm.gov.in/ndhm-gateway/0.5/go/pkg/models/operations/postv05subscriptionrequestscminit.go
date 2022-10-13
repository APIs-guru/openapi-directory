package operations

import (
	"openapi/pkg/models/shared"
)

type PostV05SubscriptionRequestsCmInitHeaders struct {
	Authorization string `header:"name=Authorization"`
	XCmID         string `header:"name=X-CM-ID"`
}

type PostV05SubscriptionRequestsCmInitRequests struct {
	ApplicationXML      []byte                      `request:"mediaType=application/xml"`
	SubscriptionRequest *shared.SubscriptionRequest `request:"mediaType=application/json"`
}

type PostV05SubscriptionRequestsCmInitRequest struct {
	Headers PostV05SubscriptionRequestsCmInitHeaders
	Request PostV05SubscriptionRequestsCmInitRequests
}

type PostV05SubscriptionRequestsCmInitResponse struct {
	Body          []byte
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
