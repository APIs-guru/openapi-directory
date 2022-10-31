package operations

import (
"openapi/pkg/models/shared")

type DfareportingReportsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingReportsListScopeEnum string

const (
    DfareportingReportsListScopeEnumAll DfareportingReportsListScopeEnum = "ALL"
DfareportingReportsListScopeEnumMine DfareportingReportsListScopeEnum = "MINE"
)



type DfareportingReportsListSortFieldEnum string

const (
    DfareportingReportsListSortFieldEnumID DfareportingReportsListSortFieldEnum = "ID"
DfareportingReportsListSortFieldEnumLastModifiedTime DfareportingReportsListSortFieldEnum = "LAST_MODIFIED_TIME"
DfareportingReportsListSortFieldEnumName DfareportingReportsListSortFieldEnum = "NAME"
)



type DfareportingReportsListSortOrderEnum string

const (
    DfareportingReportsListSortOrderEnumAscending DfareportingReportsListSortOrderEnum = "ASCENDING"
DfareportingReportsListSortOrderEnumDescending DfareportingReportsListSortOrderEnum = "DESCENDING"
)


type DfareportingReportsListQueryParams struct {
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
    Scope *DfareportingReportsListScopeEnum `queryParam:"style=form,explode=true,name=scope"`
    SortField *DfareportingReportsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingReportsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingReportsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingReportsListRequest struct {
    PathParams DfareportingReportsListPathParams 
    QueryParams DfareportingReportsListQueryParams 
    Security DfareportingReportsListSecurity 
    
}

type DfareportingReportsListResponse struct {
    ContentType string 
    ReportList *shared.ReportList 
    StatusCode int64 
    
}

