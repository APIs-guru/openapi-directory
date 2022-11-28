package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVrfsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamVrfsUpdateRequest struct {
	PathParams IpamVrfsUpdatePathParams
	Request    shared.WritableVrfInput `request:"mediaType=application/json"`
}

type IpamVrfsUpdateResponse struct {
	ContentType string
	StatusCode  int64
	Vrf         *shared.Vrf
}
