package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRacksUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRacksUpdateRequest struct {
	PathParams DcimRacksUpdatePathParams
	Request    shared.WritableRackInput `request:"mediaType=application/json"`
}

type DcimRacksUpdateResponse struct {
	ContentType string
	Rack        *shared.Rack
	StatusCode  int64
}
