package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountInfoHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetAccountInfoRequest struct {
	Headers GetAccountInfoHeaders
}

type GetAccountInfoResponse struct {
	Account     *shared.Account
	Body        []byte
	ContentType string
	StatusCode  int64
}
