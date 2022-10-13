package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetSyncResponse struct {
	ContentType     string
	StatusCode      int64
	GetSyncResponse *shared.GetSyncResponse
}
