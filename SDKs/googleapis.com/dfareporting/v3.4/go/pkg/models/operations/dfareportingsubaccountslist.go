package operations

import (
"openapi/pkg/models/shared")

type DfareportingSubaccountsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingSubaccountsListSortFieldEnum string

const (
    DfareportingSubaccountsListSortFieldEnumID DfareportingSubaccountsListSortFieldEnum = "ID"
DfareportingSubaccountsListSortFieldEnumName DfareportingSubaccountsListSortFieldEnum = "NAME"
)



type DfareportingSubaccountsListSortOrderEnum string

const (
    DfareportingSubaccountsListSortOrderEnumAscending DfareportingSubaccountsListSortOrderEnum = "ASCENDING"
DfareportingSubaccountsListSortOrderEnumDescending DfareportingSubaccountsListSortOrderEnum = "DESCENDING"
)


type DfareportingSubaccountsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingSubaccountsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingSubaccountsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingSubaccountsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingSubaccountsListRequest struct {
    PathParams DfareportingSubaccountsListPathParams 
    QueryParams DfareportingSubaccountsListQueryParams 
    Security DfareportingSubaccountsListSecurity 
    
}

type DfareportingSubaccountsListResponse struct {
    ContentType string 
    StatusCode int64 
    SubaccountsListResponse *shared.SubaccountsListResponse 
    
}

