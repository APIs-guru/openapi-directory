package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsLocationsSnapshotsGetPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    SnapshotID string `pathParam:"style=simple,explode=false,name=snapshotId"`
    
}

type DataflowProjectsLocationsSnapshotsGetQueryParams struct {
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

type DataflowProjectsLocationsSnapshotsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsSnapshotsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsSnapshotsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsSnapshotsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsLocationsSnapshotsGetSecurity struct {
    Option1 *DataflowProjectsLocationsSnapshotsGetSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsLocationsSnapshotsGetSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsLocationsSnapshotsGetSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsLocationsSnapshotsGetSecurityOption4 `security:"option"`
    
}

type DataflowProjectsLocationsSnapshotsGetRequest struct {
    PathParams DataflowProjectsLocationsSnapshotsGetPathParams 
    QueryParams DataflowProjectsLocationsSnapshotsGetQueryParams 
    Security DataflowProjectsLocationsSnapshotsGetSecurity 
    
}

type DataflowProjectsLocationsSnapshotsGetResponse struct {
    ContentType string 
    Snapshot *shared.Snapshot 
    StatusCode int64 
    
}

