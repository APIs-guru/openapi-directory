package operations

import (
"openapi/pkg/models/shared")

type DeploymentmanagerTypeProvidersInsertPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DeploymentmanagerTypeProvidersInsertQueryParams struct {
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

type DeploymentmanagerTypeProvidersInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerTypeProvidersInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DeploymentmanagerTypeProvidersInsertSecurity struct {
    Option1 *DeploymentmanagerTypeProvidersInsertSecurityOption1 `security:"option"`
    Option2 *DeploymentmanagerTypeProvidersInsertSecurityOption2 `security:"option"`
    
}

type DeploymentmanagerTypeProvidersInsertRequest struct {
    PathParams DeploymentmanagerTypeProvidersInsertPathParams 
    QueryParams DeploymentmanagerTypeProvidersInsertQueryParams 
    Request *shared.TypeProvider `request:"mediaType=application/json"`
    Security DeploymentmanagerTypeProvidersInsertSecurity 
    
}

type DeploymentmanagerTypeProvidersInsertResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

