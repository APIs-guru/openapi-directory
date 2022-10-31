package operations

import (
"openapi/pkg/models/shared")

type TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams struct {
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

type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity struct {
    Option1 *TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1 `security:"option"`
    Option2 *TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption2 `security:"option"`
    
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest struct {
    PathParams TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams 
    QueryParams TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams 
    Request *shared.GlossaryEntry `request:"mediaType=application/json"`
    Security TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity 
    
}

type TranslateProjectsLocationsGlossariesGlossaryEntriesCreateResponse struct {
    ContentType string 
    GlossaryEntry *shared.GlossaryEntry 
    StatusCode int64 
    
}

