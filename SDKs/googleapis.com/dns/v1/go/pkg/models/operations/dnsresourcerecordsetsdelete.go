package operations

import (
"openapi/pkg/models/shared")

type DNSResourceRecordSetsDeletePathParams struct {
    ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type DNSResourceRecordSetsDeleteQueryParams struct {
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

type DNSResourceRecordSetsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsDeleteSecurity struct {
    Option1 *DNSResourceRecordSetsDeleteSecurityOption1 `security:"option"`
    Option2 *DNSResourceRecordSetsDeleteSecurityOption2 `security:"option"`
    
}

type DNSResourceRecordSetsDeleteRequest struct {
    PathParams DNSResourceRecordSetsDeletePathParams 
    QueryParams DNSResourceRecordSetsDeleteQueryParams 
    Security DNSResourceRecordSetsDeleteSecurity 
    
}

type DNSResourceRecordSetsDeleteResponse struct {
    ContentType string 
    ResourceRecordSetsDeleteResponse map[string]interface{} 
    StatusCode int64 
    
}

