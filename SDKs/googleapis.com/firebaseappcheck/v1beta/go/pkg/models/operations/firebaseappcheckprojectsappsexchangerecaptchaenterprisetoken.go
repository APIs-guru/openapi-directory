package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams struct {
    App string `pathParam:"style=simple,explode=false,name=app"`
    
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams struct {
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

type FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity struct {
    Option1 *FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest struct {
    PathParams FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams 
    QueryParams FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams 
    Request *shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest `request:"mediaType=application/json"`
    Security FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity 
    
}

type FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1betaAppCheckToken *shared.GoogleFirebaseAppcheckV1betaAppCheckToken 
    StatusCode int64 
    
}

