package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams struct {
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

type DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest struct {
    PathParams DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams 
    QueryParams DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams 
    Request *shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity 
    
}

type DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

