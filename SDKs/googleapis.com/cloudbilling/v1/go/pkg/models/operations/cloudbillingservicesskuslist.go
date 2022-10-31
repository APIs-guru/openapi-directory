package operations

import (
"openapi/pkg/models/shared")

type CloudbillingServicesSkusListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type CloudbillingServicesSkusListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CurrencyCode *string `queryParam:"style=form,explode=true,name=currencyCode"`
    EndTime *string `queryParam:"style=form,explode=true,name=endTime"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartTime *string `queryParam:"style=form,explode=true,name=startTime"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type CloudbillingServicesSkusListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingServicesSkusListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingServicesSkusListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudbillingServicesSkusListSecurity struct {
    Option1 *CloudbillingServicesSkusListSecurityOption1 `security:"option"`
    Option2 *CloudbillingServicesSkusListSecurityOption2 `security:"option"`
    Option3 *CloudbillingServicesSkusListSecurityOption3 `security:"option"`
    
}

type CloudbillingServicesSkusListRequest struct {
    PathParams CloudbillingServicesSkusListPathParams 
    QueryParams CloudbillingServicesSkusListQueryParams 
    Security CloudbillingServicesSkusListSecurity 
    
}

type CloudbillingServicesSkusListResponse struct {
    ContentType string 
    ListSkusResponse *shared.ListSkusResponse 
    StatusCode int64 
    
}

