package operations

import (
"openapi/pkg/models/shared")

type SQLSslCertsDeletePathParams struct {
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Sha1Fingerprint string `pathParam:"style=simple,explode=false,name=sha1Fingerprint"`
    
}

type SQLSslCertsDeleteQueryParams struct {
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

type SQLSslCertsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLSslCertsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLSslCertsDeleteSecurity struct {
    Option1 *SQLSslCertsDeleteSecurityOption1 `security:"option"`
    Option2 *SQLSslCertsDeleteSecurityOption2 `security:"option"`
    
}

type SQLSslCertsDeleteRequest struct {
    PathParams SQLSslCertsDeletePathParams 
    QueryParams SQLSslCertsDeleteQueryParams 
    Security SQLSslCertsDeleteSecurity 
    
}

type SQLSslCertsDeleteResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

