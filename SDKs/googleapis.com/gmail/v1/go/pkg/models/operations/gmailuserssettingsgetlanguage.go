package operations

import (
"openapi/pkg/models/shared")

type GmailUsersSettingsGetLanguagePathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersSettingsGetLanguageQueryParams struct {
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

type GmailUsersSettingsGetLanguageSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetLanguageSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetLanguageSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetLanguageSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsGetLanguageSecurity struct {
    Option1 *GmailUsersSettingsGetLanguageSecurityOption1 `security:"option"`
    Option2 *GmailUsersSettingsGetLanguageSecurityOption2 `security:"option"`
    Option3 *GmailUsersSettingsGetLanguageSecurityOption3 `security:"option"`
    Option4 *GmailUsersSettingsGetLanguageSecurityOption4 `security:"option"`
    
}

type GmailUsersSettingsGetLanguageRequest struct {
    PathParams GmailUsersSettingsGetLanguagePathParams 
    QueryParams GmailUsersSettingsGetLanguageQueryParams 
    Security GmailUsersSettingsGetLanguageSecurity 
    
}

type GmailUsersSettingsGetLanguageResponse struct {
    ContentType string 
    LanguageSettings *shared.LanguageSettings 
    StatusCode int64 
    
}

