package operations

import (
"openapi/pkg/models/shared")

type DfareportingAdvertiserLandingPagesListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingAdvertiserLandingPagesListSortFieldEnum string

const (
    DfareportingAdvertiserLandingPagesListSortFieldEnumID DfareportingAdvertiserLandingPagesListSortFieldEnum = "ID"
DfareportingAdvertiserLandingPagesListSortFieldEnumName DfareportingAdvertiserLandingPagesListSortFieldEnum = "NAME"
)



type DfareportingAdvertiserLandingPagesListSortOrderEnum string

const (
    DfareportingAdvertiserLandingPagesListSortOrderEnumAscending DfareportingAdvertiserLandingPagesListSortOrderEnum = "ASCENDING"
DfareportingAdvertiserLandingPagesListSortOrderEnumDescending DfareportingAdvertiserLandingPagesListSortOrderEnum = "DESCENDING"
)


type DfareportingAdvertiserLandingPagesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdvertiserIds []string `queryParam:"style=form,explode=true,name=advertiserIds"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Archived *bool `queryParam:"style=form,explode=true,name=archived"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CampaignIds []string `queryParam:"style=form,explode=true,name=campaignIds"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingAdvertiserLandingPagesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingAdvertiserLandingPagesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    SubaccountID *string `queryParam:"style=form,explode=true,name=subaccountId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingAdvertiserLandingPagesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingAdvertiserLandingPagesListRequest struct {
    PathParams DfareportingAdvertiserLandingPagesListPathParams 
    QueryParams DfareportingAdvertiserLandingPagesListQueryParams 
    Security DfareportingAdvertiserLandingPagesListSecurity 
    
}

type DfareportingAdvertiserLandingPagesListResponse struct {
    AdvertiserLandingPagesListResponse *shared.AdvertiserLandingPagesListResponse 
    ContentType string 
    StatusCode int64 
    
}

