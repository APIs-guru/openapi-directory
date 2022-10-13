package operations

import (
	"openapi/pkg/models/shared"
)

type SecretsSecretsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SecretsSecretsPartialUpdateRequest struct {
	PathParams SecretsSecretsPartialUpdatePathParams
	Request    shared.WritableSecret `request:"mediaType=application/json"`
}

type SecretsSecretsPartialUpdateResponse struct {
	ContentType string
	Secret      *shared.Secret
	StatusCode  int64
}
