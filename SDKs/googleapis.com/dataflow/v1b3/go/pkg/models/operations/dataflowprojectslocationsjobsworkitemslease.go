package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsJobsWorkItemsLeasePathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams struct {
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

type DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsWorkItemsLeaseSecurity struct {
    Option1 *DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsJobsWorkItemsLeaseSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsJobsWorkItemsLeaseRequest struct {
    PathParams DataflowProjectsLocationsJobsWorkItemsLeasePathParams 
    QueryParams DataflowProjectsLocationsJobsWorkItemsLeaseQueryParams 
    Request *shared.LeaseWorkItemRequest `request:"mediaType=application/json"`
    Security DataflowProjectsLocationsJobsWorkItemsLeaseSecurity 
    
}

type DataflowProjectsLocationsJobsWorkItemsLeaseResponse struct {
    ContentType string 
    LeaseWorkItemResponse *shared.LeaseWorkItemResponse 
    StatusCode int64 
    
}

