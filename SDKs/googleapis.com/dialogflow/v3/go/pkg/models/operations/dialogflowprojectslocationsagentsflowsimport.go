package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsFlowsImportPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsFlowsImportQueryParams struct {
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

type DialogflowProjectsLocationsAgentsFlowsImportSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsFlowsImportSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsFlowsImportSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsFlowsImportSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsFlowsImportSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsFlowsImportRequest struct {
    PathParams DialogflowProjectsLocationsAgentsFlowsImportPathParams 
    QueryParams DialogflowProjectsLocationsAgentsFlowsImportQueryParams 
    Request *shared.GoogleCloudDialogflowCxV3ImportFlowRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentsFlowsImportSecurity 
    
}

type DialogflowProjectsLocationsAgentsFlowsImportResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

