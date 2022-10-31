package operations

import (
"openapi/pkg/models/shared")

type AsyncClusteringProblemRequest struct {
    Request shared.ClusterRequest `request:"mediaType=application/json"`
    
}

type AsyncClusteringProblemResponse struct {
    BadRequest *shared.BadRequest 
    ContentType string 
    Headers map[string][]string 
    InternalErrorMessage *shared.InternalErrorMessage 
    JobID *shared.JobID 
    StatusCode int64 
    
}

