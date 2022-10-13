package operations

import (
	"openapi/pkg/models/shared"
)

type GetLocationByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetLocationByIDRequest struct {
	PathParams GetLocationByIDPathParams
}

type GetLocationByIDResponse struct {
	ContentType string
	Location    *shared.Location
	StatusCode  int64
}
