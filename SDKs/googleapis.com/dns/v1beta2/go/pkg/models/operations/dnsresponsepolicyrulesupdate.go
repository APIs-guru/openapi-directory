package operations

import (
"openapi/pkg/models/shared")

type DNSResponsePolicyRulesUpdatePathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    ResponsePolicy string `pathParam:"style=simple,explode=false,name=responsePolicy"`
    ResponsePolicyRule string `pathParam:"style=simple,explode=false,name=responsePolicyRule"`
    
}

type DNSResponsePolicyRulesUpdateQueryParams struct {
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

type DNSResponsePolicyRulesUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResponsePolicyRulesUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResponsePolicyRulesUpdateSecurity struct {
    Option1 *DNSResponsePolicyRulesUpdateSecurityOption1 `security:"option"`
    Option2 *DNSResponsePolicyRulesUpdateSecurityOption2 `security:"option"`
    
}

type DNSResponsePolicyRulesUpdateRequest struct {
    PathParams DNSResponsePolicyRulesUpdatePathParams 
    QueryParams DNSResponsePolicyRulesUpdateQueryParams 
    Request *shared.ResponsePolicyRule `request:"mediaType=application/json"`
    Security DNSResponsePolicyRulesUpdateSecurity 
    
}

type DNSResponsePolicyRulesUpdateResponse struct {
    ContentType string 
    ResponsePolicyRulesUpdateResponse *shared.ResponsePolicyRulesUpdateResponse 
    StatusCode int64 
    
}

