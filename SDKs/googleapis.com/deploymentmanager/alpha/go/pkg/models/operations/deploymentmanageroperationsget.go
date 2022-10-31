package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerOperationsGetPathParams struct {
    Operation string `pathParam:"style=simple,explode=false,name=operation"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DeploymentmanagerOperationsGetQueryParams struct {
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

type DeploymentmanagerOperationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerOperationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerOperationsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerOperationsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerOperationsGetSecurity struct {
    Option1 *DeploymentmanagerOperationsGetSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerOperationsGetSecurityOption2 `security:"option"`
    Option3 *DeploymentmanagerOperationsGetSecurityOption3 `security:"option"`
    Option4 *DeploymentmanagerOperationsGetSecurityOption4 `security:"option"`
    
}

type DeploymentmanagerOperationsGetRequest struct {
    PathParams DeploymentmanagerOperationsGetPathParams 
    QueryParams DeploymentmanagerOperationsGetQueryParams 
    Security DeploymentmanagerOperationsGetSecurity 
    
}

type DeploymentmanagerOperationsGetResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

