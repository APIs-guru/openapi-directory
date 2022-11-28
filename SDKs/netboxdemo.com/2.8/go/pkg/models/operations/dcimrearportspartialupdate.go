package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRearPortsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRearPortsPartialUpdateRequest struct {
	PathParams DcimRearPortsPartialUpdatePathParams
	Request    shared.WritableRearPortInput `request:"mediaType=application/json"`
}

type DcimRearPortsPartialUpdateResponse struct {
	ContentType string
	RearPort    *shared.RearPort
	StatusCode  int64
}
