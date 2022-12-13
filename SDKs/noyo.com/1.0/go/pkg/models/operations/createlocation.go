package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLocationPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type CreateLocationRequest struct {
	PathParams CreateLocationPathParams
	Request    shared.LocationCreateRequest `request:"mediaType=application/json"`
}

type CreateLocationResponse struct {
	ContentType    string
	LocationResult *shared.LocationResult
	StatusCode     int64
}
