package operations

import (
"openapi/pkg/models/shared")

type CloudtraceProjectsTraceSinksCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudtraceProjectsTraceSinksCreateQueryParams struct {
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

type CloudtraceProjectsTraceSinksCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsTraceSinksCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsTraceSinksCreateSecurity struct {
    Option1 *CloudtraceProjectsTraceSinksCreateSecurityOption1 `security:"option"`
    Option2 *CloudtraceProjectsTraceSinksCreateSecurityOption2 `security:"option"`
    
}

type CloudtraceProjectsTraceSinksCreateRequest struct {
    PathParams CloudtraceProjectsTraceSinksCreatePathParams 
    QueryParams CloudtraceProjectsTraceSinksCreateQueryParams 
    Request *shared.TraceSink `request:"mediaType=application/json"`
    Security CloudtraceProjectsTraceSinksCreateSecurity 
    
}

type CloudtraceProjectsTraceSinksCreateResponse struct {
    ContentType string 
    StatusCode int64 
    TraceSink *shared.TraceSink 
    
}

