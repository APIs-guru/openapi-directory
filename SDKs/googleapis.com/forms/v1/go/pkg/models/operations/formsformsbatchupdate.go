package operations

import (
"openapi/pkg/models/shared")

type FormsFormsBatchUpdatePathParams struct {
    FormID string `pathParam:"style=simple,explode=false,name=formId"`
    
}

type FormsFormsBatchUpdateQueryParams struct {
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

type FormsFormsBatchUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsBatchUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsBatchUpdateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FormsFormsBatchUpdateSecurity struct {
    Option1 *FormsFormsBatchUpdateSecurityOption1 `security:"option"`
    Option2 *FormsFormsBatchUpdateSecurityOption2 `security:"option"`
    Option3 *FormsFormsBatchUpdateSecurityOption3 `security:"option"`
    
}

type FormsFormsBatchUpdateRequest struct {
    PathParams FormsFormsBatchUpdatePathParams 
    QueryParams FormsFormsBatchUpdateQueryParams 
    Request *shared.BatchUpdateFormRequest `request:"mediaType=application/json"`
    Security FormsFormsBatchUpdateSecurity 
    
}

type FormsFormsBatchUpdateResponse struct {
    BatchUpdateFormResponse *shared.BatchUpdateFormResponse 
    ContentType string 
    StatusCode int64 
    
}

