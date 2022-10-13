package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmUsersIDResetPasswordPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmUsersIDResetPasswordRequest struct {
	PathParams PutRealmUsersIDResetPasswordPathParams
	Request    shared.CredentialRepresentation `request:"mediaType=application/json"`
}

type PutRealmUsersIDResetPasswordResponse struct {
	ContentType string
	StatusCode  int64
}
