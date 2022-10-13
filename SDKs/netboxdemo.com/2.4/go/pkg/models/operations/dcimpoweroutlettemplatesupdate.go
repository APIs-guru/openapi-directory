package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerOutletTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerOutletTemplatesUpdateRequest struct {
	PathParams DcimPowerOutletTemplatesUpdatePathParams
	Request    shared.WritablePowerOutletTemplate `request:"mediaType=application/json"`
}

type DcimPowerOutletTemplatesUpdateResponse struct {
	ContentType         string
	PowerOutletTemplate *shared.PowerOutletTemplate
	StatusCode          int64
}
