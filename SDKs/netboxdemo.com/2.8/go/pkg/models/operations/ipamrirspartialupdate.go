package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRirsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamRirsPartialUpdateRequest struct {
	PathParams IpamRirsPartialUpdatePathParams
	Request    shared.Rir `request:"mediaType=application/json"`
}

type IpamRirsPartialUpdateResponse struct {
	ContentType string
	Rir         *shared.Rir
	StatusCode  int64
}
