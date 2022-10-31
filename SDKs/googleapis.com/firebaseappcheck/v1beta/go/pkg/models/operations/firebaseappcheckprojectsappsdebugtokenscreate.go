package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsAppsDebugTokensCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams struct {
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

type FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsDebugTokensCreateSecurity struct {
    Option1 *FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsAppsDebugTokensCreateRequest struct {
    PathParams FirebaseappcheckProjectsAppsDebugTokensCreatePathParams 
    QueryParams FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams 
    Request *shared.GoogleFirebaseAppcheckV1betaDebugToken `request:"mediaType=application/json"`
    Security FirebaseappcheckProjectsAppsDebugTokensCreateSecurity 
    
}

type FirebaseappcheckProjectsAppsDebugTokensCreateResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1betaDebugToken *shared.GoogleFirebaseAppcheckV1betaDebugToken 
    StatusCode int64 
    
}

