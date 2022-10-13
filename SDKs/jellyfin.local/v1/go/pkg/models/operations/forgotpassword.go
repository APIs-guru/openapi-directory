package operations

import (
	"openapi/pkg/models/shared"
)

type ForgotPasswordRequests struct {
	ForgotPasswordDto  *shared.ForgotPasswordDto `request:"mediaType=application/*+json"`
	ForgotPasswordDto1 *shared.ForgotPasswordDto `request:"mediaType=application/json"`
	ForgotPasswordDto2 *shared.ForgotPasswordDto `request:"mediaType=text/json"`
}

type ForgotPasswordRequest struct {
	Request ForgotPasswordRequests
}

type ForgotPasswordResponse struct {
	ContentType          string
	ForgotPasswordResult *shared.ForgotPasswordResult
	StatusCode           int64
}
