package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientScopesIDProtocolMappersProtocolProtocolPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Protocol string `pathParam:"style=simple,explode=false,name=protocol"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientScopesIDProtocolMappersProtocolProtocolRequest struct {
	PathParams GetRealmClientScopesIDProtocolMappersProtocolProtocolPathParams
}

type GetRealmClientScopesIDProtocolMappersProtocolProtocolResponse struct {
	ContentType                   string
	ProtocolMapperRepresentations []shared.ProtocolMapperRepresentation
	StatusCode                    int64
}
