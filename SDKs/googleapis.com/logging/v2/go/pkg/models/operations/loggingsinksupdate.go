package operations

import (
"openapi/pkg/models/shared")

type LoggingSinksUpdatePathParams struct {
    SinkName string `pathParam:"style=simple,explode=false,name=sinkName"`
    
}

type LoggingSinksUpdateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UniqueWriterIdentity *bool `queryParam:"style=form,explode=true,name=uniqueWriterIdentity"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type LoggingSinksUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingSinksUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingSinksUpdateSecurity struct {
    Option1 *LoggingSinksUpdateSecurityOption1 `security:"option"`
    Option2 *LoggingSinksUpdateSecurityOption2 `security:"option"`
    
}

type LoggingSinksUpdateRequest struct {
    PathParams LoggingSinksUpdatePathParams 
    QueryParams LoggingSinksUpdateQueryParams 
    Request *shared.LogSink `request:"mediaType=application/json"`
    Security LoggingSinksUpdateSecurity 
    
}

type LoggingSinksUpdateResponse struct {
    ContentType string 
    LogSink *shared.LogSink 
    StatusCode int64 
    
}

