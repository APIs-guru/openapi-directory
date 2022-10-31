package operations

import (
"openapi/pkg/models/shared")

type CircuitsCircuitTypesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type CircuitsCircuitTypesPartialUpdateRequest struct {
    PathParams CircuitsCircuitTypesPartialUpdatePathParams 
    Request shared.CircuitType `request:"mediaType=application/json"`
    
}

type CircuitsCircuitTypesPartialUpdateResponse struct {
    CircuitType *shared.CircuitType 
    ContentType string 
    StatusCode int64 
    
}

