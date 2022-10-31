package operations

import (
	"openapi/pkg/models/shared"
)

type GetSpotListByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSpotListByIDRequest struct {
	PathParams GetSpotListByIDPathParams
}

type GetSpotListByIDResponse struct {
	ContentType string
	SpotList    *shared.SpotList
	StatusCode  int64
}
