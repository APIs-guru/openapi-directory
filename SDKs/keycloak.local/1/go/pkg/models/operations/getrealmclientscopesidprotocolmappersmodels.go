package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientScopesIDProtocolMappersModelsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientScopesIDProtocolMappersModelsRequest struct {
	PathParams GetRealmClientScopesIDProtocolMappersModelsPathParams
}

type GetRealmClientScopesIDProtocolMappersModelsResponse struct {
	ContentType                   string
	ProtocolMapperRepresentations []shared.ProtocolMapperRepresentation
	StatusCode                    int64
}
