package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsSnapshotsListPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type DataflowProjectsLocationsSnapshotsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    JobID *string `queryParam:"style=form,explode=true,name=jobId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DataflowProjectsLocationsSnapshotsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsSnapshotsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsSnapshotsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsSnapshotsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsSnapshotsListSecurity struct {
    Option1 *DataflowProjectsLocationsSnapshotsListSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsSnapshotsListSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsSnapshotsListSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsSnapshotsListSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsSnapshotsListRequest struct {
    PathParams DataflowProjectsLocationsSnapshotsListPathParams 
    QueryParams DataflowProjectsLocationsSnapshotsListQueryParams 
    Security DataflowProjectsLocationsSnapshotsListSecurity 
    
}

type DataflowProjectsLocationsSnapshotsListResponse struct {
    ContentType string 
    ListSnapshotsResponse *shared.ListSnapshotsResponse 
    StatusCode int64 
    
}

