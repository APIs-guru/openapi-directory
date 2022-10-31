package operations

import (
"openapi/pkg/models/shared")

type ProjectsCreateRequest struct {
    Request shared.ProjectRequest `request:"mediaType=application/json"`
    
}

type ProjectsCreateResponse struct {
    ContentType string 
    ProjectResponse *shared.ProjectResponse 
    StatusCode int64 
    
}

