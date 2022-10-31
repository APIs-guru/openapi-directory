package operations

import (
"openapi/pkg/models/shared")

type DNSResponsePoliciesPatchPathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    ResponsePolicy string `pathParam:"style=simple,explode=false,name=responsePolicy"`
    
}

type DNSResponsePoliciesPatchQueryParams struct {
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

type DNSResponsePoliciesPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResponsePoliciesPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResponsePoliciesPatchSecurity struct {
    Option1 *DNSResponsePoliciesPatchSecurityOption1 `security:"option"`
    Option2 *DNSResponsePoliciesPatchSecurityOption2 `security:"option"`
    
}

type DNSResponsePoliciesPatchRequest struct {
    PathParams DNSResponsePoliciesPatchPathParams 
    QueryParams DNSResponsePoliciesPatchQueryParams 
    Request *shared.ResponsePolicy `request:"mediaType=application/json"`
    Security DNSResponsePoliciesPatchSecurity 
    
}

type DNSResponsePoliciesPatchResponse struct {
    ContentType string 
    ResponsePoliciesPatchResponse *shared.ResponsePoliciesPatchResponse 
    StatusCode int64 
    
}

