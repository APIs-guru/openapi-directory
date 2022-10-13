package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRacksUnitsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimRacksUnitsRequest struct {
	PathParams DcimRacksUnitsPathParams
}

type DcimRacksUnitsResponse struct {
	ContentType string
	Rack        *shared.Rack
	StatusCode  int64
}
