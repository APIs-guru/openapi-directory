package operations

import (
"openapi/pkg/models/shared")

type FormsFormsWatchesCreatePathParams struct {
    FormID string `pathParam:"style=simple,explode=false,name=formId"`
    
}

type FormsFormsWatchesCreateQueryParams struct {
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

type FormsFormsWatchesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesCreateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesCreateSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesCreateSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesCreateSecurity struct {
    Option1 *FormsFormsWatchesCreateSecurityOption1 `security:"option"`
    Option2 *FormsFormsWatchesCreateSecurityOption2 `security:"option"`
    Option3 *FormsFormsWatchesCreateSecurityOption3 `security:"option"`
    Option4 *FormsFormsWatchesCreateSecurityOption4 `security:"option"`
    Option5 *FormsFormsWatchesCreateSecurityOption5 `security:"option"`
    Option6 *FormsFormsWatchesCreateSecurityOption6 `security:"option"`
    
}

type FormsFormsWatchesCreateRequest struct {
    PathParams FormsFormsWatchesCreatePathParams 
    QueryParams FormsFormsWatchesCreateQueryParams 
    Request *shared.CreateWatchRequest `request:"mediaType=application/json"`
    Security FormsFormsWatchesCreateSecurity 
    
}

type FormsFormsWatchesCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Watch *shared.Watch 
    
}

