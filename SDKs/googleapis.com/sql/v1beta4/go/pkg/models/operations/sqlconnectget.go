package operations

import (
"openapi/pkg/models/shared")

type SQLConnectGetPathParams struct {
    Instance string `pathParam:"style=simple,explode=false,name=instance"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type SQLConnectGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ReadTime *string `queryParam:"style=form,explode=true,name=readTime"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SQLConnectGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLConnectGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SQLConnectGetSecurity struct {
    Option1 *SQLConnectGetSecurityOption1 `security:"option"`
    Option2 *SQLConnectGetSecurityOption2 `security:"option"`
    
}

type SQLConnectGetRequest struct {
    PathParams SQLConnectGetPathParams 
    QueryParams SQLConnectGetQueryParams 
    Security SQLConnectGetSecurity 
    
}

type SQLConnectGetResponse struct {
    ConnectSettings *shared.ConnectSettings 
    ContentType string 
    StatusCode int64 
    
}

