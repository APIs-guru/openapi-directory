package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerDeploymentsGetPathParams struct {
    Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DeploymentmanagerDeploymentsGetQueryParams struct {
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

type DeploymentmanagerDeploymentsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsGetSecurity struct {
    Option1 *DeploymentmanagerDeploymentsGetSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerDeploymentsGetSecurityOption2 `security:"option"`
    Option3 *DeploymentmanagerDeploymentsGetSecurityOption3 `security:"option"`
    Option4 *DeploymentmanagerDeploymentsGetSecurityOption4 `security:"option"`
    
}

type DeploymentmanagerDeploymentsGetRequest struct {
    PathParams DeploymentmanagerDeploymentsGetPathParams 
    QueryParams DeploymentmanagerDeploymentsGetQueryParams 
    Security DeploymentmanagerDeploymentsGetSecurity 
    
}

type DeploymentmanagerDeploymentsGetResponse struct {
    ContentType string 
    Deployment *shared.Deployment 
    StatusCode int64 
    
}

