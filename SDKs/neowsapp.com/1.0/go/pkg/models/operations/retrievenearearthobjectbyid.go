package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveNearEarthObjectByIDPathParams struct {
	AsteroidID string `pathParam:"style=simple,explode=false,name=asteroid_id"`
}

type RetrieveNearEarthObjectByIDRequest struct {
	PathParams RetrieveNearEarthObjectByIDPathParams
}

type RetrieveNearEarthObjectByIDResponse struct {
	ContentType     string
	NearEarthObject *shared.NearEarthObject
	StatusCode      int64
}
