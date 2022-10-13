package operations

import (
	"openapi/pkg/models/shared"
)

type IpamPrefixesAvailablePrefixesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamPrefixesAvailablePrefixesReadRequest struct {
	PathParams IpamPrefixesAvailablePrefixesReadPathParams
}

type IpamPrefixesAvailablePrefixesReadResponse struct {
	ContentType string
	Prefix      *shared.Prefix
	StatusCode  int64
}
