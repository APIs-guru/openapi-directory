package operations

import (
"openapi/pkg/models/shared")

type FormsFormsGetPathParams struct {
    FormID string `pathParam:"style=simple,explode=false,name=formId"`
    
}

type FormsFormsGetQueryParams struct {
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

type FormsFormsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsGetSecurity struct {
    Option1 *FormsFormsGetSecurityOption1 `security:"option"`
    Option2 *FormsFormsGetSecurityOption2 `security:"option"`
    Option3 *FormsFormsGetSecurityOption3 `security:"option"`
    Option4 *FormsFormsGetSecurityOption4 `security:"option"`
    Option5 *FormsFormsGetSecurityOption5 `security:"option"`
    
}

type FormsFormsGetRequest struct {
    PathParams FormsFormsGetPathParams 
    QueryParams FormsFormsGetQueryParams 
    Security FormsFormsGetSecurity 
    
}

type FormsFormsGetResponse struct {
    ContentType string 
    Form *shared.Form 
    StatusCode int64 
    
}

