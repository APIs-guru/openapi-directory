package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsNotificationChannelsGetVerificationCodePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams struct {
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

type MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity struct {
    Option1 *MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2 `security:"option"`
    
}

type MonitoringProjectsNotificationChannelsGetVerificationCodeRequest struct {
    PathParams MonitoringProjectsNotificationChannelsGetVerificationCodePathParams 
    QueryParams MonitoringProjectsNotificationChannelsGetVerificationCodeQueryParams 
    Request *shared.GetNotificationChannelVerificationCodeRequest `request:"mediaType=application/json"`
    Security MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity 
    
}

type MonitoringProjectsNotificationChannelsGetVerificationCodeResponse struct {
    ContentType string 
    GetNotificationChannelVerificationCodeResponse *shared.GetNotificationChannelVerificationCodeResponse 
    StatusCode int64 
    
}

