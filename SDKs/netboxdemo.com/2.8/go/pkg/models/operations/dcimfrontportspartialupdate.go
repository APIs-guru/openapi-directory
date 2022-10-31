package operations

import (
	"openapi/pkg/models/shared"
)

type DcimFrontPortsPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimFrontPortsPartialUpdateRequest struct {
	PathParams DcimFrontPortsPartialUpdatePathParams
	Request    shared.WritableFrontPort `request:"mediaType=application/json"`
}

type DcimFrontPortsPartialUpdateResponse struct {
	ContentType string
	FrontPort   *shared.FrontPort
	StatusCode  int64
}
