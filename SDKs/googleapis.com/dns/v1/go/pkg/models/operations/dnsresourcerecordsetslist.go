package operations

import (
"openapi/pkg/models/shared")

type DNSResourceRecordSetsListPathParams struct {
    ManagedZone string `pathParam:"style=simple,explode=false,name=managedZone"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    
}

type DNSResourceRecordSetsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DNSResourceRecordSetsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DNSResourceRecordSetsListSecurity struct {
    Option1 *DNSResourceRecordSetsListSecurityOption1 `security:"option"`
    Option2 *DNSResourceRecordSetsListSecurityOption2 `security:"option"`
    Option3 *DNSResourceRecordSetsListSecurityOption3 `security:"option"`
    Option4 *DNSResourceRecordSetsListSecurityOption4 `security:"option"`
    
}

type DNSResourceRecordSetsListRequest struct {
    PathParams DNSResourceRecordSetsListPathParams 
    QueryParams DNSResourceRecordSetsListQueryParams 
    Security DNSResourceRecordSetsListSecurity 
    
}

type DNSResourceRecordSetsListResponse struct {
    ContentType string 
    ResourceRecordSetsListResponse *shared.ResourceRecordSetsListResponse 
    StatusCode int64 
    
}

