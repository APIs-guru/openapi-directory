package operations

import (
"openapi/pkg/models/shared")

type LanguageDocumentsAnnotateTextQueryParams struct {
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

type LanguageDocumentsAnnotateTextSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LanguageDocumentsAnnotateTextSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LanguageDocumentsAnnotateTextSecurity struct {
    Option1 *LanguageDocumentsAnnotateTextSecurityOption1 `security:"option"`
    Option2 *LanguageDocumentsAnnotateTextSecurityOption2 `security:"option"`
    
}

type LanguageDocumentsAnnotateTextRequest struct {
    QueryParams LanguageDocumentsAnnotateTextQueryParams 
    Request *shared.AnnotateTextRequest `request:"mediaType=application/json"`
    Security LanguageDocumentsAnnotateTextSecurity 
    
}

type LanguageDocumentsAnnotateTextResponse struct {
    AnnotateTextResponse *shared.AnnotateTextResponse 
    ContentType string 
    StatusCode int64 
    
}

