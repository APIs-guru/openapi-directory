package operations

import (
"openapi/pkg/models/shared")

type ExtrasTopologyMapsCreateRequest struct {
    Request shared.WritableTopologyMap `request:"mediaType=application/json"`
    
}

type ExtrasTopologyMapsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    TopologyMap *shared.TopologyMap 
    
}

