package operations

import (
	"openapi/pkg/models/shared"
)

type DcimCablesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimCablesUpdateRequest struct {
	PathParams DcimCablesUpdatePathParams
	Request    shared.WritableCableInput `request:"mediaType=application/json"`
}

type DcimCablesUpdateResponse struct {
	Cable       *shared.Cable
	ContentType string
	StatusCode  int64
}
