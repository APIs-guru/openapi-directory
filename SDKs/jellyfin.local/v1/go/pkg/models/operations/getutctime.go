package operations

import (
	"openapi/pkg/models/shared"
)

type GetUtcTimeResponse struct {
	ContentType     string
	StatusCode      int64
	UtcTimeResponse *shared.UtcTimeResponse
}
