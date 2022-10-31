package operations

import (
"openapi/pkg/models/shared")

type MonitoringProjectsNotificationChannelsVerifyPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type MonitoringProjectsNotificationChannelsVerifyQueryParams struct {
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

type MonitoringProjectsNotificationChannelsVerifySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsNotificationChannelsVerifySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type MonitoringProjectsNotificationChannelsVerifySecurity struct {
    Option1 *MonitoringProjectsNotificationChannelsVerifySecurityOption1 `security:"option"`
    Option2 *MonitoringProjectsNotificationChannelsVerifySecurityOption2 `security:"option"`
    
}

type MonitoringProjectsNotificationChannelsVerifyRequest struct {
    PathParams MonitoringProjectsNotificationChannelsVerifyPathParams 
    QueryParams MonitoringProjectsNotificationChannelsVerifyQueryParams 
    Request *shared.VerifyNotificationChannelRequest `request:"mediaType=application/json"`
    Security MonitoringProjectsNotificationChannelsVerifySecurity 
    
}

type MonitoringProjectsNotificationChannelsVerifyResponse struct {
    ContentType string 
    NotificationChannel *shared.NotificationChannel 
    StatusCode int64 
    
}

