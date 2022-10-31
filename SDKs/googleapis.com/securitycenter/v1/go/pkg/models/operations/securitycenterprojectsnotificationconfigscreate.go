package operations

import (
"openapi/pkg/models/shared")

type SecuritycenterProjectsNotificationConfigsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type SecuritycenterProjectsNotificationConfigsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ConfigID *string `queryParam:"style=form,explode=true,name=configId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SecuritycenterProjectsNotificationConfigsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SecuritycenterProjectsNotificationConfigsCreateRequest struct {
    PathParams SecuritycenterProjectsNotificationConfigsCreatePathParams 
    QueryParams SecuritycenterProjectsNotificationConfigsCreateQueryParams 
    Request *shared.NotificationConfig `request:"mediaType=application/json"`
    Security SecuritycenterProjectsNotificationConfigsCreateSecurity 
    
}

type SecuritycenterProjectsNotificationConfigsCreateResponse struct {
    ContentType string 
    NotificationConfig *shared.NotificationConfig 
    StatusCode int64 
    
}

