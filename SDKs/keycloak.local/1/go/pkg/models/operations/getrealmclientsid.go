package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDRequest struct {
	PathParams GetRealmClientsIDPathParams
}

type GetRealmClientsIDResponse struct {
	ClientRepresentation *shared.ClientRepresentation
	ContentType          string
	StatusCode           int64
}
