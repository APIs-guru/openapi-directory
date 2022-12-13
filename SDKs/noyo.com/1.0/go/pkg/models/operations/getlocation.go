package operations

import (
	"openapi/pkg/models/shared"
)

type GetLocationPathParams struct {
	GroupID    string `pathParam:"style=simple,explode=false,name=group_id"`
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
}

type GetLocationRequest struct {
	PathParams GetLocationPathParams
}

type GetLocationResponse struct {
	ContentType    string
	LocationResult *shared.LocationResult
	StatusCode     int64
}
