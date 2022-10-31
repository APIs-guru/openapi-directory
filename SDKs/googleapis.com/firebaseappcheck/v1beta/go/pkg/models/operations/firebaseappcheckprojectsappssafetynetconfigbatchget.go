package operations

import (
"openapi/pkg/models/shared")

type FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetQueryParams struct {
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

type FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity struct {
    Option1 *FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1 `security:"option"`
    Option2 *FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption2 `security:"option"`
    
}

type FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest struct {
    PathParams FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetPathParams 
    QueryParams FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetQueryParams 
    Security FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity 
    
}

type FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse struct {
    ContentType string 
    GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse *shared.GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse 
    StatusCode int64 
    
}

