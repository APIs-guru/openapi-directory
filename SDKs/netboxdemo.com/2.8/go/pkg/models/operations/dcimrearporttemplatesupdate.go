package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRearPortTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRearPortTemplatesUpdateRequest struct {
	PathParams DcimRearPortTemplatesUpdatePathParams
	Request    shared.WritableRearPortTemplate `request:"mediaType=application/json"`
}

type DcimRearPortTemplatesUpdateResponse struct {
	ContentType      string
	RearPortTemplate *shared.RearPortTemplate
	StatusCode       int64
}
