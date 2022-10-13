package operations

import (
	"openapi/pkg/models/shared"
)

type GetHealthResponse struct {
	APIHealthStatus *shared.APIHealthStatus
	ContentType     string
	StatusCode      int64
}
