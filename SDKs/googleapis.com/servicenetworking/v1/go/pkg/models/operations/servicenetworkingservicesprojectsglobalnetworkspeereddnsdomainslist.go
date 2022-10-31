package operations

import (
"openapi/pkg/models/shared")

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListQueryParams struct {
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

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListSecurity struct {
    Option1 *ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListSecurityOption1 `security:"option"`
    Option2 *ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListSecurityOption2 `security:"option"`
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListRequest struct {
    PathParams ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListPathParams 
    QueryParams ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListQueryParams 
    Security ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListSecurity 
    
}

type ServicenetworkingServicesProjectsGlobalNetworksPeeredDNSDomainsListResponse struct {
    ContentType string 
    ListPeeredDNSDomainsResponse *shared.ListPeeredDNSDomainsResponse 
    StatusCode int64 
    
}

