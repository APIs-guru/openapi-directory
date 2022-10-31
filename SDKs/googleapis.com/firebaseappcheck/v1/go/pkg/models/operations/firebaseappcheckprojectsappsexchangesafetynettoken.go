package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams struct {
    App string `pathParam:"style=simple,explode=false,name=app"`
    
}

type FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams struct {
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

type FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity struct {
    Option1 *FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest struct {
    PathParams FirebaseappcheckProjectsAppsExchangeSafetyNetTokenPathParams 
    QueryParams FirebaseappcheckProjectsAppsExchangeSafetyNetTokenQueryParams 
    Request *shared.GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest `request:"mediaType=application/json"`
    Security FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity 
    
}

type FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1AppCheckToken *shared.GoogleFirebaseAppcheckV1AppCheckToken 
    StatusCode int64 
    
}

