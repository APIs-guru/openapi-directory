package operations

import (
	"openapi/pkg/models/shared"
)

type GetRealmGroupsIDRoleMappingsPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type GetRealmGroupsIDRoleMappingsRequest struct {
	PathParams GetRealmGroupsIDRoleMappingsPathParams
}

type GetRealmGroupsIDRoleMappingsResponse struct {
	ContentType            string
	MappingsRepresentation *shared.MappingsRepresentation
	StatusCode             int64
}
