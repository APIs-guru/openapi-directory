package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams struct {
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

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest struct {
    PathParams DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeletePathParams 
    QueryParams DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteQueryParams 
    Request *shared.GoogleCloudDialogflowV2BatchDeleteEntitiesRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteSecurity 
    
}

type DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

