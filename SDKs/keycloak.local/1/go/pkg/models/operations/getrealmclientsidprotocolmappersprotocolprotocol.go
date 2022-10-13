package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmClientsIDProtocolMappersProtocolProtocolPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	Protocol string `pathParam:"style=simple,explode=false,name=protocol"`
	Realm    string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmClientsIDProtocolMappersProtocolProtocolRequest struct {
	PathParams GetRealmClientsIDProtocolMappersProtocolProtocolPathParams
}

type GetRealmClientsIDProtocolMappersProtocolProtocolResponse struct {
	ContentType                   string
	ProtocolMapperRepresentations []shared.ProtocolMapperRepresentation
	StatusCode                    int64
}
