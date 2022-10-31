package operations

import (
"openapi/pkg/models/shared")

type DfareportingBillingProfilesListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingBillingProfilesListSortFieldEnum string

const (
    DfareportingBillingProfilesListSortFieldEnumID DfareportingBillingProfilesListSortFieldEnum = "ID"
DfareportingBillingProfilesListSortFieldEnumName DfareportingBillingProfilesListSortFieldEnum = "NAME"
)



type DfareportingBillingProfilesListSortOrderEnum string

const (
    DfareportingBillingProfilesListSortOrderEnumAscending DfareportingBillingProfilesListSortOrderEnum = "ASCENDING"
DfareportingBillingProfilesListSortOrderEnumDescending DfareportingBillingProfilesListSortOrderEnum = "DESCENDING"
)



type DfareportingBillingProfilesListStatusEnum string

const (
    DfareportingBillingProfilesListStatusEnumUnderReview DfareportingBillingProfilesListStatusEnum = "UNDER_REVIEW"
DfareportingBillingProfilesListStatusEnumActive DfareportingBillingProfilesListStatusEnum = "ACTIVE"
DfareportingBillingProfilesListStatusEnumArchived DfareportingBillingProfilesListStatusEnum = "ARCHIVED"
)


type DfareportingBillingProfilesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CurrencyCode *string `queryParam:"style=form,explode=true,name=currency_code"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnlySuggestion *bool `queryParam:"style=form,explode=true,name=onlySuggestion"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SortField *DfareportingBillingProfilesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingBillingProfilesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    Status []DfareportingBillingProfilesListStatusEnum `queryParam:"style=form,explode=true,name=status"`
    SubaccountIds []string `queryParam:"style=form,explode=true,name=subaccountIds"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingBillingProfilesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingBillingProfilesListRequest struct {
    PathParams DfareportingBillingProfilesListPathParams 
    QueryParams DfareportingBillingProfilesListQueryParams 
    Security DfareportingBillingProfilesListSecurity 
    
}

type DfareportingBillingProfilesListResponse struct {
    BillingProfilesListResponse *shared.BillingProfilesListResponse 
    ContentType string 
    StatusCode int64 
    
}

