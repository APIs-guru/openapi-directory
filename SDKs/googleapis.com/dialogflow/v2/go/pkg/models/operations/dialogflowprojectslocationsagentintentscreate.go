package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentIntentsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum string

const (
    DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnumIntentViewUnspecified DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum = "INTENT_VIEW_UNSPECIFIED"
DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnumIntentViewFull DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum = "INTENT_VIEW_FULL"
)


type DialogflowProjectsLocationsAgentIntentsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IntentView *DialogflowProjectsLocationsAgentIntentsCreateIntentViewEnum `queryParam:"style=form,explode=true,name=intentView"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentIntentsCreateSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentIntentsCreateSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentIntentsCreateSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentIntentsCreateRequest struct {
    PathParams DialogflowProjectsLocationsAgentIntentsCreatePathParams 
    QueryParams DialogflowProjectsLocationsAgentIntentsCreateQueryParams 
    Request *shared.GoogleCloudDialogflowV2Intent `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentIntentsCreateSecurity 
    
}

type DialogflowProjectsLocationsAgentIntentsCreateResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2Intent *shared.GoogleCloudDialogflowV2Intent 
    StatusCode int64 
    
}

