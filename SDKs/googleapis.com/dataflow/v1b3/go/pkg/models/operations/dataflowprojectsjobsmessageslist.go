package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsJobsMessagesListPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}


type DataflowProjectsJobsMessagesListMinimumImportanceEnum string

const (
    DataflowProjectsJobsMessagesListMinimumImportanceEnumJobMessageImportanceUnknown DataflowProjectsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
DataflowProjectsJobsMessagesListMinimumImportanceEnumJobMessageDebug DataflowProjectsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_DEBUG"
DataflowProjectsJobsMessagesListMinimumImportanceEnumJobMessageDetailed DataflowProjectsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_DETAILED"
DataflowProjectsJobsMessagesListMinimumImportanceEnumJobMessageBasic DataflowProjectsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_BASIC"
DataflowProjectsJobsMessagesListMinimumImportanceEnumJobMessageWarning DataflowProjectsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_WARNING"
DataflowProjectsJobsMessagesListMinimumImportanceEnumJobMessageError DataflowProjectsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_ERROR"
)


type DataflowProjectsJobsMessagesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    EndTime *string `queryParam:"style=form,explode=true,name=endTime"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Location *string `queryParam:"style=form,explode=true,name=location"`
    MinimumImportance *DataflowProjectsJobsMessagesListMinimumImportanceEnum `queryParam:"style=form,explode=true,name=minimumImportance"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartTime *string `queryParam:"style=form,explode=true,name=startTime"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DataflowProjectsJobsMessagesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsMessagesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsMessagesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsMessagesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsMessagesListSecurity struct {
    Option1 *DataflowProjectsJobsMessagesListSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsJobsMessagesListSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsJobsMessagesListSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsJobsMessagesListSecurityOption4 `security:"option"`
    
}

type DataflowProjectsJobsMessagesListRequest struct {
    PathParams DataflowProjectsJobsMessagesListPathParams 
    QueryParams DataflowProjectsJobsMessagesListQueryParams 
    Security DataflowProjectsJobsMessagesListSecurity 
    
}

type DataflowProjectsJobsMessagesListResponse struct {
    ContentType string 
    ListJobMessagesResponse *shared.ListJobMessagesResponse 
    StatusCode int64 
    
}

