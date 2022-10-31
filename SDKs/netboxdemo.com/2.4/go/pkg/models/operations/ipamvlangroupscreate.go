package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVlanGroupsCreateRequest struct {
	Request shared.WritableVlanGroup `request:"mediaType=application/json"`
}

type IpamVlanGroupsCreateResponse struct {
	ContentType string
	StatusCode  int64
	VlanGroup   *shared.VlanGroup
}
