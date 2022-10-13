package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetSendTokenRequest struct {
	Request shared.SendTokenRequest `request:"mediaType=application/json"`
}

type TestnetSendTokenResponse struct {
	ContentType       string
	Error             *shared.Error
	StatusCode        int64
	SendTokenResponse *shared.SendTokenResponse
}
