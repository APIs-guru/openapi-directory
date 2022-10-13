package operations

import (
	"openapi/pkg/models/shared"
)

type APIHealthReadResponse struct {
	ContentType    string
	HealthResponse *shared.HealthResponse
	StatusCode     int64
}
