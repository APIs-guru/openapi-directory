package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerOutletTemplatesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerOutletTemplatesPartialUpdateRequest struct {
	PathParams DcimPowerOutletTemplatesPartialUpdatePathParams
	Request    shared.WritablePowerOutletTemplateInput `request:"mediaType=application/json"`
}

type DcimPowerOutletTemplatesPartialUpdateResponse struct {
	ContentType         string
	PowerOutletTemplate *shared.PowerOutletTemplate
	StatusCode          int64
}
