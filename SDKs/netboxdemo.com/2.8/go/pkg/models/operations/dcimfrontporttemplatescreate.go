package operations

import (
	"openapi/pkg/models/shared"
)

type DcimFrontPortTemplatesCreateRequest struct {
	Request shared.WritableFrontPortTemplateInput `request:"mediaType=application/json"`
}

type DcimFrontPortTemplatesCreateResponse struct {
	ContentType       string
	FrontPortTemplate *shared.FrontPortTemplate
	StatusCode        int64
}
