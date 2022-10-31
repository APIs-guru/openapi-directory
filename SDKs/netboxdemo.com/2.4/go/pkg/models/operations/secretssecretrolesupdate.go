package operations

import (
	"openapi/pkg/models/shared"
)

type SecretsSecretRolesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SecretsSecretRolesUpdateRequest struct {
	PathParams SecretsSecretRolesUpdatePathParams
	Request    shared.SecretRole `request:"mediaType=application/json"`
}

type SecretsSecretRolesUpdateResponse struct {
	ContentType string
	SecretRole  *shared.SecretRole
	StatusCode  int64
}
