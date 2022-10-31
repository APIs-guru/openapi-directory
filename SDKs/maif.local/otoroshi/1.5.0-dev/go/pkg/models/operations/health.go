package operations

import (
	"openapi/pkg/models/shared"
)

type HealthResponse struct {
	ContentType    string
	OtoroshiHealth *shared.OtoroshiHealth
	StatusCode     int64
}
