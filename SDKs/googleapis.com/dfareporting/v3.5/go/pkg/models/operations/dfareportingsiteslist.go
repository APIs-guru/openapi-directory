package operations

import (
"openapi/pkg/models/shared")

type DfareportingSitesListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingSitesListSortFieldEnum string

const (
    DfareportingSitesListSortFieldEnumID DfareportingSitesListSortFieldEnum = "ID"
DfareportingSitesListSortFieldEnumName DfareportingSitesListSortFieldEnum = "NAME"
)



type DfareportingSitesListSortOrderEnum string

const (
    DfareportingSitesListSortOrderEnumAscending DfareportingSitesListSortOrderEnum = "ASCENDING"
DfareportingSitesListSortOrderEnumDescending DfareportingSitesListSortOrderEnum = "DESCENDING"
)


type DfareportingSitesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AcceptsInStreamVideoPlacements *bool `queryParam:"style=form,explode=true,name=acceptsInStreamVideoPlacements"`
    AcceptsInterstitialPlacements *bool `queryParam:"style=form,explode=true,name=acceptsInterstitialPlacements"`
    AcceptsPublisherPaidPlacements *bool `queryParam:"style=form,explode=true,name=acceptsPublisherPaidPlacements"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdWordsSite *bool `queryParam:"style=form,explode=true,name=adWordsSite"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Approved *bool `queryParam:"style=form,explode=true,name=approved"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CampaignIds []string `queryParam:"style=form,explode=true,name=campaignIds"`
    DirectorySiteIds []string `queryParam:"style=form,explode=true,name=directorySiteIds"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingSitesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingSitesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    SubaccountID *string `queryParam:"style=form,explode=true,name=subaccountId"`
    UnmappedSite *bool `queryParam:"style=form,explode=true,name=unmappedSite"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingSitesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingSitesListRequest struct {
    PathParams DfareportingSitesListPathParams 
    QueryParams DfareportingSitesListQueryParams 
    Security DfareportingSitesListSecurity 
    
}

type DfareportingSitesListResponse struct {
    ContentType string 
    SitesListResponse *shared.SitesListResponse 
    StatusCode int64 
    
}

