package operations

import (
"openapi/pkg/models/shared")

type CircuitsCircuitTerminationsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type CircuitsCircuitTerminationsReadRequest struct {
    PathParams CircuitsCircuitTerminationsReadPathParams 
    
}

type CircuitsCircuitTerminationsReadResponse struct {
    CircuitTermination *shared.CircuitTermination 
    ContentType string 
    StatusCode int64 
    
}

