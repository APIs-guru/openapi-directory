package operations

import (
"openapi/pkg/models/shared")

type CloudtasksProjectsLocationsQueuesTasksBufferPathParams struct {
    Queue string `pathParam:"style=simple,explode=false,name=queue"`
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type CloudtasksProjectsLocationsQueuesTasksBufferQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudtasksProjectsLocationsQueuesTasksBufferSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtasksProjectsLocationsQueuesTasksBufferRequest struct {
    PathParams CloudtasksProjectsLocationsQueuesTasksBufferPathParams 
    QueryParams CloudtasksProjectsLocationsQueuesTasksBufferQueryParams 
    Request *shared.BufferTaskRequest `request:"mediaType=application/json"`
    Security CloudtasksProjectsLocationsQueuesTasksBufferSecurity 
    
}

type CloudtasksProjectsLocationsQueuesTasksBufferResponse struct {
    BufferTaskResponse *shared.BufferTaskResponse 
    ContentType string 
    StatusCode int64 
    
}

