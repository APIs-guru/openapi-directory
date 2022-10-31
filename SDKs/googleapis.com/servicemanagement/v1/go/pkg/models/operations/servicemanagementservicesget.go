package operations

import (
"openapi/pkg/models/shared")

type ServicemanagementServicesGetPathParams struct {
    ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
    
}

type ServicemanagementServicesGetQueryParams struct {
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

type ServicemanagementServicesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesGetSecurity struct {
    Option1 *ServicemanagementServicesGetSecurityOption1 `security:"option"`
    Option2 *ServicemanagementServicesGetSecurityOption2 `security:"option"`
    Option3 *ServicemanagementServicesGetSecurityOption3 `security:"option"`
    Option4 *ServicemanagementServicesGetSecurityOption4 `security:"option"`
    
}

type ServicemanagementServicesGetRequest struct {
    PathParams ServicemanagementServicesGetPathParams 
    QueryParams ServicemanagementServicesGetQueryParams 
    Security ServicemanagementServicesGetSecurity 
    
}

type ServicemanagementServicesGetResponse struct {
    ContentType string 
    ManagedService *shared.ManagedService 
    StatusCode int64 
    
}

