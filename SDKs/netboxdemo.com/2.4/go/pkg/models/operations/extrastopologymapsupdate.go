package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasTopologyMapsUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type ExtrasTopologyMapsUpdateRequest struct {
	PathParams ExtrasTopologyMapsUpdatePathParams
	Request    shared.WritableTopologyMapInput `request:"mediaType=application/json"`
}

type ExtrasTopologyMapsUpdateResponse struct {
	ContentType string
	StatusCode  int64
	TopologyMap *shared.TopologyMap
}
