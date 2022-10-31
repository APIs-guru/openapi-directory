package operations

import (
"openapi/pkg/models/shared")

type SQLSslCertsInsertPathParams struct {
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type SQLSslCertsInsertQueryParams struct {
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

type SQLSslCertsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLSslCertsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLSslCertsInsertSecurity struct {
    Option1 *SQLSslCertsInsertSecurityOption1 `security:"option"`
    Option2 *SQLSslCertsInsertSecurityOption2 `security:"option"`
    
}

type SQLSslCertsInsertRequest struct {
    PathParams SQLSslCertsInsertPathParams 
    QueryParams SQLSslCertsInsertQueryParams 
    Request *shared.SslCertsInsertRequest `request:"mediaType=application/json"`
    Security SQLSslCertsInsertSecurity 
    
}

type SQLSslCertsInsertResponse struct {
    ContentType string 
    SslCertsInsertResponse *shared.SslCertsInsertResponse 
    StatusCode int64 
    
}

