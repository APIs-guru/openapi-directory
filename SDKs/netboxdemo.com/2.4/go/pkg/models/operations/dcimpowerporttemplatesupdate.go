package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPortTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPortTemplatesUpdateRequest struct {
	PathParams DcimPowerPortTemplatesUpdatePathParams
	Request    shared.WritablePowerPortTemplateInput `request:"mediaType=application/json"`
}

type DcimPowerPortTemplatesUpdateResponse struct {
	ContentType       string
	PowerPortTemplate *shared.PowerPortTemplate
	StatusCode        int64
}
