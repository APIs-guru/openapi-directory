package operations

import (
"time"
"openapi/pkg/models/shared")


type AddProjectModeEnum string

const (
    AddProjectModeEnumFull AddProjectModeEnum = "full"
AddProjectModeEnumSparse AddProjectModeEnum = "sparse"
AddProjectModeEnumUpload AddProjectModeEnum = "upload"
)


type AddProjectQueryParams struct {
    Commit *string `queryParam:"style=form,explode=true,name=commit"`
    Date *time.Time `queryParam:"style=form,explode=true,name=date"`
    Language []string `queryParam:"style=form,explode=true,name=language"`
    Mode *AddProjectModeEnum `queryParam:"style=form,explode=true,name=mode"`
    Repository string `queryParam:"style=form,explode=true,name=repository"`
    WorkerLabel []string `queryParam:"style=form,explode=true,name=worker-label"`
    
}

type AddProjectSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type AddProjectRequest struct {
    QueryParams AddProjectQueryParams 
    Request *string `request:"mediaType=application/x-yaml"`
    Security AddProjectSecurity 
    
}

type AddProjectResponse struct {
    ContentType string 
    StatusCode int64 
    Operation *shared.Operation 
    
}

