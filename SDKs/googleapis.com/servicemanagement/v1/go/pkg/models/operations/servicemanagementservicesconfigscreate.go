package operations

import (
"openapi/pkg/models/shared")

type ServicemanagementServicesConfigsCreatePathParams struct {
    ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
    
}

type ServicemanagementServicesConfigsCreateQueryParams struct {
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

type ServicemanagementServicesConfigsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConfigsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConfigsCreateSecurity struct {
    Option1 *ServicemanagementServicesConfigsCreateSecurityOption1 `security:"option"`
    Option2 *ServicemanagementServicesConfigsCreateSecurityOption2 `security:"option"`
    
}

type ServicemanagementServicesConfigsCreateRequest struct {
    PathParams ServicemanagementServicesConfigsCreatePathParams 
    QueryParams ServicemanagementServicesConfigsCreateQueryParams 
    Request *shared.Service `request:"mediaType=application/json"`
    Security ServicemanagementServicesConfigsCreateSecurity 
    
}

type ServicemanagementServicesConfigsCreateResponse struct {
    ContentType string 
    Service *shared.Service 
    StatusCode int64 
    
}

