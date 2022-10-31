package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentSearchPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentSearchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentSearchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentSearchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentSearchSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentSearchSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentSearchSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentSearchRequest struct {
    PathParams DialogflowProjectsLocationsAgentSearchPathParams 
    QueryParams DialogflowProjectsLocationsAgentSearchQueryParams 
    Security DialogflowProjectsLocationsAgentSearchSecurity 
    
}

type DialogflowProjectsLocationsAgentSearchResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2beta1SearchAgentsResponse *shared.GoogleCloudDialogflowV2beta1SearchAgentsResponse 
    StatusCode int64 
    
}

