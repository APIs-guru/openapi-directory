package operations

import (
"openapi/pkg/models/shared")

type GmailUsersSettingsDelegatesGetPathParams struct {
    DelegateEmail string `pathParam:"style=simple,explode=false,name=delegateEmail"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersSettingsDelegatesGetQueryParams struct {
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

type GmailUsersSettingsDelegatesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsDelegatesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsDelegatesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsDelegatesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersSettingsDelegatesGetSecurity struct {
    Option1 *GmailUsersSettingsDelegatesGetSecurityOption1 `security:"option"`
    Option2 *GmailUsersSettingsDelegatesGetSecurityOption2 `security:"option"`
    Option3 *GmailUsersSettingsDelegatesGetSecurityOption3 `security:"option"`
    Option4 *GmailUsersSettingsDelegatesGetSecurityOption4 `security:"option"`
    
}

type GmailUsersSettingsDelegatesGetRequest struct {
    PathParams GmailUsersSettingsDelegatesGetPathParams 
    QueryParams GmailUsersSettingsDelegatesGetQueryParams 
    Security GmailUsersSettingsDelegatesGetSecurity 
    
}

type GmailUsersSettingsDelegatesGetResponse struct {
    ContentType string 
    Delegate *shared.Delegate 
    StatusCode int64 
    
}

