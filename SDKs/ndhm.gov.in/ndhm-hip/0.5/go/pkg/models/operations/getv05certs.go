package operations

import (
	"openapi/pkg/models/shared"
)

type GetV05CertsResponse struct {
	Body          []byte
	Certs         *shared.Certs
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
