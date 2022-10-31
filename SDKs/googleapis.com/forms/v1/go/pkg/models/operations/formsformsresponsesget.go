package operations

import (
"openapi/pkg/models/shared")

type FormsFormsResponsesGetPathParams struct {
    FormID string `pathParam:"style=simple,explode=false,name=formId"`
    ResponseID string `pathParam:"style=simple,explode=false,name=responseId"`
    
}

type FormsFormsResponsesGetQueryParams struct {
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

type FormsFormsResponsesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsResponsesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsResponsesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsResponsesGetSecurity struct {
    Option1 *FormsFormsResponsesGetSecurityOption1 `security:"option"`
    Option2 *FormsFormsResponsesGetSecurityOption2 `security:"option"`
    Option3 *FormsFormsResponsesGetSecurityOption3 `security:"option"`
    
}

type FormsFormsResponsesGetRequest struct {
    PathParams FormsFormsResponsesGetPathParams 
    QueryParams FormsFormsResponsesGetQueryParams 
    Security FormsFormsResponsesGetSecurity 
    
}

type FormsFormsResponsesGetResponse struct {
    ContentType string 
    FormResponse *shared.FormResponse 
    StatusCode int64 
    
}

