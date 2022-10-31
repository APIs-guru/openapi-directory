package operations

import (
"openapi/pkg/models/shared")

type FormsFormsWatchesRenewPathParams struct {
    FormID string `pathParam:"style=simple,explode=false,name=formId"`
    WatchID string `pathParam:"style=simple,explode=false,name=watchId"`
    
}

type FormsFormsWatchesRenewQueryParams struct {
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

type FormsFormsWatchesRenewSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesRenewSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesRenewSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesRenewSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesRenewSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesRenewSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesRenewSecurity struct {
    Option1 *FormsFormsWatchesRenewSecurityOption1 `security:"option"`
    Option2 *FormsFormsWatchesRenewSecurityOption2 `security:"option"`
    Option3 *FormsFormsWatchesRenewSecurityOption3 `security:"option"`
    Option4 *FormsFormsWatchesRenewSecurityOption4 `security:"option"`
    Option5 *FormsFormsWatchesRenewSecurityOption5 `security:"option"`
    Option6 *FormsFormsWatchesRenewSecurityOption6 `security:"option"`
    
}

type FormsFormsWatchesRenewRequest struct {
    PathParams FormsFormsWatchesRenewPathParams 
    QueryParams FormsFormsWatchesRenewQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security FormsFormsWatchesRenewSecurity 
    
}

type FormsFormsWatchesRenewResponse struct {
    ContentType string 
    StatusCode int64 
    Watch *shared.Watch 
    
}

