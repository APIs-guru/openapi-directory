package operations

import (
"openapi/pkg/models/shared")

type RuntimeconfigProjectsConfigsWaitersDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type RuntimeconfigProjectsConfigsWaitersDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigProjectsConfigsWaitersDeleteSecurity struct {
    Option1 *RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1 `security:"option"`
    Option2 *RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption2 `security:"option"`
    
}

type RuntimeconfigProjectsConfigsWaitersDeleteRequest struct {
    PathParams RuntimeconfigProjectsConfigsWaitersDeletePathParams 
    QueryParams RuntimeconfigProjectsConfigsWaitersDeleteQueryParams 
    Security RuntimeconfigProjectsConfigsWaitersDeleteSecurity 
    
}

type RuntimeconfigProjectsConfigsWaitersDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

