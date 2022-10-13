package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRirsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamRirsUpdateRequest struct {
	PathParams IpamRirsUpdatePathParams
	Request    shared.Rir `request:"mediaType=application/json"`
}

type IpamRirsUpdateResponse struct {
	ContentType string
	Rir         *shared.Rir
	StatusCode  int64
}
