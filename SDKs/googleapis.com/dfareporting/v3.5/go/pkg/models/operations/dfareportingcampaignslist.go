package operations

import (
"openapi/pkg/models/shared")

type DfareportingCampaignsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingCampaignsListSortFieldEnum string

const (
    DfareportingCampaignsListSortFieldEnumID DfareportingCampaignsListSortFieldEnum = "ID"
DfareportingCampaignsListSortFieldEnumName DfareportingCampaignsListSortFieldEnum = "NAME"
)



type DfareportingCampaignsListSortOrderEnum string

const (
    DfareportingCampaignsListSortOrderEnumAscending DfareportingCampaignsListSortOrderEnum = "ASCENDING"
DfareportingCampaignsListSortOrderEnumDescending DfareportingCampaignsListSortOrderEnum = "DESCENDING"
)


type DfareportingCampaignsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AdvertiserGroupIds []string `queryParam:"style=form,explode=true,name=advertiserGroupIds"`
    AdvertiserIds []string `queryParam:"style=form,explode=true,name=advertiserIds"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Archived *bool `queryParam:"style=form,explode=true,name=archived"`
    AtLeastOneOptimizationActivity *bool `queryParam:"style=form,explode=true,name=atLeastOneOptimizationActivity"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ExcludedIds []string `queryParam:"style=form,explode=true,name=excludedIds"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OverriddenEventTagID *string `queryParam:"style=form,explode=true,name=overriddenEventTagId"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SortField *DfareportingCampaignsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingCampaignsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    SubaccountID *string `queryParam:"style=form,explode=true,name=subaccountId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingCampaignsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingCampaignsListRequest struct {
    PathParams DfareportingCampaignsListPathParams 
    QueryParams DfareportingCampaignsListQueryParams 
    Security DfareportingCampaignsListSecurity 
    
}

type DfareportingCampaignsListResponse struct {
    CampaignsListResponse *shared.CampaignsListResponse 
    ContentType string 
    StatusCode int64 
    
}

