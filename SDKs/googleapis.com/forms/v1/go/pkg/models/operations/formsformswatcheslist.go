package operations

import (
"openapi/pkg/models/shared")

type FormsFormsWatchesListPathParams struct {
    FormID string `pathParam:"style=simple,explode=false,name=formId"`
    
}

type FormsFormsWatchesListQueryParams struct {
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

type FormsFormsWatchesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsWatchesListSecurity struct {
    Option1 *FormsFormsWatchesListSecurityOption1 `security:"option"`
    Option2 *FormsFormsWatchesListSecurityOption2 `security:"option"`
    Option3 *FormsFormsWatchesListSecurityOption3 `security:"option"`
    Option4 *FormsFormsWatchesListSecurityOption4 `security:"option"`
    Option5 *FormsFormsWatchesListSecurityOption5 `security:"option"`
    Option6 *FormsFormsWatchesListSecurityOption6 `security:"option"`
    
}

type FormsFormsWatchesListRequest struct {
    PathParams FormsFormsWatchesListPathParams 
    QueryParams FormsFormsWatchesListQueryParams 
    Security FormsFormsWatchesListSecurity 
    
}

type FormsFormsWatchesListResponse struct {
    ContentType string 
    ListWatchesResponse *shared.ListWatchesResponse 
    StatusCode int64 
    
}

