package operations

import (
	"openapi/pkg/models/shared"
)

type DcimCablesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimCablesReadRequest struct {
	PathParams DcimCablesReadPathParams
}

type DcimCablesReadResponse struct {
	Cable       *shared.Cable
	ContentType string
	StatusCode  int64
}
