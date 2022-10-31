package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsIntentsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum string

const (
    DialogflowProjectsLocationsAgentsIntentsListIntentViewEnumIntentViewUnspecified DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum = "INTENT_VIEW_UNSPECIFIED"
DialogflowProjectsLocationsAgentsIntentsListIntentViewEnumIntentViewPartial DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum = "INTENT_VIEW_PARTIAL"
DialogflowProjectsLocationsAgentsIntentsListIntentViewEnumIntentViewFull DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum = "INTENT_VIEW_FULL"
)


type DialogflowProjectsLocationsAgentsIntentsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IntentView *DialogflowProjectsLocationsAgentsIntentsListIntentViewEnum `queryParam:"style=form,explode=true,name=intentView"`
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

type DialogflowProjectsLocationsAgentsIntentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsIntentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsIntentsListSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsIntentsListSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsIntentsListSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsIntentsListRequest struct {
    PathParams DialogflowProjectsLocationsAgentsIntentsListPathParams 
    QueryParams DialogflowProjectsLocationsAgentsIntentsListQueryParams 
    Security DialogflowProjectsLocationsAgentsIntentsListSecurity 
    
}

type DialogflowProjectsLocationsAgentsIntentsListResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3beta1ListIntentsResponse *shared.GoogleCloudDialogflowCxV3beta1ListIntentsResponse 
    StatusCode int64 
    
}

