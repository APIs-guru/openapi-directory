package operations

import (
"openapi/pkg/models/shared")

type ServicemanagementServicesConfigsGetPathParams struct {
    ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
    ServiceName string `pathParam:"style=simple,explode=false,name=serviceName"`
    
}


type ServicemanagementServicesConfigsGetViewEnum string

const (
    ServicemanagementServicesConfigsGetViewEnumBasic ServicemanagementServicesConfigsGetViewEnum = "BASIC"
ServicemanagementServicesConfigsGetViewEnumFull ServicemanagementServicesConfigsGetViewEnum = "FULL"
)


type ServicemanagementServicesConfigsGetQueryParams struct {
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
    View *ServicemanagementServicesConfigsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type ServicemanagementServicesConfigsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConfigsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConfigsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConfigsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConfigsGetSecurity struct {
    Option1 *ServicemanagementServicesConfigsGetSecurityOption1 `security:"option"`
    Option2 *ServicemanagementServicesConfigsGetSecurityOption2 `security:"option"`
    Option3 *ServicemanagementServicesConfigsGetSecurityOption3 `security:"option"`
    Option4 *ServicemanagementServicesConfigsGetSecurityOption4 `security:"option"`
    
}

type ServicemanagementServicesConfigsGetRequest struct {
    PathParams ServicemanagementServicesConfigsGetPathParams 
    QueryParams ServicemanagementServicesConfigsGetQueryParams 
    Security ServicemanagementServicesConfigsGetSecurity 
    
}

type ServicemanagementServicesConfigsGetResponse struct {
    ContentType string 
    Service *shared.Service 
    StatusCode int64 
    
}

