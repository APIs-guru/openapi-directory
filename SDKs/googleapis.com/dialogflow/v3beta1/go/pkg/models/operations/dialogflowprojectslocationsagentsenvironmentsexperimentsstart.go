package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams struct {
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

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest struct {
    PathParams DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams 
    QueryParams DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity 
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3beta1Experiment *shared.GoogleCloudDialogflowCxV3beta1Experiment 
    StatusCode int64 
    
}

