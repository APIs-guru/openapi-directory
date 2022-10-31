package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasTopologyMapsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasTopologyMapsReadRequest struct {
	PathParams ExtrasTopologyMapsReadPathParams
}

type ExtrasTopologyMapsReadResponse struct {
	ContentType string
	StatusCode  int64
	TopologyMap *shared.TopologyMap
}
