package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceTemplatesCreateRequest struct {
	Request shared.WritableInterfaceTemplateInput `request:"mediaType=application/json"`
}

type DcimInterfaceTemplatesCreateResponse struct {
	ContentType       string
	InterfaceTemplate *shared.InterfaceTemplate
	StatusCode        int64
}
