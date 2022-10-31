package operations

import (
"openapi/pkg/models/shared")

type DfareportingPlacementsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingPlacementsListActiveStatusEnum string

const (
    DfareportingPlacementsListActiveStatusEnumPlacementStatusUnknown DfareportingPlacementsListActiveStatusEnum = "PLACEMENT_STATUS_UNKNOWN"
DfareportingPlacementsListActiveStatusEnumPlacementStatusActive DfareportingPlacementsListActiveStatusEnum = "PLACEMENT_STATUS_ACTIVE"
DfareportingPlacementsListActiveStatusEnumPlacementStatusInactive DfareportingPlacementsListActiveStatusEnum = "PLACEMENT_STATUS_INACTIVE"
DfareportingPlacementsListActiveStatusEnumPlacementStatusArchived DfareportingPlacementsListActiveStatusEnum = "PLACEMENT_STATUS_ARCHIVED"
DfareportingPlacementsListActiveStatusEnumPlacementStatusPermanentlyArchived DfareportingPlacementsListActiveStatusEnum = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
)



type DfareportingPlacementsListCompatibilitiesEnum string

const (
    DfareportingPlacementsListCompatibilitiesEnumDisplay DfareportingPlacementsListCompatibilitiesEnum = "DISPLAY"
DfareportingPlacementsListCompatibilitiesEnumDisplayInterstitial DfareportingPlacementsListCompatibilitiesEnum = "DISPLAY_INTERSTITIAL"
DfareportingPlacementsListCompatibilitiesEnumApp DfareportingPlacementsListCompatibilitiesEnum = "APP"
DfareportingPlacementsListCompatibilitiesEnumAppInterstitial DfareportingPlacementsListCompatibilitiesEnum = "APP_INTERSTITIAL"
DfareportingPlacementsListCompatibilitiesEnumInStreamVideo DfareportingPlacementsListCompatibilitiesEnum = "IN_STREAM_VIDEO"
DfareportingPlacementsListCompatibilitiesEnumInStreamAudio DfareportingPlacementsListCompatibilitiesEnum = "IN_STREAM_AUDIO"
)



type DfareportingPlacementsListPaymentSourceEnum string

const (
    DfareportingPlacementsListPaymentSourceEnumPlacementAgencyPaid DfareportingPlacementsListPaymentSourceEnum = "PLACEMENT_AGENCY_PAID"
DfareportingPlacementsListPaymentSourceEnumPlacementPublisherPaid DfareportingPlacementsListPaymentSourceEnum = "PLACEMENT_PUBLISHER_PAID"
)



type DfareportingPlacementsListPricingTypesEnum string

const (
    DfareportingPlacementsListPricingTypesEnumPricingTypeCpm DfareportingPlacementsListPricingTypesEnum = "PRICING_TYPE_CPM"
DfareportingPlacementsListPricingTypesEnumPricingTypeCpc DfareportingPlacementsListPricingTypesEnum = "PRICING_TYPE_CPC"
DfareportingPlacementsListPricingTypesEnumPricingTypeCpa DfareportingPlacementsListPricingTypesEnum = "PRICING_TYPE_CPA"
DfareportingPlacementsListPricingTypesEnumPricingTypeFlatRateImpressions DfareportingPlacementsListPricingTypesEnum = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
DfareportingPlacementsListPricingTypesEnumPricingTypeFlatRateClicks DfareportingPlacementsListPricingTypesEnum = "PRICING_TYPE_FLAT_RATE_CLICKS"
DfareportingPlacementsListPricingTypesEnumPricingTypeCpmActiveview DfareportingPlacementsListPricingTypesEnum = "PRICING_TYPE_CPM_ACTIVEVIEW"
)



type DfareportingPlacementsListSortFieldEnum string

const (
    DfareportingPlacementsListSortFieldEnumID DfareportingPlacementsListSortFieldEnum = "ID"
DfareportingPlacementsListSortFieldEnumName DfareportingPlacementsListSortFieldEnum = "NAME"
)



type DfareportingPlacementsListSortOrderEnum string

const (
    DfareportingPlacementsListSortOrderEnumAscending DfareportingPlacementsListSortOrderEnum = "ASCENDING"
DfareportingPlacementsListSortOrderEnumDescending DfareportingPlacementsListSortOrderEnum = "DESCENDING"
)


type DfareportingPlacementsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    ActiveStatus []DfareportingPlacementsListActiveStatusEnum `queryParam:"style=form,explode=true,name=activeStatus"`
    AdvertiserIds []string `queryParam:"style=form,explode=true,name=advertiserIds"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CampaignIds []string `queryParam:"style=form,explode=true,name=campaignIds"`
    Compatibilities []DfareportingPlacementsListCompatibilitiesEnum `queryParam:"style=form,explode=true,name=compatibilities"`
    ContentCategoryIds []string `queryParam:"style=form,explode=true,name=contentCategoryIds"`
    DirectorySiteIds []string `queryParam:"style=form,explode=true,name=directorySiteIds"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    GroupIds []string `queryParam:"style=form,explode=true,name=groupIds"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxEndDate *string `queryParam:"style=form,explode=true,name=maxEndDate"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    MaxStartDate *string `queryParam:"style=form,explode=true,name=maxStartDate"`
    MinEndDate *string `queryParam:"style=form,explode=true,name=minEndDate"`
    MinStartDate *string `queryParam:"style=form,explode=true,name=minStartDate"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PaymentSource *DfareportingPlacementsListPaymentSourceEnum `queryParam:"style=form,explode=true,name=paymentSource"`
    PlacementStrategyIds []string `queryParam:"style=form,explode=true,name=placementStrategyIds"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    PricingTypes []DfareportingPlacementsListPricingTypesEnum `queryParam:"style=form,explode=true,name=pricingTypes"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SiteIds []string `queryParam:"style=form,explode=true,name=siteIds"`
    SizeIds []string `queryParam:"style=form,explode=true,name=sizeIds"`
    SortField *DfareportingPlacementsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingPlacementsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingPlacementsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingPlacementsListRequest struct {
    PathParams DfareportingPlacementsListPathParams 
    QueryParams DfareportingPlacementsListQueryParams 
    Security DfareportingPlacementsListSecurity 
    
}

type DfareportingPlacementsListResponse struct {
    ContentType string 
    PlacementsListResponse *shared.PlacementsListResponse 
    StatusCode int64 
    
}

