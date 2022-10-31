package operations

import (
"openapi/pkg/models/shared")

type DNSManagedZonesPatchPathParams struct {
    ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DNSManagedZonesPatchQueryParams struct {
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

type DNSManagedZonesPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZonesPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZonesPatchSecurity struct {
    Option1 *DNSManagedZonesPatchSecurityOption1 `security:"option"`
    Option2 *DNSManagedZonesPatchSecurityOption2 `security:"option"`
    
}

type DNSManagedZonesPatchRequest struct {
    PathParams DNSManagedZonesPatchPathParams 
    QueryParams DNSManagedZonesPatchQueryParams 
    Request *shared.ManagedZone `request:"mediaType=application/json"`
    Security DNSManagedZonesPatchSecurity 
    
}

type DNSManagedZonesPatchResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

