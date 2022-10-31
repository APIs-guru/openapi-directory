package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerDeploymentsPatchPathParams struct {
    Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}


type DeploymentmanagerDeploymentsPatchCreatePolicyEnum string

const (
    DeploymentmanagerDeploymentsPatchCreatePolicyEnumCreateOrAcquire DeploymentmanagerDeploymentsPatchCreatePolicyEnum = "CREATE_OR_ACQUIRE"
DeploymentmanagerDeploymentsPatchCreatePolicyEnumAcquire DeploymentmanagerDeploymentsPatchCreatePolicyEnum = "ACQUIRE"
DeploymentmanagerDeploymentsPatchCreatePolicyEnumCreate DeploymentmanagerDeploymentsPatchCreatePolicyEnum = "CREATE"
)



type DeploymentmanagerDeploymentsPatchDeletePolicyEnum string

const (
    DeploymentmanagerDeploymentsPatchDeletePolicyEnumDelete DeploymentmanagerDeploymentsPatchDeletePolicyEnum = "DELETE"
DeploymentmanagerDeploymentsPatchDeletePolicyEnumAbandon DeploymentmanagerDeploymentsPatchDeletePolicyEnum = "ABANDON"
)


type DeploymentmanagerDeploymentsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CreatePolicy *DeploymentmanagerDeploymentsPatchCreatePolicyEnum `queryParam:"style=form,explode=true,name=createPolicy"`
    DeletePolicy *DeploymentmanagerDeploymentsPatchDeletePolicyEnum `queryParam:"style=form,explode=true,name=deletePolicy"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Preview *bool `queryParam:"style=form,explode=true,name=preview"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DeploymentmanagerDeploymentsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsPatchSecurity struct {
    Option1 *DeploymentmanagerDeploymentsPatchSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerDeploymentsPatchSecurityOption2 `security:"option"`
    
}

type DeploymentmanagerDeploymentsPatchRequest struct {
    PathParams DeploymentmanagerDeploymentsPatchPathParams 
    QueryParams DeploymentmanagerDeploymentsPatchQueryParams 
    Request *shared.Deployment `request:"mediaType=application/json"`
    Security DeploymentmanagerDeploymentsPatchSecurity 
    
}

type DeploymentmanagerDeploymentsPatchResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

