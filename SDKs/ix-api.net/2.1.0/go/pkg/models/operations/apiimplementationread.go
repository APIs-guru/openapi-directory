package operations

import (
	"openapi/pkg/models/shared"
)

type APIImplementationReadResponse struct {
	ContentType            string
	ImplementationResponse *shared.ImplementationResponse
	StatusCode             int64
}
