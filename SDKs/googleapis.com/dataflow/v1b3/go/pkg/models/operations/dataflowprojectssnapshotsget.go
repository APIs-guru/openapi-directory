package operations

import (
"openapi/pkg/models/shared")

type DataflowProjectsSnapshotsGetPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    SnapshotID string `pathParam:"style=simple,explode=false,name=snapshotId"`
    
}

type DataflowProjectsSnapshotsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Location *string `queryParam:"style=form,explode=true,name=location"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DataflowProjectsSnapshotsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsSnapshotsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsSnapshotsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsSnapshotsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DataflowProjectsSnapshotsGetSecurity struct {
    Option1 *DataflowProjectsSnapshotsGetSecurityOption1 `security:"option"`
    Option2 *DataflowProjectsSnapshotsGetSecurityOption2 `security:"option"`
    Option3 *DataflowProjectsSnapshotsGetSecurityOption3 `security:"option"`
    Option4 *DataflowProjectsSnapshotsGetSecurityOption4 `security:"option"`
    
}

type DataflowProjectsSnapshotsGetRequest struct {
    PathParams DataflowProjectsSnapshotsGetPathParams 
    QueryParams DataflowProjectsSnapshotsGetQueryParams 
    Security DataflowProjectsSnapshotsGetSecurity 
    
}

type DataflowProjectsSnapshotsGetResponse struct {
    ContentType string 
    Snapshot *shared.Snapshot 
    StatusCode int64 
    
}

