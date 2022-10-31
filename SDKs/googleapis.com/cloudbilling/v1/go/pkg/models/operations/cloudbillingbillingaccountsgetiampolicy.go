package operations

import (
"openapi/pkg/models/shared")

type CloudbillingBillingAccountsGetIamPolicyPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type CloudbillingBillingAccountsGetIamPolicyQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OptionsRequestedPolicyVersion *int64 `queryParam:"style=form,explode=true,name=options.requestedPolicyVersion"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudbillingBillingAccountsGetIamPolicySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingBillingAccountsGetIamPolicySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingBillingAccountsGetIamPolicySecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingBillingAccountsGetIamPolicySecurity struct {
    Option1 *CloudbillingBillingAccountsGetIamPolicySecurityOption1 `security:"option"`
    Option2 *CloudbillingBillingAccountsGetIamPolicySecurityOption2 `security:"option"`
    Option3 *CloudbillingBillingAccountsGetIamPolicySecurityOption3 `security:"option"`
    
}

type CloudbillingBillingAccountsGetIamPolicyRequest struct {
    PathParams CloudbillingBillingAccountsGetIamPolicyPathParams 
    QueryParams CloudbillingBillingAccountsGetIamPolicyQueryParams 
    Security CloudbillingBillingAccountsGetIamPolicySecurity 
    
}

type CloudbillingBillingAccountsGetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

