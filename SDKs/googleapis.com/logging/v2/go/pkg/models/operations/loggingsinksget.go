package operations

import (
"openapi/pkg/models/shared")

type LoggingSinksGetPathParams struct {
    SinkName string `pathParam:"style=simple,explode=false,name=sinkName"`
    
}

type LoggingSinksGetQueryParams struct {
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

type LoggingSinksGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingSinksGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingSinksGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingSinksGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingSinksGetSecurity struct {
    Option1 *LoggingSinksGetSecurityOption1 `security:"option"`
    Option2 *LoggingSinksGetSecurityOption2 `security:"option"`
    Option3 *LoggingSinksGetSecurityOption3 `security:"option"`
    Option4 *LoggingSinksGetSecurityOption4 `security:"option"`
    
}

type LoggingSinksGetRequest struct {
    PathParams LoggingSinksGetPathParams 
    QueryParams LoggingSinksGetQueryParams 
    Security LoggingSinksGetSecurity 
    
}

type LoggingSinksGetResponse struct {
    ContentType string 
    LogSink *shared.LogSink 
    StatusCode int64 
    
}

