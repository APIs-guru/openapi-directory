package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmUsersIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmUsersIDRequest struct {
	PathParams PutRealmUsersIDPathParams
	Request    shared.UserRepresentation `request:"mediaType=application/json"`
}

type PutRealmUsersIDResponse struct {
	ContentType string
	StatusCode  int64
}
