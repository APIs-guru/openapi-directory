package operations

import (
	"openapi/pkg/models/shared"
)

type EditLocationPathParams struct {
	GroupID    string `pathParam:"style=simple,explode=false,name=group_id"`
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type EditLocationRequest struct {
	PathParams EditLocationPathParams
	Request    shared.LocationEditRequest `request:"mediaType=application/json"`
}

type EditLocationResponse struct {
	ContentType    string
	LocationResult *shared.LocationResult
	StatusCode     int64
}
