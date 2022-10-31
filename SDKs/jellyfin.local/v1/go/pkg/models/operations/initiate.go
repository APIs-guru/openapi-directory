package operations

import (
	"openapi/pkg/models/shared"
)

type InitiateResponse struct {
	ContentType        string
	QuickConnectResult *shared.QuickConnectResult
	StatusCode         int64
}
