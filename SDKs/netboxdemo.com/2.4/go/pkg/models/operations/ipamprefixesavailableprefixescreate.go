package operations

import (
	"openapi/pkg/models/shared"
)

type IpamPrefixesAvailablePrefixesCreatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamPrefixesAvailablePrefixesCreateRequest struct {
	PathParams IpamPrefixesAvailablePrefixesCreatePathParams
	Request    shared.WritablePrefixInput `request:"mediaType=application/json"`
}

type IpamPrefixesAvailablePrefixesCreateResponse struct {
	ContentType string
	Prefix      *shared.Prefix
	StatusCode  int64
}
