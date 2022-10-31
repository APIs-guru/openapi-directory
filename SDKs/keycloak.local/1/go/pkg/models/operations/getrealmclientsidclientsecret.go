package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDClientSecretPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDClientSecretRequest struct {
	PathParams GetRealmClientsIDClientSecretPathParams
}

type GetRealmClientsIDClientSecretResponse struct {
	ContentType              string
	CredentialRepresentation *shared.CredentialRepresentation
	StatusCode               int64
}
