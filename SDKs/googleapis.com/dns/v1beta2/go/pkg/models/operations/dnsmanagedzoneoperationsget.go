package operations

import (
"openapi/pkg/models/shared")

type DNSManagedZoneOperationsGetPathParams struct {
    ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
    Operation string `pathParam:"style=simple,explode=false,name=operation"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DNSManagedZoneOperationsGetQueryParams struct {
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

type DNSManagedZoneOperationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZoneOperationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZoneOperationsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZoneOperationsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZoneOperationsGetSecurity struct {
    Option1 *DNSManagedZoneOperationsGetSecurityOption1 `security:"option"`
    Option2 *DNSManagedZoneOperationsGetSecurityOption2 `security:"option"`
    Option3 *DNSManagedZoneOperationsGetSecurityOption3 `security:"option"`
    Option4 *DNSManagedZoneOperationsGetSecurityOption4 `security:"option"`
    
}

type DNSManagedZoneOperationsGetRequest struct {
    PathParams DNSManagedZoneOperationsGetPathParams 
    QueryParams DNSManagedZoneOperationsGetQueryParams 
    Security DNSManagedZoneOperationsGetSecurity 
    
}

type DNSManagedZoneOperationsGetResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

