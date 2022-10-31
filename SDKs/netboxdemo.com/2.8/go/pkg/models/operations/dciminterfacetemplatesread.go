package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceTemplatesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfaceTemplatesReadRequest struct {
	PathParams DcimInterfaceTemplatesReadPathParams
}

type DcimInterfaceTemplatesReadResponse struct {
	ContentType       string
	InterfaceTemplate *shared.InterfaceTemplate
	StatusCode        int64
}
