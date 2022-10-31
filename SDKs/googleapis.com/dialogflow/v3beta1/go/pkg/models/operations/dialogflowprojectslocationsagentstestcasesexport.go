package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsTestCasesExportPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsTestCasesExportQueryParams struct {
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

type DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsTestCasesExportSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsTestCasesExportRequest struct {
    PathParams DialogflowProjectsLocationsAgentsTestCasesExportPathParams 
    QueryParams DialogflowProjectsLocationsAgentsTestCasesExportQueryParams 
    Request *shared.GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentsTestCasesExportSecurity 
    
}

type DialogflowProjectsLocationsAgentsTestCasesExportResponse struct {
    ContentType string 
    GoogleLongrunningOperation *shared.GoogleLongrunningOperation 
    StatusCode int64 
    
}

