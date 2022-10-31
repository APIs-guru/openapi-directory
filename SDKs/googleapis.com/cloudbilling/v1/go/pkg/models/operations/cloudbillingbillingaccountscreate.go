package operations

import (
"openapi/pkg/models/shared")

type CloudbillingBillingAccountsCreateQueryParams struct {
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

type CloudbillingBillingAccountsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingBillingAccountsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingBillingAccountsCreateSecurity struct {
    Option1 *CloudbillingBillingAccountsCreateSecurityOption1 `security:"option"`
    Option2 *CloudbillingBillingAccountsCreateSecurityOption2 `security:"option"`
    
}

type CloudbillingBillingAccountsCreateRequest struct {
    QueryParams CloudbillingBillingAccountsCreateQueryParams 
    Request *shared.BillingAccount `request:"mediaType=application/json"`
    Security CloudbillingBillingAccountsCreateSecurity 
    
}

type CloudbillingBillingAccountsCreateResponse struct {
    BillingAccount *shared.BillingAccount 
    ContentType string 
    StatusCode int64 
    
}

