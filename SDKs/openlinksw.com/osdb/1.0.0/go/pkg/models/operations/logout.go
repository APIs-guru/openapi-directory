package operations

import (
	"openapi/pkg/models/shared"
)

type LogoutResponse struct {
	ContentType    string
	ErrorModel     *shared.ErrorModel
	LogoutResponse *shared.LogoutResponse
	StatusCode     int64
}
