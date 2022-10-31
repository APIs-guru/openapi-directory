package operations

import (
"openapi/pkg/models/shared")

type CircuitsCircuitTypesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type CircuitsCircuitTypesReadRequest struct {
    PathParams CircuitsCircuitTypesReadPathParams 
    
}

type CircuitsCircuitTypesReadResponse struct {
    CircuitType *shared.CircuitType 
    ContentType string 
    StatusCode int64 
    
}

