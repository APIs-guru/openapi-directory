package operations

import (
"openapi/pkg/models/shared")

type GetMatrixSolutionPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    
}

type GetMatrixSolutionRequest struct {
    PathParams GetMatrixSolutionPathParams 
    
}

type GetMatrixSolutionResponse struct {
    ContentType string 
    GhError *shared.GhError 
    Headers map[string][]string 
    MatrixResponse *shared.MatrixResponse 
    StatusCode int64 
    
}

