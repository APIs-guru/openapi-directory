package operations

import (
"openapi/pkg/models/shared")

type DNSResponsePolicyRulesListPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    ResponsePolicy string `pathParam:"style=simple,explode=false,name=responsePolicy"`
    
}

type DNSResponsePolicyRulesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DNSResponsePolicyRulesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResponsePolicyRulesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResponsePolicyRulesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResponsePolicyRulesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResponsePolicyRulesListSecurity struct {
    Option1 *DNSResponsePolicyRulesListSecurityOption1 `security:"option"`
    Option2 *DNSResponsePolicyRulesListSecurityOption2 `security:"option"`
    Option3 *DNSResponsePolicyRulesListSecurityOption3 `security:"option"`
    Option4 *DNSResponsePolicyRulesListSecurityOption4 `security:"option"`
    
}

type DNSResponsePolicyRulesListRequest struct {
    PathParams DNSResponsePolicyRulesListPathParams 
    QueryParams DNSResponsePolicyRulesListQueryParams 
    Security DNSResponsePolicyRulesListSecurity 
    
}

type DNSResponsePolicyRulesListResponse struct {
    ContentType string 
    ResponsePolicyRulesListResponse *shared.ResponsePolicyRulesListResponse 
    StatusCode int64 
    
}

