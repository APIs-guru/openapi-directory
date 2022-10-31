package operations

import (
"openapi/pkg/models/shared")

type GmailUsersSettingsGetVacationPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersSettingsGetVacationQueryParams struct {
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

type GmailUsersSettingsGetVacationSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetVacationSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetVacationSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetVacationSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetVacationSecurity struct {
    Option1 *GmailUsersSettingsGetVacationSecurityOption1 `security:"option"`
    Option2 *GmailUsersSettingsGetVacationSecurityOption2 `security:"option"`
    Option3 *GmailUsersSettingsGetVacationSecurityOption3 `security:"option"`
    Option4 *GmailUsersSettingsGetVacationSecurityOption4 `security:"option"`
    
}

type GmailUsersSettingsGetVacationRequest struct {
    PathParams GmailUsersSettingsGetVacationPathParams 
    QueryParams GmailUsersSettingsGetVacationQueryParams 
    Security GmailUsersSettingsGetVacationSecurity 
    
}

type GmailUsersSettingsGetVacationResponse struct {
    ContentType string 
    StatusCode int64 
    VacationSettings *shared.VacationSettings 
    
}

