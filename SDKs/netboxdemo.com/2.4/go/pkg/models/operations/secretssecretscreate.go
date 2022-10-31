package operations

import (
	"openapi/pkg/models/shared"
)

type SecretsSecretsCreateRequest struct {
	Request shared.WritableSecret `request:"mediaType=application/json"`
}

type SecretsSecretsCreateResponse struct {
	ContentType string
	Secret      *shared.Secret
	StatusCode  int64
}
