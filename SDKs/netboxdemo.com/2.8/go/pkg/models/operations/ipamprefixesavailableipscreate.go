package operations

import (
	"openapi/pkg/models/shared"
)

type IpamPrefixesAvailableIpsCreatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamPrefixesAvailableIpsCreateRequest struct {
	PathParams IpamPrefixesAvailableIpsCreatePathParams
}

type IpamPrefixesAvailableIpsCreateResponse struct {
	AvailableIps []shared.AvailableIP
	ContentType  string
	StatusCode   int64
}
