package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerOutletTemplatesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerOutletTemplatesReadRequest struct {
	PathParams DcimPowerOutletTemplatesReadPathParams
}

type DcimPowerOutletTemplatesReadResponse struct {
	ContentType         string
	PowerOutletTemplate *shared.PowerOutletTemplate
	StatusCode          int64
}
