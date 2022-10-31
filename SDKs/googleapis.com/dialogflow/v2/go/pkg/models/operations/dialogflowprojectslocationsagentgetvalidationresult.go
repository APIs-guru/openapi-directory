package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentGetValidationResultPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentGetValidationResultQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentGetValidationResultSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentGetValidationResultSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentGetValidationResultSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentGetValidationResultRequest struct {
    PathParams DialogflowProjectsLocationsAgentGetValidationResultPathParams 
    QueryParams DialogflowProjectsLocationsAgentGetValidationResultQueryParams 
    Security DialogflowProjectsLocationsAgentGetValidationResultSecurity 
    
}

type DialogflowProjectsLocationsAgentGetValidationResultResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2ValidationResult *shared.GoogleCloudDialogflowV2ValidationResult 
    StatusCode int64 
    
}

