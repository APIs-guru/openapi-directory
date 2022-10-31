package operations

import (
"openapi/pkg/models/shared")

type DNSResourceRecordSetsPatchPathParams struct {
    ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type DNSResourceRecordSetsPatchQueryParams struct {
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

type DNSResourceRecordSetsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsPatchSecurity struct {
    Option1 *DNSResourceRecordSetsPatchSecurityOption1 `security:"option"`
    Option2 *DNSResourceRecordSetsPatchSecurityOption2 `security:"option"`
    
}

type DNSResourceRecordSetsPatchRequest struct {
    PathParams DNSResourceRecordSetsPatchPathParams 
    QueryParams DNSResourceRecordSetsPatchQueryParams 
    Request *shared.ResourceRecordSet `request:"mediaType=application/json"`
    Security DNSResourceRecordSetsPatchSecurity 
    
}

type DNSResourceRecordSetsPatchResponse struct {
    ContentType string 
    ResourceRecordSet *shared.ResourceRecordSet 
    StatusCode int64 
    
}

