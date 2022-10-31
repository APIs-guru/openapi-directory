package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRacksPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRacksPartialUpdateRequest struct {
	PathParams DcimRacksPartialUpdatePathParams
	Request    shared.WritableRack `request:"mediaType=application/json"`
}

type DcimRacksPartialUpdateResponse struct {
	ContentType string
	Rack        *shared.Rack
	StatusCode  int64
}
