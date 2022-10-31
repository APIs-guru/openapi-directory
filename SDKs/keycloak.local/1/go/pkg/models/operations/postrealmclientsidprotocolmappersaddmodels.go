package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientsIDProtocolMappersAddModelsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientsIDProtocolMappersAddModelsRequest struct {
	PathParams PostRealmClientsIDProtocolMappersAddModelsPathParams
	Request    []shared.ProtocolMapperRepresentation `request:"mediaType=application/json"`
}

type PostRealmClientsIDProtocolMappersAddModelsResponse struct {
	ContentType string
	StatusCode  int64
}
