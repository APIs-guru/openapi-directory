package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerDeploymentsListPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DeploymentmanagerDeploymentsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DeploymentmanagerDeploymentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerDeploymentsListSecurity struct {
    Option1 *DeploymentmanagerDeploymentsListSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerDeploymentsListSecurityOption2 `security:"option"`
    Option3 *DeploymentmanagerDeploymentsListSecurityOption3 `security:"option"`
    Option4 *DeploymentmanagerDeploymentsListSecurityOption4 `security:"option"`
    
}

type DeploymentmanagerDeploymentsListRequest struct {
    PathParams DeploymentmanagerDeploymentsListPathParams 
    QueryParams DeploymentmanagerDeploymentsListQueryParams 
    Security DeploymentmanagerDeploymentsListSecurity 
    
}

type DeploymentmanagerDeploymentsListResponse struct {
    ContentType string 
    DeploymentsListResponse *shared.DeploymentsListResponse 
    StatusCode int64 
    
}

