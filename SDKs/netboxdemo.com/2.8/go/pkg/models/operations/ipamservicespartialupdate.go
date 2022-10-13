package operations

import (
	"openapi/pkg/models/shared"
)

type IpamServicesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type IpamServicesPartialUpdateRequest struct {
	PathParams IpamServicesPartialUpdatePathParams
	Request    shared.WritableService `request:"mediaType=application/json"`
}

type IpamServicesPartialUpdateResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
