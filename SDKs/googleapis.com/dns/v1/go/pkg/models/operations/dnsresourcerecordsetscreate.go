package operations

import (
"openapi/pkg/models/shared")

type DNSResourceRecordSetsCreatePathParams struct {
    ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DNSResourceRecordSetsCreateQueryParams struct {
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

type DNSResourceRecordSetsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsCreateSecurity struct {
    Option1 *DNSResourceRecordSetsCreateSecurityOption1 `security:"option"`
    Option2 *DNSResourceRecordSetsCreateSecurityOption2 `security:"option"`
    
}

type DNSResourceRecordSetsCreateRequest struct {
    PathParams DNSResourceRecordSetsCreatePathParams 
    QueryParams DNSResourceRecordSetsCreateQueryParams 
    Request *shared.ResourceRecordSet `request:"mediaType=application/json"`
    Security DNSResourceRecordSetsCreateSecurity 
    
}

type DNSResourceRecordSetsCreateResponse struct {
    ContentType string 
    ResourceRecordSet *shared.ResourceRecordSet 
    StatusCode int64 
    
}

