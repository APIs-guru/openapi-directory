package operations

import (
"openapi/pkg/models/shared")

type UpdateProjectPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type UpdateProjectHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type UpdateProjectRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    Project *shared.Project `request:"mediaType=application/json"`
    Project1 *shared.Project `request:"mediaType=application/x-www-form-urlencoded"`
    Project2 *shared.Project `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type UpdateProjectRequest struct {
    PathParams UpdateProjectPathParams 
    Headers UpdateProjectHeaders 
    Request UpdateProjectRequests 
    
}

type UpdateProjectResponse struct {
    Body []byte 
    ContentType string 
    Project *shared.Project 
    StatusCode int64 
    
}

