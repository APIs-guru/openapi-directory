package operations

import (
"openapi/pkg/models/shared")

type ScriptProjectsGetContentPathParams struct {
    ScriptID string `pathParam:"style=simple,explode=false,name=scriptId"`
    
}

type ScriptProjectsGetContentQueryParams struct {
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
    VersionNumber *int64 `queryParam:"style=form,explode=true,name=versionNumber"`
    
}

type ScriptProjectsGetContentSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ScriptProjectsGetContentSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ScriptProjectsGetContentSecurity struct {
    Option1 *ScriptProjectsGetContentSecurityOption1 `security:"option"`
    Option2 *ScriptProjectsGetContentSecurityOption2 `security:"option"`
    
}

type ScriptProjectsGetContentRequest struct {
    PathParams ScriptProjectsGetContentPathParams 
    QueryParams ScriptProjectsGetContentQueryParams 
    Security ScriptProjectsGetContentSecurity 
    
}

type ScriptProjectsGetContentResponse struct {
    Content *shared.Content 
    ContentType string 
    StatusCode int64 
    
}

