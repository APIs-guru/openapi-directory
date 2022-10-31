package operations

import (
"openapi/pkg/models/shared")

type GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams struct {
    ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
    RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
    
}


type GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum string

const (
    GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnumStatus GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum = "status"
)


type GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams struct {
    View *GetPublishedProjectNameRepositoryNameViewEqualStatusViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetPublishedProjectNameRepositoryNameViewEqualStatusRequest struct {
    PathParams GetPublishedProjectNameRepositoryNameViewEqualStatusPathParams 
    QueryParams GetPublishedProjectNameRepositoryNameViewEqualStatusQueryParams 
    Security GetPublishedProjectNameRepositoryNameViewEqualStatusSecurity 
    
}

type GetPublishedProjectNameRepositoryNameViewEqualStatusResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

