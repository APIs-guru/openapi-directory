package operations

import (
"openapi/pkg/models/shared")

type CloudsearchSettingsUpdateCustomerQueryParams struct {
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

type CloudsearchSettingsUpdateCustomerSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsUpdateCustomerSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsUpdateCustomerSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsUpdateCustomerSecurity struct {
    Option1 *CloudsearchSettingsUpdateCustomerSecurityOption1 `security:"option"`
    Option2 *CloudsearchSettingsUpdateCustomerSecurityOption2 `security:"option"`
    Option3 *CloudsearchSettingsUpdateCustomerSecurityOption3 `security:"option"`
    
}

type CloudsearchSettingsUpdateCustomerRequest struct {
    QueryParams CloudsearchSettingsUpdateCustomerQueryParams 
    Request *shared.CustomerSettings `request:"mediaType=application/json"`
    Security CloudsearchSettingsUpdateCustomerSecurity 
    
}

type CloudsearchSettingsUpdateCustomerResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

