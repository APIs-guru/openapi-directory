package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentIntentsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type DialogflowProjectsLocationsAgentIntentsListIntentViewEnum string

const (
    DialogflowProjectsLocationsAgentIntentsListIntentViewEnumIntentViewUnspecified DialogflowProjectsLocationsAgentIntentsListIntentViewEnum = "INTENT_VIEW_UNSPECIFIED"
DialogflowProjectsLocationsAgentIntentsListIntentViewEnumIntentViewFull DialogflowProjectsLocationsAgentIntentsListIntentViewEnum = "INTENT_VIEW_FULL"
)


type DialogflowProjectsLocationsAgentIntentsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IntentView *DialogflowProjectsLocationsAgentIntentsListIntentViewEnum `queryParam:"style=form,explode=true,name=intentView"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DialogflowProjectsLocationsAgentIntentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentIntentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentIntentsListSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentIntentsListSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentIntentsListSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentIntentsListRequest struct {
    PathParams DialogflowProjectsLocationsAgentIntentsListPathParams 
    QueryParams DialogflowProjectsLocationsAgentIntentsListQueryParams 
    Security DialogflowProjectsLocationsAgentIntentsListSecurity 
    
}

type DialogflowProjectsLocationsAgentIntentsListResponse struct {
    ContentType string 
    GoogleCloudDialogflowV2ListIntentsResponse *shared.GoogleCloudDialogflowV2ListIntentsResponse 
    StatusCode int64 
    
}

