package operations

import (
	"openapi/pkg/models/shared"
)

type GetVVersionAreasAreaIdsPathParams struct {
	AreaIds string `pathParam:"style=simple,explode=false,name=area_Ids"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetVVersionAreasAreaIdsRequest struct {
	PathParams GetVVersionAreasAreaIdsPathParams
}

type GetVVersionAreasAreaIdsResponse struct {
	AreaResponse *shared.AreaResponse
	ContentType  string
	StatusCode   int64
}
