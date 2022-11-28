package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPortTemplatesCreateRequest struct {
	Request shared.WritablePowerPortTemplateInput `request:"mediaType=application/json"`
}

type DcimPowerPortTemplatesCreateResponse struct {
	ContentType       string
	PowerPortTemplate *shared.PowerPortTemplate
	StatusCode        int64
}
