package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmRequest struct {
	PathParams GetRealmPathParams
}

type GetRealmResponse struct {
	ContentType         string
	RealmRepresentation *shared.RealmRepresentation
	StatusCode          int64
}
