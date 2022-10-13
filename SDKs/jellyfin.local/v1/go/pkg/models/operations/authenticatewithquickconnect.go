package operations

import (
	"openapi/pkg/models/shared"
)

type AuthenticateWithQuickConnectRequests struct {
	QuickConnectDto  *shared.QuickConnectDto `request:"mediaType=application/*+json"`
	QuickConnectDto1 *shared.QuickConnectDto `request:"mediaType=application/json"`
	QuickConnectDto2 *shared.QuickConnectDto `request:"mediaType=text/json"`
}

type AuthenticateWithQuickConnectRequest struct {
	Request AuthenticateWithQuickConnectRequests
}

type AuthenticateWithQuickConnectResponse struct {
	AuthenticationResult *shared.AuthenticationResult
	ContentType          string
	StatusCode           int64
}
