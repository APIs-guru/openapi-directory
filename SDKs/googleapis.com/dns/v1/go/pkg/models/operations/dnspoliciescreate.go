package operations

import (
"openapi/pkg/models/shared")

type DNSPoliciesCreatePathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DNSPoliciesCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ClientOperationID *string `queryParam:"style=form,explode=true,name=clientOperationId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DNSPoliciesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSPoliciesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSPoliciesCreateSecurity struct {
    Option1 *DNSPoliciesCreateSecurityOption1 `security:"option"`
    Option2 *DNSPoliciesCreateSecurityOption2 `security:"option"`
    
}

type DNSPoliciesCreateRequest struct {
    PathParams DNSPoliciesCreatePathParams 
    QueryParams DNSPoliciesCreateQueryParams 
    Request *shared.Policy `request:"mediaType=application/json"`
    Security DNSPoliciesCreateSecurity 
    
}

type DNSPoliciesCreateResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

