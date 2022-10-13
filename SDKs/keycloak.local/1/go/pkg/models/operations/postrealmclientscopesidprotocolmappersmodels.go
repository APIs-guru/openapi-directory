package operations

import (
	"openapi/pkg/models/shared"
)

type PostRealmClientScopesIDProtocolMappersModelsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmClientScopesIDProtocolMappersModelsRequest struct {
	PathParams PostRealmClientScopesIDProtocolMappersModelsPathParams
	Request    shared.ProtocolMapperRepresentation `request:"mediaType=application/json"`
}

type PostRealmClientScopesIDProtocolMappersModelsResponse struct {
	ContentType string
	StatusCode  int64
}
