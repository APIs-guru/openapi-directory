package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVlansReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamVlansReadRequest struct {
	PathParams IpamVlansReadPathParams
}

type IpamVlansReadResponse struct {
	ContentType string
	StatusCode  int64
	Vlan        *shared.Vlan
}
