package operations

import (
"openapi/pkg/models/shared")

type SolveClusteringProblemRequest struct {
    Request shared.ClusterRequest `request:"mediaType=application/json"`
    
}

type SolveClusteringProblemResponse struct {
    BadRequest *shared.BadRequest 
    ClusterResponse *shared.ClusterResponse 
    ContentType string 
    Headers map[string][]string 
    InternalErrorMessage *shared.InternalErrorMessage 
    StatusCode int64 
    
}

