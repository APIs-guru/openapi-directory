package operations

import (
	"openapi/pkg/models/shared"
)

type IpamPrefixesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamPrefixesPartialUpdateRequest struct {
	PathParams IpamPrefixesPartialUpdatePathParams
	Request    shared.WritablePrefixInput `request:"mediaType=application/json"`
}

type IpamPrefixesPartialUpdateResponse struct {
	ContentType string
	Prefix      *shared.Prefix
	StatusCode  int64
}
