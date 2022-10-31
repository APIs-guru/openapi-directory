package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsKnowledgeBasesDocumentsExportPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsExportQueryParams struct {
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

type DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity struct {
    Option1 *DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsExportRequest struct {
    PathParams DialogflowProjectsLocationsKnowledgeBasesDocumentsExportPathParams 
    QueryParams DialogflowProjectsLocationsKnowledgeBasesDocumentsExportQueryParams 
    Request *shared.GoogleCloudDialogflowV2ExportDocumentRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsKnowledgeBasesDocumentsExportSecurity 
    
}

type DialogflowProjectsLocationsKnowledgeBasesDocumentsExportResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

