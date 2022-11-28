package operations

import (
	"openapi/pkg/models/shared"
)

type SecretsSecretRolesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SecretsSecretRolesPartialUpdateRequest struct {
	PathParams SecretsSecretRolesPartialUpdatePathParams
	Request    shared.SecretRoleInput `request:"mediaType=application/json"`
}

type SecretsSecretRolesPartialUpdateResponse struct {
	ContentType string
	SecretRole  *shared.SecretRole
	StatusCode  int64
}
