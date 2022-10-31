package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientsIDProtocolMappersModelsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientsIDProtocolMappersModelsRequest struct {
	PathParams PostRealmClientsIDProtocolMappersModelsPathParams
	Request    shared.ProtocolMapperRepresentation `request:"mediaType=application/json"`
}

type PostRealmClientsIDProtocolMappersModelsResponse struct {
	ContentType string
	StatusCode  int64
}
