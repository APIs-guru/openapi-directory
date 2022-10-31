package operations

import (
"openapi/pkg/models/shared")

type ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationPathParams struct {
    InstanceID string `pathParam:"style=simple,explode=false,name=instanceId"`
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Operation *string `queryParam:"style=form,explode=true,name=operation"`
    PlanID *string `queryParam:"style=form,explode=true,name=planId"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ServiceID *string `queryParam:"style=form,explode=true,name=serviceId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationRequest struct {
    PathParams ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationPathParams 
    QueryParams ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationQueryParams 
    Security ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationSecurity 
    
}

type ServicebrokerProjectsBrokersV2ServiceInstancesGetLastOperationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

