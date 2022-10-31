package operations

import (
"openapi/pkg/models/shared")

type RuntimeconfigProjectsConfigsVariablesUpdatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type RuntimeconfigProjectsConfigsVariablesUpdateQueryParams struct {
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

type RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigProjectsConfigsVariablesUpdateSecurity struct {
    Option1 *RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1 `security:"option"`
    Option2 *RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2 `security:"option"`
    
}

type RuntimeconfigProjectsConfigsVariablesUpdateRequest struct {
    PathParams RuntimeconfigProjectsConfigsVariablesUpdatePathParams 
    QueryParams RuntimeconfigProjectsConfigsVariablesUpdateQueryParams 
    Request *shared.Variable `request:"mediaType=application/json"`
    Security RuntimeconfigProjectsConfigsVariablesUpdateSecurity 
    
}

type RuntimeconfigProjectsConfigsVariablesUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    Variable *shared.Variable 
    
}

