package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsGetAgentPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsGetAgentQueryParams struct {
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

type DialogflowProjectsLocationsGetAgentSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsGetAgentSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsGetAgentSecurity struct {
    Option1 *DialogflowProjectsLocationsGetAgentSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsGetAgentSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsGetAgentRequest struct {
    PathParams DialogflowProjectsLocationsGetAgentPathParams 
    QueryParams DialogflowProjectsLocationsGetAgentQueryParams 
    Security DialogflowProjectsLocationsGetAgentSecurity 
    
}

type DialogflowProjectsLocationsGetAgentResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2beta1Agent *shared.GoogleCloudDialogflowV2beta1Agent 
    StatusCode int64 
    
}

