package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams struct {
    App string `pathParam:"style=simple,explode=false,name=app"`
    
}

type FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams struct {
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

type FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity struct {
    Option1 *FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest struct {
    PathParams FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams 
    QueryParams FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity 
    
}

type FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse *shared.GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse 
    StatusCode int64 
    
}

