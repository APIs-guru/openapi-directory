package operations

import (
	"openapi/pkg/models/shared"
)

type IpamPrefixesAvailableIpsCreatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamPrefixesAvailableIpsCreateRequest struct {
	PathParams IpamPrefixesAvailableIpsCreatePathParams
	Request    shared.WritablePrefix `request:"mediaType=application/json"`
}

type IpamPrefixesAvailableIpsCreateResponse struct {
	ContentType string
	Prefix      *shared.Prefix
	StatusCode  int64
}
