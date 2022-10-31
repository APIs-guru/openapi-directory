package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams struct {
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

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest struct {
    PathParams DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams 
    QueryParams DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams 
    Request *shared.GoogleCloudDialogflowCxV3Experiment `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity 
    
}

type DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3Experiment *shared.GoogleCloudDialogflowCxV3Experiment 
    StatusCode int64 
    
}

