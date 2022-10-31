package operations

import (
"openapi/pkg/models/shared")

type LanguageTranslationsTranslateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    BearerToken *string `queryParam:"style=form,explode=true,name=bearer_token"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Pp *bool `queryParam:"style=form,explode=true,name=pp"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type LanguageTranslationsTranslateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LanguageTranslationsTranslateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LanguageTranslationsTranslateSecurity struct {
    Option1 *LanguageTranslationsTranslateSecurityOption1 `security:"option"`
    Option2 *LanguageTranslationsTranslateSecurityOption2 `security:"option"`
    
}

type LanguageTranslationsTranslateRequest struct {
    QueryParams LanguageTranslationsTranslateQueryParams 
    Request *shared.TranslateTextRequest `request:"mediaType=application/json"`
    Security LanguageTranslationsTranslateSecurity 
    
}

type LanguageTranslationsTranslateResponse struct {
    ContentType string 
    StatusCode int64 
    TranslationsListResponse *shared.TranslationsListResponse 
    
}

