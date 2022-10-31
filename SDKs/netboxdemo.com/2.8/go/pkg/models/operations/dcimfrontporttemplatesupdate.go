package operations

import (
	"openapi/pkg/models/shared"
)

type DcimFrontPortTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimFrontPortTemplatesUpdateRequest struct {
	PathParams DcimFrontPortTemplatesUpdatePathParams
	Request    shared.WritableFrontPortTemplate `request:"mediaType=application/json"`
}

type DcimFrontPortTemplatesUpdateResponse struct {
	ContentType       string
	FrontPortTemplate *shared.FrontPortTemplate
	StatusCode        int64
}
