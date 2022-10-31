package operations

import (
"openapi/pkg/models/shared")

type DialogflowProjectsLocationsAgentsIntentsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type DialogflowProjectsLocationsAgentsIntentsCreateQueryParams struct {
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

type DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DialogflowProjectsLocationsAgentsIntentsCreateSecurity struct {
    Option1 *DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption1 `security:"option"`
    Option2 *DialogflowProjectsLocationsAgentsIntentsCreateSecurityOption2 `security:"option"`
    
}

type DialogflowProjectsLocationsAgentsIntentsCreateRequest struct {
    PathParams DialogflowProjectsLocationsAgentsIntentsCreatePathParams 
    QueryParams DialogflowProjectsLocationsAgentsIntentsCreateQueryParams 
    Request *shared.GoogleCloudDialogflowCxV3Intent `request:"mediaType=application/json"`
    Security DialogflowProjectsLocationsAgentsIntentsCreateSecurity 
    
}

type DialogflowProjectsLocationsAgentsIntentsCreateResponse struct {
    ContentType string 
    GoogleCloudDialogflowCxV3Intent *shared.GoogleCloudDialogflowCxV3Intent 
    StatusCode int64 
    
}

