package operations

import (
"openapi/pkg/models/shared")

type PubsubProjectsSnapshotsGetPathParams struct {
    Snapshot string `pathParam:"style=simple,explode=false,name=snapshot"`
    
}

type PubsubProjectsSnapshotsGetQueryParams struct {
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

type PubsubProjectsSnapshotsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSnapshotsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PubsubProjectsSnapshotsGetSecurity struct {
    Option1 *PubsubProjectsSnapshotsGetSecurityOption1 `security:"option"`
    Option2 *PubsubProjectsSnapshotsGetSecurityOption2 `security:"option"`
    
}

type PubsubProjectsSnapshotsGetRequest struct {
    PathParams PubsubProjectsSnapshotsGetPathParams 
    QueryParams PubsubProjectsSnapshotsGetQueryParams 
    Security PubsubProjectsSnapshotsGetSecurity 
    
}

type PubsubProjectsSnapshotsGetResponse struct {
    ContentType string 
    Snapshot *shared.Snapshot 
    StatusCode int64 
    
}

