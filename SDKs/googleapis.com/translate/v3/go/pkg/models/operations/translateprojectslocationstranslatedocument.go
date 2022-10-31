package operations

import (
"openapi/pkg/models/shared")

type TranslateProjectsLocationsTranslateDocumentPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type TranslateProjectsLocationsTranslateDocumentQueryParams struct {
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

type TranslateProjectsLocationsTranslateDocumentSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TranslateProjectsLocationsTranslateDocumentSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type TranslateProjectsLocationsTranslateDocumentSecurity struct {
    Option1 *TranslateProjectsLocationsTranslateDocumentSecurityOption1 `security:"option"`
    Option2 *TranslateProjectsLocationsTranslateDocumentSecurityOption2 `security:"option"`
    
}

type TranslateProjectsLocationsTranslateDocumentRequest struct {
    PathParams TranslateProjectsLocationsTranslateDocumentPathParams 
    QueryParams TranslateProjectsLocationsTranslateDocumentQueryParams 
    Request *shared.TranslateDocumentRequest `request:"mediaType=application/json"`
    Security TranslateProjectsLocationsTranslateDocumentSecurity 
    
}

type TranslateProjectsLocationsTranslateDocumentResponse struct {
    ContentType string 
    StatusCode int64 
    TranslateDocumentResponse *shared.TranslateDocumentResponse 
    
}

