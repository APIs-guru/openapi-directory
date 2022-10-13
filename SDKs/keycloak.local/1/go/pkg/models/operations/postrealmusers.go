package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmUsersPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmUsersRequest struct {
	PathParams PostRealmUsersPathParams
	Request    shared.UserRepresentation `request:"mediaType=application/json"`
}

type PostRealmUsersResponse struct {
	ContentType string
	StatusCode  int64
}
