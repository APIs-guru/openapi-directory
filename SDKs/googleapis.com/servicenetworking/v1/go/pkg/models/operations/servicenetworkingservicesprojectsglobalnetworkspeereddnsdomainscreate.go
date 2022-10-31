package operations

import (
"openapi/pkg/models/shared")

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateQueryParams struct {
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

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateSecurity struct {
    Option1 *ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateSecurityOption1 `security:"option"`
    Option2 *ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateSecurityOption2 `security:"option"`
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateRequest struct {
    PathParams ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreatePathParams 
    QueryParams ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateQueryParams 
    Request *shared.PeeredDNSDomain `request:"mediaType=application/json"`
    Security ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateSecurity 
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsCreateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

