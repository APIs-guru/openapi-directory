package operations

import (
"openapi/pkg/models/shared")

type ExtrasTopologyMapsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasTopologyMapsPartialUpdateRequest struct {
    PathParams ExtrasTopologyMapsPartialUpdatePathParams 
    Request shared.WritableTopologyMap `request:"mediaType=application/json"`
    
}

type ExtrasTopologyMapsPartialUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    TopologyMap *shared.TopologyMap 
    
}

