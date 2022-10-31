package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerOutletTemplatesCreateRequest struct {
	Request shared.WritablePowerOutletTemplate `request:"mediaType=application/json"`
}

type DcimPowerOutletTemplatesCreateResponse struct {
	ContentType         string
	PowerOutletTemplate *shared.PowerOutletTemplate
	StatusCode          int64
}
