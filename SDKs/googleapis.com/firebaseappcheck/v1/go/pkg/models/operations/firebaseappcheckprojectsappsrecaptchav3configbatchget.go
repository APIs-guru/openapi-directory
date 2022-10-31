package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Names []string `queryParam:"style=form,explode=true,name=names"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity struct {
    Option1 *FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest struct {
    PathParams FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams 
    QueryParams FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams 
    Security FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity 
    
}

type FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse *shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse 
    StatusCode int64 
    
}

