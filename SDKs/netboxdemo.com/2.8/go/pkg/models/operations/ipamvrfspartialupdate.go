package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVrfsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamVrfsPartialUpdateRequest struct {
	PathParams IpamVrfsPartialUpdatePathParams
	Request    shared.WritableVrf `request:"mediaType=application/json"`
}

type IpamVrfsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
	Vrf         *shared.Vrf
}
