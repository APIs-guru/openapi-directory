package operations

import (
	"openapi/pkg/models/shared"
)

type DcimFrontPortTemplatesReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimFrontPortTemplatesReadRequest struct {
	PathParams DcimFrontPortTemplatesReadPathParams
}

type DcimFrontPortTemplatesReadResponse struct {
	ContentType       string
	FrontPortTemplate *shared.FrontPortTemplate
	StatusCode        int64
}
