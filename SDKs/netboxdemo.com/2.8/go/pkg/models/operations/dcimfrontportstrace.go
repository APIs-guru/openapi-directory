package operations

import (
	"openapi/pkg/models/shared"
)

type DcimFrontPortsTracePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimFrontPortsTraceRequest struct {
	PathParams DcimFrontPortsTracePathParams
}

type DcimFrontPortsTraceResponse struct {
	ContentType string
	FrontPort   *shared.FrontPort
	StatusCode  int64
}
