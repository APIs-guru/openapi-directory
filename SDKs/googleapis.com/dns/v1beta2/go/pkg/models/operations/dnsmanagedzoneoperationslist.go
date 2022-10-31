package operations

import (
"openapi/pkg/models/shared")

type DNSManagedZoneOperationsListPathParams struct {
    ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}


type DNSManagedZoneOperationsListSortByEnum string

const (
    DNSManagedZoneOperationsListSortByEnumStartTime DNSManagedZoneOperationsListSortByEnum = "startTime"
DNSManagedZoneOperationsListSortByEnumID DNSManagedZoneOperationsListSortByEnum = "id"
)


type DNSManagedZoneOperationsListQueryParams struct {
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
    SortBy *DNSManagedZoneOperationsListSortByEnum `queryParam:"style=form,explode=true,name=sortBy"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DNSManagedZoneOperationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZoneOperationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZoneOperationsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZoneOperationsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSManagedZoneOperationsListSecurity struct {
    Option1 *DNSManagedZoneOperationsListSecurityOption1 `security:"option"`
    Option2 *DNSManagedZoneOperationsListSecurityOption2 `security:"option"`
    Option3 *DNSManagedZoneOperationsListSecurityOption3 `security:"option"`
    Option4 *DNSManagedZoneOperationsListSecurityOption4 `security:"option"`
    
}

type DNSManagedZoneOperationsListRequest struct {
    PathParams DNSManagedZoneOperationsListPathParams 
    QueryParams DNSManagedZoneOperationsListQueryParams 
    Security DNSManagedZoneOperationsListSecurity 
    
}

type DNSManagedZoneOperationsListResponse struct {
    ContentType string 
    ManagedZoneOperationsListResponse *shared.ManagedZoneOperationsListResponse 
    StatusCode int64 
    
}

