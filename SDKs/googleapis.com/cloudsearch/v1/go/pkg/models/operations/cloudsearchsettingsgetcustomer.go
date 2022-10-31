package operations

import (
"openapi/pkg/models/shared")

type CloudsearchSettingsGetCustomerQueryParams struct {
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

type CloudsearchSettingsGetCustomerSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsGetCustomerSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsGetCustomerSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudsearchSettingsGetCustomerSecurity struct {
    Option1 *CloudsearchSettingsGetCustomerSecurityOption1 `security:"option"`
    Option2 *CloudsearchSettingsGetCustomerSecurityOption2 `security:"option"`
    Option3 *CloudsearchSettingsGetCustomerSecurityOption3 `security:"option"`
    
}

type CloudsearchSettingsGetCustomerRequest struct {
    QueryParams CloudsearchSettingsGetCustomerQueryParams 
    Security CloudsearchSettingsGetCustomerSecurity 
    
}

type CloudsearchSettingsGetCustomerResponse struct {
    ContentType string 
    CustomerSettings *shared.CustomerSettings 
    StatusCode int64 
    
}

