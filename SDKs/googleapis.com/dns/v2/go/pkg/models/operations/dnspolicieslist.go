package operations

import (
"openapi/pkg/models/shared")

type DNSPoliciesListPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DNSPoliciesListQueryParams struct {
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

type DNSPoliciesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSPoliciesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSPoliciesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSPoliciesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSPoliciesListSecurity struct {
    Option1 *DNSPoliciesListSecurityOption1 `security:"option"`
    Option2 *DNSPoliciesListSecurityOption2 `security:"option"`
    Option3 *DNSPoliciesListSecurityOption3 `security:"option"`
    Option4 *DNSPoliciesListSecurityOption4 `security:"option"`
    
}

type DNSPoliciesListRequest struct {
    PathParams DNSPoliciesListPathParams 
    QueryParams DNSPoliciesListQueryParams 
    Security DNSPoliciesListSecurity 
    
}

type DNSPoliciesListResponse struct {
    ContentType string 
    PoliciesListResponse *shared.PoliciesListResponse 
    StatusCode int64 
    
}

