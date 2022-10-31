package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasTopologyMapsRenderPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasTopologyMapsRenderRequest struct {
	PathParams ExtrasTopologyMapsRenderPathParams
}

type ExtrasTopologyMapsRenderResponse struct {
	ContentType string
	StatusCode  int64
	TopologyMap *shared.TopologyMap
}
