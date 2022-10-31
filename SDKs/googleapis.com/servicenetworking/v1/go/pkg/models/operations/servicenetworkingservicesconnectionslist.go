package operations

import (
"openapi/pkg/models/shared")

type ServicenetworkingServicesConnectionsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ServicenetworkingServicesConnectionsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Network *string `queryParam:"style=form,explode=true,name=network"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ServicenetworkingServicesConnectionsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesConnectionsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesConnectionsListSecurity struct {
    Option1 *ServicenetworkingServicesConnectionsListSecurityOption1 `security:"option"`
    Option2 *ServicenetworkingServicesConnectionsListSecurityOption2 `security:"option"`
    
}

type ServicenetworkingServicesConnectionsListRequest struct {
    PathParams ServicenetworkingServicesConnectionsListPathParams 
    QueryParams ServicenetworkingServicesConnectionsListQueryParams 
    Security ServicenetworkingServicesConnectionsListSecurity 
    
}

type ServicenetworkingServicesConnectionsListResponse struct {
    ContentType string 
    ListConnectionsResponse *shared.ListConnectionsResponse 
    StatusCode int64 
    
}

