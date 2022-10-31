package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerDeploymentsTestIamPermissionsPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type DeploymentmanagerDeploymentsTestIamPermissionsQueryParams struct {
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

type DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsTestIamPermissionsSecurity struct {
    Option1 *DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2 `security:"option"`
    
}

type DeploymentmanagerDeploymentsTestIamPermissionsRequest struct {
    PathParams DeploymentmanagerDeploymentsTestIamPermissionsPathParams 
    QueryParams DeploymentmanagerDeploymentsTestIamPermissionsQueryParams 
    Request *shared.TestPermissionsRequest `request:"mediaType=application/json"`
    Security DeploymentmanagerDeploymentsTestIamPermissionsSecurity 
    
}

type DeploymentmanagerDeploymentsTestIamPermissionsResponse struct {
    ContentType string 
    StatusCode int64 
    TestPermissionsResponse *shared.TestPermissionsResponse 
    
}

