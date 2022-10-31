package operations

import (
"openapi/pkg/models/shared")

type LoggingGetSettingsPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type LoggingGetSettingsQueryParams struct {
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

type LoggingGetSettingsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingGetSettingsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingGetSettingsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingGetSettingsSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingGetSettingsSecurity struct {
    Option1 *LoggingGetSettingsSecurityOption1 `security:"option"`
    Option2 *LoggingGetSettingsSecurityOption2 `security:"option"`
    Option3 *LoggingGetSettingsSecurityOption3 `security:"option"`
    Option4 *LoggingGetSettingsSecurityOption4 `security:"option"`
    
}

type LoggingGetSettingsRequest struct {
    PathParams LoggingGetSettingsPathParams 
    QueryParams LoggingGetSettingsQueryParams 
    Security LoggingGetSettingsSecurity 
    
}

type LoggingGetSettingsResponse struct {
    ContentType string 
    Settings *shared.Settings 
    StatusCode int64 
    
}

