package operations

import (
	"openapi/pkg/models/shared"
)

type DcimFrontPortsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimFrontPortsUpdateRequest struct {
	PathParams DcimFrontPortsUpdatePathParams
	Request    shared.WritableFrontPort `request:"mediaType=application/json"`
}

type DcimFrontPortsUpdateResponse struct {
	ContentType string
	FrontPort   *shared.FrontPort
	StatusCode  int64
}
