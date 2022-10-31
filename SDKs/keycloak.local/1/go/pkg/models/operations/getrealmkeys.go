package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmKeysPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmKeysRequest struct {
	PathParams GetRealmKeysPathParams
}

type GetRealmKeysResponse struct {
	ContentType                string
	KeysMetadataRepresentation *shared.KeysMetadataRepresentation
	StatusCode                 int64
}
