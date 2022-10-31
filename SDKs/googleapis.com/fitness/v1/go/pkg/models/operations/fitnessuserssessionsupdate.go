package operations

import (
"openapi/pkg/models/shared")

type FitnessUsersSessionsUpdatePathParams struct {
    SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type FitnessUsersSessionsUpdateQueryParams struct {
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

type FitnessUsersSessionsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersSessionsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FitnessUsersSessionsUpdateSecurity struct {
    Option1 *FitnessUsersSessionsUpdateSecurityOption1 `security:"option"`
    Option2 *FitnessUsersSessionsUpdateSecurityOption2 `security:"option"`
    
}

type FitnessUsersSessionsUpdateRequest struct {
    PathParams FitnessUsersSessionsUpdatePathParams 
    QueryParams FitnessUsersSessionsUpdateQueryParams 
    Request *shared.Session `request:"mediaType=application/json"`
    Security FitnessUsersSessionsUpdateSecurity 
    
}

type FitnessUsersSessionsUpdateResponse struct {
    ContentType string 
    Session *shared.Session 
    StatusCode int64 
    
}

