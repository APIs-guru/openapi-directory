package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams struct {
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

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity struct {
    Option1 *FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest struct {
    PathParams FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams 
    QueryParams FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams 
    Security FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity 
    
}

type FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse *shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse 
    StatusCode int64 
    
}

