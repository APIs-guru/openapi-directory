package operations

import (
	"openapi/pkg/models/shared"
)

type LoginResponse struct {
	ContentType   string
	ErrorModel    *shared.ErrorModel
	LoginResponse *shared.LoginResponse
	StatusCode    int64
}
