package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRearPortTemplatesCreateRequest struct {
	Request shared.WritableRearPortTemplateInput `request:"mediaType=application/json"`
}

type DcimRearPortTemplatesCreateResponse struct {
	ContentType      string
	RearPortTemplate *shared.RearPortTemplate
	StatusCode       int64
}
