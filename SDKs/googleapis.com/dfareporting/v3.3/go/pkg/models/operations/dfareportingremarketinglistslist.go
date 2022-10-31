package operations

import (
"openapi/pkg/models/shared")

type DfareportingRemarketingListsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingRemarketingListsListSortFieldEnum string

const (
    DfareportingRemarketingListsListSortFieldEnumID DfareportingRemarketingListsListSortFieldEnum = "ID"
DfareportingRemarketingListsListSortFieldEnumName DfareportingRemarketingListsListSortFieldEnum = "NAME"
)



type DfareportingRemarketingListsListSortOrderEnum string

const (
    DfareportingRemarketingListsListSortOrderEnumAscending DfareportingRemarketingListsListSortOrderEnum = "ASCENDING"
DfareportingRemarketingListsListSortOrderEnumDescending DfareportingRemarketingListsListSortOrderEnum = "DESCENDING"
)


type DfareportingRemarketingListsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Active *bool `queryParam:"style=form,explode=true,name=active"`
    AdvertiserID string `queryParam:"style=form,explode=true,name=advertiserId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    FloodlightActivityID *string `queryParam:"style=form,explode=true,name=floodlightActivityId"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SortField *DfareportingRemarketingListsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingRemarketingListsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingRemarketingListsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingRemarketingListsListRequest struct {
    PathParams DfareportingRemarketingListsListPathParams 
    QueryParams DfareportingRemarketingListsListQueryParams 
    Security DfareportingRemarketingListsListSecurity 
    
}

type DfareportingRemarketingListsListResponse struct {
    ContentType string 
    RemarketingListsListResponse *shared.RemarketingListsListResponse 
    StatusCode int64 
    
}

