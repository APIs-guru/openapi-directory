package operations

import (
"openapi/pkg/models/shared")

type RuntimeconfigProjectsConfigsVariablesWatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type RuntimeconfigProjectsConfigsVariablesWatchQueryParams struct {
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

type RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigProjectsConfigsVariablesWatchSecurity struct {
    Option1 *RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1 `security:"option"`
    Option2 *RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2 `security:"option"`
    
}

type RuntimeconfigProjectsConfigsVariablesWatchRequest struct {
    PathParams RuntimeconfigProjectsConfigsVariablesWatchPathParams 
    QueryParams RuntimeconfigProjectsConfigsVariablesWatchQueryParams 
    Request *shared.WatchVariableRequest `request:"mediaType=application/json"`
    Security RuntimeconfigProjectsConfigsVariablesWatchSecurity 
    
}

type RuntimeconfigProjectsConfigsVariablesWatchResponse struct {
    ContentType string 
    StatusCode int64 
    Variable *shared.Variable 
    
}

