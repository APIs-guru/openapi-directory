package operations

import (
"openapi/pkg/models/shared")

type DfareportingCreativesListPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}


type DfareportingCreativesListSortFieldEnum string

const (
    DfareportingCreativesListSortFieldEnumID DfareportingCreativesListSortFieldEnum = "ID"
DfareportingCreativesListSortFieldEnumName DfareportingCreativesListSortFieldEnum = "NAME"
)



type DfareportingCreativesListSortOrderEnum string

const (
    DfareportingCreativesListSortOrderEnumAscending DfareportingCreativesListSortOrderEnum = "ASCENDING"
DfareportingCreativesListSortOrderEnumDescending DfareportingCreativesListSortOrderEnum = "DESCENDING"
)



type DfareportingCreativesListTypesEnum string

const (
    DfareportingCreativesListTypesEnumImage DfareportingCreativesListTypesEnum = "IMAGE"
DfareportingCreativesListTypesEnumDisplayRedirect DfareportingCreativesListTypesEnum = "DISPLAY_REDIRECT"
DfareportingCreativesListTypesEnumCustomDisplay DfareportingCreativesListTypesEnum = "CUSTOM_DISPLAY"
DfareportingCreativesListTypesEnumInternalRedirect DfareportingCreativesListTypesEnum = "INTERNAL_REDIRECT"
DfareportingCreativesListTypesEnumCustomDisplayInterstitial DfareportingCreativesListTypesEnum = "CUSTOM_DISPLAY_INTERSTITIAL"
DfareportingCreativesListTypesEnumInterstitialInternalRedirect DfareportingCreativesListTypesEnum = "INTERSTITIAL_INTERNAL_REDIRECT"
DfareportingCreativesListTypesEnumTrackingText DfareportingCreativesListTypesEnum = "TRACKING_TEXT"
DfareportingCreativesListTypesEnumRichMediaDisplayBanner DfareportingCreativesListTypesEnum = "RICH_MEDIA_DISPLAY_BANNER"
DfareportingCreativesListTypesEnumRichMediaInpageFloating DfareportingCreativesListTypesEnum = "RICH_MEDIA_INPAGE_FLOATING"
DfareportingCreativesListTypesEnumRichMediaImExpand DfareportingCreativesListTypesEnum = "RICH_MEDIA_IM_EXPAND"
DfareportingCreativesListTypesEnumRichMediaDisplayExpanding DfareportingCreativesListTypesEnum = "RICH_MEDIA_DISPLAY_EXPANDING"
DfareportingCreativesListTypesEnumRichMediaDisplayInterstitial DfareportingCreativesListTypesEnum = "RICH_MEDIA_DISPLAY_INTERSTITIAL"
DfareportingCreativesListTypesEnumRichMediaDisplayMultiFloatingInterstitial DfareportingCreativesListTypesEnum = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL"
DfareportingCreativesListTypesEnumRichMediaMobileInApp DfareportingCreativesListTypesEnum = "RICH_MEDIA_MOBILE_IN_APP"
DfareportingCreativesListTypesEnumFlashInpage DfareportingCreativesListTypesEnum = "FLASH_INPAGE"
DfareportingCreativesListTypesEnumInstreamVideo DfareportingCreativesListTypesEnum = "INSTREAM_VIDEO"
DfareportingCreativesListTypesEnumVpaidLinearVideo DfareportingCreativesListTypesEnum = "VPAID_LINEAR_VIDEO"
DfareportingCreativesListTypesEnumVpaidNonLinearVideo DfareportingCreativesListTypesEnum = "VPAID_NON_LINEAR_VIDEO"
DfareportingCreativesListTypesEnumInstreamVideoRedirect DfareportingCreativesListTypesEnum = "INSTREAM_VIDEO_REDIRECT"
DfareportingCreativesListTypesEnumRichMediaPeelDown DfareportingCreativesListTypesEnum = "RICH_MEDIA_PEEL_DOWN"
DfareportingCreativesListTypesEnumHtml5Banner DfareportingCreativesListTypesEnum = "HTML5_BANNER"
DfareportingCreativesListTypesEnumDisplay DfareportingCreativesListTypesEnum = "DISPLAY"
DfareportingCreativesListTypesEnumDisplayImageGallery DfareportingCreativesListTypesEnum = "DISPLAY_IMAGE_GALLERY"
DfareportingCreativesListTypesEnumBrandSafeDefaultInstreamVideo DfareportingCreativesListTypesEnum = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO"
DfareportingCreativesListTypesEnumInstreamAudio DfareportingCreativesListTypesEnum = "INSTREAM_AUDIO"
)


type DfareportingCreativesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Active *bool `queryParam:"style=form,explode=true,name=active"`
    AdvertiserID *string `queryParam:"style=form,explode=true,name=advertiserId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Archived *bool `queryParam:"style=form,explode=true,name=archived"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CampaignID *string `queryParam:"style=form,explode=true,name=campaignId"`
    CompanionCreativeIds []string `queryParam:"style=form,explode=true,name=companionCreativeIds"`
    CreativeFieldIds []string `queryParam:"style=form,explode=true,name=creativeFieldIds"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RenderingIds []string `queryParam:"style=form,explode=true,name=renderingIds"`
    SearchString *string `queryParam:"style=form,explode=true,name=searchString"`
    SizeIds []string `queryParam:"style=form,explode=true,name=sizeIds"`
    SortField *DfareportingCreativesListSortFieldEnum `queryParam:"style=form,explode=true,name=sortField"`
    SortOrder *DfareportingCreativesListSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
    StudioCreativeID *string `queryParam:"style=form,explode=true,name=studioCreativeId"`
    Types []DfareportingCreativesListTypesEnum `queryParam:"style=form,explode=true,name=types"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DfareportingCreativesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingCreativesListRequest struct {
    PathParams DfareportingCreativesListPathParams 
    QueryParams DfareportingCreativesListQueryParams 
    Security DfareportingCreativesListSecurity 
    
}

type DfareportingCreativesListResponse struct {
    ContentType string 
    CreativesListResponse *shared.CreativesListResponse 
    StatusCode int64 
    
}

