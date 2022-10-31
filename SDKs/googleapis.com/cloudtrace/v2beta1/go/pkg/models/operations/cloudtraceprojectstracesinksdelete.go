package operations

import (
"openapi/pkg/models/shared")

type CloudtraceProjectsTraceSinksDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudtraceProjectsTraceSinksDeleteQueryParams struct {
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

type CloudtraceProjectsTraceSinksDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsTraceSinksDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsTraceSinksDeleteSecurity struct {
    Option1 *CloudtraceProjectsTraceSinksDeleteSecurityOption1 `security:"option"`
    Option2 *CloudtraceProjectsTraceSinksDeleteSecurityOption2 `security:"option"`
    
}

type CloudtraceProjectsTraceSinksDeleteRequest struct {
    PathParams CloudtraceProjectsTraceSinksDeletePathParams 
    QueryParams CloudtraceProjectsTraceSinksDeleteQueryParams 
    Security CloudtraceProjectsTraceSinksDeleteSecurity 
    
}

type CloudtraceProjectsTraceSinksDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

