package operations

import (
"openapi/pkg/models/shared")

type ServicenetworkingServicesUpdateConnectionsPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ServicenetworkingServicesUpdateConnectionsQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Force *bool `queryParam:"style=form,explode=true,name=force"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ServicenetworkingServicesUpdateConnectionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesUpdateConnectionsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicenetworkingServicesUpdateConnectionsSecurity struct {
    Option1 *ServicenetworkingServicesUpdateConnectionsSecurityOption1 `security:"option"`
    Option2 *ServicenetworkingServicesUpdateConnectionsSecurityOption2 `security:"option"`
    
}

type ServicenetworkingServicesUpdateConnectionsRequest struct {
    PathParams ServicenetworkingServicesUpdateConnectionsPathParams 
    QueryParams ServicenetworkingServicesUpdateConnectionsQueryParams 
    Request *shared.GoogleCloudServicenetworkingV1betaConnection `request:"mediaType=application/json"`
    Security ServicenetworkingServicesUpdateConnectionsSecurity 
    
}

type ServicenetworkingServicesUpdateConnectionsResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

