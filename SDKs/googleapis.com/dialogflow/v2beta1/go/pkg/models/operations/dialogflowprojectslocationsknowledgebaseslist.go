package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsKnowledgeBasesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesListSecurity struct {
    Option1 *DialogflowProjectsLocationsKnowledgeBasesListSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsKnowledgeBasesListSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesListRequest struct {
    PathParams DialogflowProjectsLocationsKnowledgeBasesListPathParams 
    QueryParams DialogflowProjectsLocationsKnowledgeBasesListQueryParams 
    Security DialogflowProjectsLocationsKnowledgeBasesListSecurity 
    
}

type DialogflowProjectsLocationsKnowledgeBasesListResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse *shared.GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse 
    StatusCode int64 
    
}

