package operations

import (
"openapi/pkg/models/shared")

type DfareportingAdsListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingAdsListCompatibilityEnum string

const (
    DfareportingAdsListCompatibilityEnumDisplay DfareportingAdsListCompatibilityEnum = "DISPLAY"
DfareportingAdsListCompatibilityEnumDisplayInterstitial DfareportingAdsListCompatibilityEnum = "DISPLAY_INTERSTITIAL"
DfareportingAdsListCompatibilityEnumApp DfareportingAdsListCompatibilityEnum = "APP"
DfareportingAdsListCompatibilityEnumAppInterstitial DfareportingAdsListCompatibilityEnum = "APP_INTERSTITIAL"
DfareportingAdsListCompatibilityEnumInStreamVideo DfareportingAdsListCompatibilityEnum = "IN_STREAM_VIDEO"
DfareportingAdsListCompatibilityEnumInStreamAudio DfareportingAdsListCompatibilityEnum = "IN_STREAM_AUDIO"
)



type DfareportingAdsListSortFieldEnum string

const (
    DfareportingAdsListSortFieldEnumID DfareportingAdsListSortFieldEnum = "ID"
DfareportingAdsListSortFieldEnumName DfareportingAdsListSortFieldEnum = "NAME"
)



type DfareportingAdsListSortOrderEnum string

const (
    DfareportingAdsListSortOrderEnumAscending DfareportingAdsListSortOrderEnum = "ASCENDING"
DfareportingAdsListSortOrderEnumDescending DfareportingAdsListSortOrderEnum = "DESCENDING"
)



type DfareportingAdsListTypeEnum string

const (
    DfareportingAdsListTypeEnumAdServingStandardAd DfareportingAdsListTypeEnum = "AD_SERVING_STANDARD_AD"
DfareportingAdsListTypeEnumAdServingDefaultAd DfareportingAdsListTypeEnum = "AD_SERVING_DEFAULT_AD"
DfareportingAdsListTypeEnumAdServingClickTracker DfareportingAdsListTypeEnum = "AD_SERVING_CLICK_TRACKER"
DfareportingAdsListTypeEnumAdServingTracking DfareportingAdsListTypeEnum = "AD_SERVING_TRACKING"
DfareportingAdsListTypeEnumAdServingBrandSafeAd DfareportingAdsListTypeEnum = "AD_SERVING_BRAND_SAFE_AD"
)


type DfareportingAdsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Active *bool `queryParam:"style=form,explode=true,name=active"`
    AdvertiserID *string `queryParam:"style=form,explode=true,name=advertiserId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Archived *bool `queryParam:"style=form,explode=true,name=archived"`
    AudienceSegmentIds []string `queryParam:"style=form,explode=true,name=audienceSegmentIds"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CampaignIds []string `queryParam:"style=form,explode=true,name=campaignIds"`
    Compatibility *DfareportingAdsListCompatibilityEnum `queryParam:"style=form,explode=true,name=compatibility"`
    CreativeIds []string `queryParam:"style=form,explode=true,name=creativeIds"`
    CreativeOptimizationConfigurationIds []string `queryParam:"style=form,explode=true,name=creativeOptimizationConfigurationIds"`
    DynamicClickTracker *bool `queryParam:"style=form,explode=true,name=dynamicClickTracker"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LandingPageIds []string `queryParam:"style=form,explode=true,name=landingPageIds"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OverriddenEventTagID *string `queryParam:"style=form,explode=true,name=overriddenEventTagId"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PlacementIds []string `queryParam:"style=form,explode=true,name=placementIds"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RemarketingListIds []string `queryParam:"style=form,explode=true,name=remarketingListIds"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SizeIds []string `queryParam:"style=form,explode=true,name=sizeIds"`
    SortField *DfareportingAdsListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingAdsListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    SslCompliant *bool `queryParam:"style=form,explode=true,name=sslCompliant"`
    SslRequired *bool `queryParam:"style=form,explode=true,name=sslRequired"`
    Type []DfareportingAdsListTypeEnum `queryParam:"style=form,explode=true,name=type"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingAdsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingAdsListRequest struct {
    PathParams DfareportingAdsListPathParams 
    QueryParams DfareportingAdsListQueryParams 
    Security DfareportingAdsListSecurity 
    
}

type DfareportingAdsListResponse struct {
    AdsListResponse *shared.AdsListResponse 
    ContentType string 
    StatusCode int64 
    
}

