package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetBurnTokenRequest struct {
	Request shared.BurnTokenRequest `request:"mediaType=application/json"`
}

type TestnetBurnTokenResponse struct {
	ContentType       string
	Error             *shared.Error
	StatusCode        int64
	BurnTokenResponse *shared.BurnTokenResponse
}
