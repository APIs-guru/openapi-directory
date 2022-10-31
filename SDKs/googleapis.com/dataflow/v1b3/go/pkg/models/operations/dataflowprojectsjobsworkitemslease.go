package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsJobsWorkItemsLeasePathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsJobsWorkItemsLeaseQueryParams struct {
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

type DataflowProjectsJobsWorkItemsLeaseSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsWorkItemsLeaseSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsWorkItemsLeaseSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsWorkItemsLeaseSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsJobsWorkItemsLeaseSecurity struct {
    Option1 *DataflowProjectsJobsWorkItemsLeaseSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsJobsWorkItemsLeaseSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsJobsWorkItemsLeaseSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsJobsWorkItemsLeaseSecurityOption4 `security:"option"`
    
}

type DataflowProjectsJobsWorkItemsLeaseRequest struct {
    PathParams DataflowProjectsJobsWorkItemsLeasePathParams 
    QueryParams DataflowProjectsJobsWorkItemsLeaseQueryParams 
    Request *shared.LeaseWorkItemRequest `request:"mediaType=application/json"`
    Security DataflowProjectsJobsWorkItemsLeaseSecurity 
    
}

type DataflowProjectsJobsWorkItemsLeaseResponse struct {
    ContentType string 
    LeaseWorkItemResponse *shared.LeaseWorkItemResponse 
    StatusCode int64 
    
}

