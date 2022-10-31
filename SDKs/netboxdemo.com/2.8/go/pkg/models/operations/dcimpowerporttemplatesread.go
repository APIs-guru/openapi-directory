package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPortTemplatesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPortTemplatesReadRequest struct {
	PathParams DcimPowerPortTemplatesReadPathParams
}

type DcimPowerPortTemplatesReadResponse struct {
	ContentType       string
	PowerPortTemplate *shared.PowerPortTemplate
	StatusCode        int64
}
