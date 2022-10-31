package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsJobsSnapshotsListPathParams struct {
    JobID string `pathParam:"style=simple,explode=false,name=jobId"`
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsLocationsJobsSnapshotsListQueryParams struct {
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

type DataflowProjectsLocationsJobsSnapshotsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsSnapshotsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsSnapshotsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsSnapshotsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsJobsSnapshotsListSecurity struct {
    Option1 *DataflowProjectsLocationsJobsSnapshotsListSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsJobsSnapshotsListSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsJobsSnapshotsListSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsJobsSnapshotsListSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsJobsSnapshotsListRequest struct {
    PathParams DataflowProjectsLocationsJobsSnapshotsListPathParams 
    QueryParams DataflowProjectsLocationsJobsSnapshotsListQueryParams 
    Security DataflowProjectsLocationsJobsSnapshotsListSecurity 
    
}

type DataflowProjectsLocationsJobsSnapshotsListResponse struct {
    ContentType string 
    ListSnapshotsResponse *shared.ListSnapshotsResponse 
    StatusCode int64 
    
}

