package operations

import (
"openapi/pkg/models/shared")

type DNSResourceRecordSetsGetPathParams struct {
    Location string `pathParam:"style=simple,explode=false,name=location"`
    ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type DNSResourceRecordSetsGetQueryParams struct {
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

type DNSResourceRecordSetsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsGetSecurity struct {
    Option1 *DNSResourceRecordSetsGetSecurityOption1 `security:"option"`
    Option2 *DNSResourceRecordSetsGetSecurityOption2 `security:"option"`
    Option3 *DNSResourceRecordSetsGetSecurityOption3 `security:"option"`
    Option4 *DNSResourceRecordSetsGetSecurityOption4 `security:"option"`
    
}

type DNSResourceRecordSetsGetRequest struct {
    PathParams DNSResourceRecordSetsGetPathParams 
    QueryParams DNSResourceRecordSetsGetQueryParams 
    Security DNSResourceRecordSetsGetSecurity 
    
}

type DNSResourceRecordSetsGetResponse struct {
    ContentType string 
    ResourceRecordSet *shared.ResourceRecordSet 
    StatusCode int64 
    
}

