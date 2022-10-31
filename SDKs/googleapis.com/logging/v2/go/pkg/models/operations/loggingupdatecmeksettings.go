package operations

import (
"openapi/pkg/models/shared")

type LoggingUpdateCmekSettingsPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type LoggingUpdateCmekSettingsQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type LoggingUpdateCmekSettingsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingUpdateCmekSettingsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingUpdateCmekSettingsSecurity struct {
    Option1 *LoggingUpdateCmekSettingsSecurityOption1 `security:"option"`
    Option2 *LoggingUpdateCmekSettingsSecurityOption2 `security:"option"`
    
}

type LoggingUpdateCmekSettingsRequest struct {
    PathParams LoggingUpdateCmekSettingsPathParams 
    QueryParams LoggingUpdateCmekSettingsQueryParams 
    Request *shared.CmekSettings `request:"mediaType=application/json"`
    Security LoggingUpdateCmekSettingsSecurity 
    
}

type LoggingUpdateCmekSettingsResponse struct {
    CmekSettings *shared.CmekSettings 
    ContentType string 
    StatusCode int64 
    
}

