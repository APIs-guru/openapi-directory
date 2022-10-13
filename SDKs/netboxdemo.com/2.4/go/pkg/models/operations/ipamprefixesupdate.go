package operations

import (
	"openapi/pkg/models/shared"
)

type IpamPrefixesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamPrefixesUpdateRequest struct {
	PathParams IpamPrefixesUpdatePathParams
	Request    shared.WritablePrefix `request:"mediaType=application/json"`
}

type IpamPrefixesUpdateResponse struct {
	ContentType string
	Prefix      *shared.Prefix
	StatusCode  int64
}
