package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDServiceAccountUserPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDServiceAccountUserRequest struct {
	PathParams GetRealmClientsIDServiceAccountUserPathParams
}

type GetRealmClientsIDServiceAccountUserResponse struct {
	ContentType        string
	StatusCode         int64
	UserRepresentation *shared.UserRepresentation
}
