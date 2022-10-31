package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsCreateQueryParams struct {
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

type DialogflowProjectsLocationsAgentsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsCreateSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsCreateSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsCreateSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsCreateRequest struct {
    PathParams DialogflowProjectsLocationsAgentsCreatePathParams 
    QueryParams DialogflowProjectsLocationsAgentsCreateQueryParams 
    Request *shared.GoogleCloudDialogflowCxV3Agent `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentsCreateSecurity 
    
}

type DialogflowProjectsLocationsAgentsCreateResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3Agent *shared.GoogleCloudDialogflowCxV3Agent 
    StatusCode int64 
    
}

