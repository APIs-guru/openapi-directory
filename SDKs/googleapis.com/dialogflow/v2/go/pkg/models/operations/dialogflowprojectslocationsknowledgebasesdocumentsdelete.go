package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsKnowledgeBasesDocumentsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Force *bool `queryParam:"style=form,explode=true,name=force"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity struct {
    Option1 *DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest struct {
    PathParams DialogflowProjectsLocationsKnowledgeBasesDocumentsDeletePathParams 
    QueryParams DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteQueryParams 
    Security DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteSecurity 
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

