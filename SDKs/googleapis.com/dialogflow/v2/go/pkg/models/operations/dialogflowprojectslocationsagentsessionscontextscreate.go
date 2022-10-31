package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams struct {
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

type DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentSessionsContextsCreateSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentSessionsContextsCreateRequest struct {
    PathParams DialogflowProjectsLocationsAgentSessionsContextsCreatePathParams 
    QueryParams DialogflowProjectsLocationsAgentSessionsContextsCreateQueryParams 
    Request *shared.GoogleCloudDialogflowV2Context `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentSessionsContextsCreateSecurity 
    
}

type DialogflowProjectsLocationsAgentSessionsContextsCreateResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2Context *shared.GoogleCloudDialogflowV2Context 
    StatusCode int64 
    
}

