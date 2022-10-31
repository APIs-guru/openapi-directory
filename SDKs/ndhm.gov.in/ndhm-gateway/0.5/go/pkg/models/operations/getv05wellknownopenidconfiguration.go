package operations

import (
	"openapi/pkg/models/shared"
)

type GetV05WellKnownOpenidConfigurationResponse struct {
	Body                []byte
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	OpenIDConfiguration *shared.OpenIDConfiguration
	StatusCode          int64
}
