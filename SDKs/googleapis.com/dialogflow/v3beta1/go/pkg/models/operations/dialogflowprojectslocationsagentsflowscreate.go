package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsFlowsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsFlowsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsFlowsCreateSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsFlowsCreateSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsFlowsCreateRequest struct {
    PathParams DialogflowProjectsLocationsAgentsFlowsCreatePathParams 
    QueryParams DialogflowProjectsLocationsAgentsFlowsCreateQueryParams 
    Request *shared.GoogleCloudDialogflowCxV3beta1Flow `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentsFlowsCreateSecurity 
    
}

type DialogflowProjectsLocationsAgentsFlowsCreateResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3beta1Flow *shared.GoogleCloudDialogflowCxV3beta1Flow 
    StatusCode int64 
    
}

