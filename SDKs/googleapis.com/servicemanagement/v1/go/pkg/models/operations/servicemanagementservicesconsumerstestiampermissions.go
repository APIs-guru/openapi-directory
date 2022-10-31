package operations

import (
"openapi/pkg/models/shared")

type ServicemanagementServicesConsumersTestIamPermissionsPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type ServicemanagementServicesConsumersTestIamPermissionsQueryParams struct {
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

type ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ServicemanagementServicesConsumersTestIamPermissionsSecurity struct {
    Option1 *ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1 `security:"option"`
    Option2 *ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2 `security:"option"`
    Option3 *ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3 `security:"option"`
    Option4 *ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4 `security:"option"`
    
}

type ServicemanagementServicesConsumersTestIamPermissionsRequest struct {
    PathParams ServicemanagementServicesConsumersTestIamPermissionsPathParams 
    QueryParams ServicemanagementServicesConsumersTestIamPermissionsQueryParams 
    Request *shared.TestIamPermissionsRequest `request:"mediaType=application/json"`
    Security ServicemanagementServicesConsumersTestIamPermissionsSecurity 
    
}

type ServicemanagementServicesConsumersTestIamPermissionsResponse struct {
    ContentType string 
    StatusCode int64 
    TestIamPermissionsResponse *shared.TestIamPermissionsResponse 
    
}

