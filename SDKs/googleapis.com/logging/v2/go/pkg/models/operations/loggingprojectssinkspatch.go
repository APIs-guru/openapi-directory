package operations

import (
"openapi/pkg/models/shared")

type LoggingProjectsSinksPatchPathParams struct {
    SinkName string `pathParam:"style=simple,explode=false,name=sinkName"`
    
}

type LoggingProjectsSinksPatchQueryParams struct {
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

type LoggingProjectsSinksPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsSinksPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsSinksPatchSecurity struct {
    Option1 *LoggingProjectsSinksPatchSecurityOption1 `security:"option"`
    Option2 *LoggingProjectsSinksPatchSecurityOption2 `security:"option"`
    
}

type LoggingProjectsSinksPatchRequest struct {
    PathParams LoggingProjectsSinksPatchPathParams 
    QueryParams LoggingProjectsSinksPatchQueryParams 
    Request *shared.LogSink `request:"mediaType=application/json"`
    Security LoggingProjectsSinksPatchSecurity 
    
}

type LoggingProjectsSinksPatchResponse struct {
    ContentType string 
    LogSink *shared.LogSink 
    StatusCode int64 
    
}

