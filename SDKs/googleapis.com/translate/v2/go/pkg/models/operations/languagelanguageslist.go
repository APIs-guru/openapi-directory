package operations

import (
"openapi/pkg/models/shared")

type LanguageLanguagesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    BearerToken *string `queryParam:"style=form,explode=true,name=bearer_token"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Model *string `queryParam:"style=form,explode=true,name=model"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Pp *bool `queryParam:"style=form,explode=true,name=pp"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Target *string `queryParam:"style=form,explode=true,name=target"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type LanguageLanguagesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LanguageLanguagesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LanguageLanguagesListSecurity struct {
    Option1 *LanguageLanguagesListSecurityOption1 `security:"option"`
    Option2 *LanguageLanguagesListSecurityOption2 `security:"option"`
    
}

type LanguageLanguagesListRequest struct {
    QueryParams LanguageLanguagesListQueryParams 
    Security LanguageLanguagesListSecurity 
    
}

type LanguageLanguagesListResponse struct {
    ContentType string 
    LanguagesListResponse *shared.LanguagesListResponse 
    StatusCode int64 
    
}

