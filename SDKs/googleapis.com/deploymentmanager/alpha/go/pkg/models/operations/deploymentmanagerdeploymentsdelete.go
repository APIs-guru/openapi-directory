package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerDeploymentsDeletePathParams struct {
    Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}


type DeploymentmanagerDeploymentsDeleteDeletePolicyEnum string

const (
    DeploymentmanagerDeploymentsDeleteDeletePolicyEnumDelete DeploymentmanagerDeploymentsDeleteDeletePolicyEnum = "DELETE"
DeploymentmanagerDeploymentsDeleteDeletePolicyEnumAbandon DeploymentmanagerDeploymentsDeleteDeletePolicyEnum = "ABANDON"
)


type DeploymentmanagerDeploymentsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DeletePolicy *DeploymentmanagerDeploymentsDeleteDeletePolicyEnum `queryParam:"style=form,explode=true,name=deletePolicy"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DeploymentmanagerDeploymentsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsDeleteSecurity struct {
    Option1 *DeploymentmanagerDeploymentsDeleteSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerDeploymentsDeleteSecurityOption2 `security:"option"`
    
}

type DeploymentmanagerDeploymentsDeleteRequest struct {
    PathParams DeploymentmanagerDeploymentsDeletePathParams 
    QueryParams DeploymentmanagerDeploymentsDeleteQueryParams 
    Security DeploymentmanagerDeploymentsDeleteSecurity 
    
}

type DeploymentmanagerDeploymentsDeleteResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

