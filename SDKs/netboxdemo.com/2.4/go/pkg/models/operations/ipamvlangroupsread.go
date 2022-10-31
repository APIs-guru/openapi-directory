package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVlanGroupsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamVlanGroupsReadRequest struct {
	PathParams IpamVlanGroupsReadPathParams
}

type IpamVlanGroupsReadResponse struct {
	ContentType string
	StatusCode  int64
	VlanGroup   *shared.VlanGroup
}
