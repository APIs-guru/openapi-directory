package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceTemplatesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfaceTemplatesPartialUpdateRequest struct {
	PathParams DcimInterfaceTemplatesPartialUpdatePathParams
	Request    shared.WritableInterfaceTemplateInput `request:"mediaType=application/json"`
}

type DcimInterfaceTemplatesPartialUpdateResponse struct {
	ContentType       string
	InterfaceTemplate *shared.InterfaceTemplate
	StatusCode        int64
}
