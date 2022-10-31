package operations

import (
"openapi/pkg/models/shared")

type CircuitsCircuitTerminationsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type CircuitsCircuitTerminationsPartialUpdateRequest struct {
    PathParams CircuitsCircuitTerminationsPartialUpdatePathParams 
    Request shared.WritableCircuitTermination `request:"mediaType=application/json"`
    
}

type CircuitsCircuitTerminationsPartialUpdateResponse struct {
    CircuitTermination *shared.CircuitTermination 
    ContentType string 
    StatusCode int64 
    
}

