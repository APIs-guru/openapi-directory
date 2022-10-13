package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmUsersIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmUsersIDRequest struct {
	PathParams GetRealmUsersIDPathParams
}

type GetRealmUsersIDResponse struct {
	ContentType        string
	StatusCode         int64
	UserRepresentation *shared.UserRepresentation
}
