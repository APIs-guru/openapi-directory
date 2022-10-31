package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVlansCreateRequest struct {
	Request shared.WritableVlan `request:"mediaType=application/json"`
}

type IpamVlansCreateResponse struct {
	ContentType string
	StatusCode  int64
	Vlan        *shared.Vlan
}
