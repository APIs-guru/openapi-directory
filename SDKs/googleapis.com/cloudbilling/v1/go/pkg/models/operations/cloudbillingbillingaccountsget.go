package operations

import (
"openapi/pkg/models/shared")

type CloudbillingBillingAccountsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type CloudbillingBillingAccountsGetQueryParams struct {
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

type CloudbillingBillingAccountsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingBillingAccountsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingBillingAccountsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingBillingAccountsGetSecurity struct {
    Option1 *CloudbillingBillingAccountsGetSecurityOption1 `security:"option"`
    Option2 *CloudbillingBillingAccountsGetSecurityOption2 `security:"option"`
    Option3 *CloudbillingBillingAccountsGetSecurityOption3 `security:"option"`
    
}

type CloudbillingBillingAccountsGetRequest struct {
    PathParams CloudbillingBillingAccountsGetPathParams 
    QueryParams CloudbillingBillingAccountsGetQueryParams 
    Security CloudbillingBillingAccountsGetSecurity 
    
}

type CloudbillingBillingAccountsGetResponse struct {
    BillingAccount *shared.BillingAccount 
    ContentType string 
    StatusCode int64 
    
}

