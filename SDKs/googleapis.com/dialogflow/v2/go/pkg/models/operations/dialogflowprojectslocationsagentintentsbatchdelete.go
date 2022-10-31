package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentIntentsBatchDeletePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentIntentsBatchDeleteQueryParams struct {
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

type DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest struct {
    PathParams DialogflowProjectsLocationsAgentIntentsBatchDeletePathParams 
    QueryParams DialogflowProjectsLocationsAgentIntentsBatchDeleteQueryParams 
    Request *shared.GoogleCloudDialogflowV2BatchDeleteIntentsRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity 
    
}

type DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

