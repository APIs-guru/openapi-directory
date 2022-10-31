package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsJobsWorkItemsReportStatusPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsJobsWorkItemsReportStatusQueryParams struct {
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

type DataflowProjectsJobsWorkItemsReportStatusSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsWorkItemsReportStatusSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsWorkItemsReportStatusSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsWorkItemsReportStatusSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsWorkItemsReportStatusSecurity struct {
    Option1 *DataflowProjectsJobsWorkItemsReportStatusSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsJobsWorkItemsReportStatusSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsJobsWorkItemsReportStatusSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsJobsWorkItemsReportStatusSecurityOption4 `security:"option"`
    
}

type DataflowProjectsJobsWorkItemsReportStatusRequest struct {
    PathParams DataflowProjectsJobsWorkItemsReportStatusPathParams 
    QueryParams DataflowProjectsJobsWorkItemsReportStatusQueryParams 
    Request *shared.ReportWorkItemStatusRequest `request:"mediaType=application/json"`
    Security DataflowProjectsJobsWorkItemsReportStatusSecurity 
    
}

type DataflowProjectsJobsWorkItemsReportStatusResponse struct {
    ContentType string 
    ReportWorkItemStatusResponse *shared.ReportWorkItemStatusResponse 
    StatusCode int64 
    
}

