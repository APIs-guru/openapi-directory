package operations

import (
"openapi/pkg/models/shared")

type SQLSslCertsGetPathParams struct {
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Sha1Fingerprint string `pathParam:"style=simple,explode=false,name=sha1Fingerprint"`
    
}

type SQLSslCertsGetQueryParams struct {
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

type SQLSslCertsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLSslCertsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLSslCertsGetSecurity struct {
    Option1 *SQLSslCertsGetSecurityOption1 `security:"option"`
    Option2 *SQLSslCertsGetSecurityOption2 `security:"option"`
    
}

type SQLSslCertsGetRequest struct {
    PathParams SQLSslCertsGetPathParams 
    QueryParams SQLSslCertsGetQueryParams 
    Security SQLSslCertsGetSecurity 
    
}

type SQLSslCertsGetResponse struct {
    ContentType string 
    SslCert *shared.SslCert 
    StatusCode int64 
    
}

