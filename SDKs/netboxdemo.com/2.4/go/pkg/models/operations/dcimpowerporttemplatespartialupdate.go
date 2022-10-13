package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPortTemplatesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPortTemplatesPartialUpdateRequest struct {
	PathParams DcimPowerPortTemplatesPartialUpdatePathParams
	Request    shared.WritablePowerPortTemplate `request:"mediaType=application/json"`
}

type DcimPowerPortTemplatesPartialUpdateResponse struct {
	ContentType       string
	PowerPortTemplate *shared.PowerPortTemplate
	StatusCode        int64
}
