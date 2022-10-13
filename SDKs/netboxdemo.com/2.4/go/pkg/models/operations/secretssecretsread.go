package operations

import (
	"openapi/pkg/models/shared"
)

type SecretsSecretsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SecretsSecretsReadRequest struct {
	PathParams SecretsSecretsReadPathParams
}

type SecretsSecretsReadResponse struct {
	ContentType string
	Secret      *shared.Secret
	StatusCode  int64
}
