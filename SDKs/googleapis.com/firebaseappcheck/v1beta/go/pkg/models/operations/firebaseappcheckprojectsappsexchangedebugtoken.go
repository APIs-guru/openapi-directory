package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams struct {
    App string `pathParam:"style=simple,explode=false,name=app"`
    
}

type FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams struct {
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

type FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity struct {
    Option1 *FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsAppsExchangeDebugTokenRequest struct {
    PathParams FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams 
    QueryParams FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams 
    Request *shared.GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest `request:"mediaType=application/json"`
    Security FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity 
    
}

type FirebaseappcheckProjectsAppsExchangeDebugTokenResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1betaAppCheckToken *shared.GoogleFirebaseAppcheckV1betaAppCheckToken 
    StatusCode int64 
    
}

