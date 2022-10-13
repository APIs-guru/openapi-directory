package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatusResponse struct {
	ContentType       string
	QuickConnectState *shared.QuickConnectStateEnum
	StatusCode        int64
}
