package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRearPortTemplatesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRearPortTemplatesReadRequest struct {
	PathParams DcimRearPortTemplatesReadPathParams
}

type DcimRearPortTemplatesReadResponse struct {
	ContentType      string
	RearPortTemplate *shared.RearPortTemplate
	StatusCode       int64
}
