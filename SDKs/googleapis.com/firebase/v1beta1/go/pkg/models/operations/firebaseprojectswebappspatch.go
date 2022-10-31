package operations

import (
"openapi/pkg/models/shared")

type FirebaseProjectsWebAppsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type FirebaseProjectsWebAppsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebaseProjectsWebAppsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsWebAppsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebaseProjectsWebAppsPatchSecurity struct {
    Option1 *FirebaseProjectsWebAppsPatchSecurityOption1 `security:"option"`
    Option2 *FirebaseProjectsWebAppsPatchSecurityOption2 `security:"option"`
    
}

type FirebaseProjectsWebAppsPatchRequest struct {
    PathParams FirebaseProjectsWebAppsPatchPathParams 
    QueryParams FirebaseProjectsWebAppsPatchQueryParams 
    Request *shared.WebApp `request:"mediaType=application/json"`
    Security FirebaseProjectsWebAppsPatchSecurity 
    
}

type FirebaseProjectsWebAppsPatchResponse struct {
    ContentType string 
    StatusCode int64 
    WebApp *shared.WebApp 
    
}

