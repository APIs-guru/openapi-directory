package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfaceTemplatesUpdateRequest struct {
	PathParams DcimInterfaceTemplatesUpdatePathParams
	Request    shared.WritableInterfaceTemplateInput `request:"mediaType=application/json"`
}

type DcimInterfaceTemplatesUpdateResponse struct {
	ContentType       string
	InterfaceTemplate *shared.InterfaceTemplate
	StatusCode        int64
}
