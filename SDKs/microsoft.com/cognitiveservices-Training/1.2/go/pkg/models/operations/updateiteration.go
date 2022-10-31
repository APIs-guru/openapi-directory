package operations

import (
"openapi/pkg/models/shared")

type UpdateIterationPathParams struct {
    IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type UpdateIterationHeaders struct {
    TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
    
}

type UpdateIterationRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    Iteration *shared.Iteration `request:"mediaType=application/json"`
    Iteration1 *shared.Iteration `request:"mediaType=application/x-www-form-urlencoded"`
    Iteration2 *shared.Iteration `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type UpdateIterationRequest struct {
    PathParams UpdateIterationPathParams 
    Headers UpdateIterationHeaders 
    Request UpdateIterationRequests 
    
}

type UpdateIterationResponse struct {
    Body []byte 
    ContentType string 
    Iteration *shared.Iteration 
    StatusCode int64 
    
}

