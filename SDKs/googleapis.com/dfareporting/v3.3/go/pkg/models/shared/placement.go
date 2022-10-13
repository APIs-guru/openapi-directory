package shared

type PlacementCompatibilityEnum string

const (
	PlacementCompatibilityEnumDisplay             PlacementCompatibilityEnum = "DISPLAY"
	PlacementCompatibilityEnumDisplayInterstitial PlacementCompatibilityEnum = "DISPLAY_INTERSTITIAL"
	PlacementCompatibilityEnumApp                 PlacementCompatibilityEnum = "APP"
	PlacementCompatibilityEnumAppInterstitial     PlacementCompatibilityEnum = "APP_INTERSTITIAL"
	PlacementCompatibilityEnumInStreamVideo       PlacementCompatibilityEnum = "IN_STREAM_VIDEO"
	PlacementCompatibilityEnumInStreamAudio       PlacementCompatibilityEnum = "IN_STREAM_AUDIO"
)

type PlacementPaymentSourceEnum string

const (
	PlacementPaymentSourceEnumPlacementAgencyPaid    PlacementPaymentSourceEnum = "PLACEMENT_AGENCY_PAID"
	PlacementPaymentSourceEnumPlacementPublisherPaid PlacementPaymentSourceEnum = "PLACEMENT_PUBLISHER_PAID"
)

type PlacementStatusEnum string

const (
	PlacementStatusEnumPendingReview         PlacementStatusEnum = "PENDING_REVIEW"
	PlacementStatusEnumPaymentAccepted       PlacementStatusEnum = "PAYMENT_ACCEPTED"
	PlacementStatusEnumPaymentRejected       PlacementStatusEnum = "PAYMENT_REJECTED"
	PlacementStatusEnumAcknowledgeRejection  PlacementStatusEnum = "ACKNOWLEDGE_REJECTION"
	PlacementStatusEnumAcknowledgeAcceptance PlacementStatusEnum = "ACKNOWLEDGE_ACCEPTANCE"
	PlacementStatusEnumDraft                 PlacementStatusEnum = "DRAFT"
)

type PlacementTagFormatsEnum string

const (
	PlacementTagFormatsEnumPlacementTagStandard                           PlacementTagFormatsEnum = "PLACEMENT_TAG_STANDARD"
	PlacementTagFormatsEnumPlacementTagIframeJavascript                   PlacementTagFormatsEnum = "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
	PlacementTagFormatsEnumPlacementTagIframeIlayer                       PlacementTagFormatsEnum = "PLACEMENT_TAG_IFRAME_ILAYER"
	PlacementTagFormatsEnumPlacementTagInternalRedirect                   PlacementTagFormatsEnum = "PLACEMENT_TAG_INTERNAL_REDIRECT"
	PlacementTagFormatsEnumPlacementTagJavascript                         PlacementTagFormatsEnum = "PLACEMENT_TAG_JAVASCRIPT"
	PlacementTagFormatsEnumPlacementTagInterstitialIframeJavascript       PlacementTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
	PlacementTagFormatsEnumPlacementTagInterstitialInternalRedirect       PlacementTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
	PlacementTagFormatsEnumPlacementTagInterstitialJavascript             PlacementTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
	PlacementTagFormatsEnumPlacementTagClickCommands                      PlacementTagFormatsEnum = "PLACEMENT_TAG_CLICK_COMMANDS"
	PlacementTagFormatsEnumPlacementTagInstreamVideoPrefetch              PlacementTagFormatsEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
	PlacementTagFormatsEnumPlacementTagTracking                           PlacementTagFormatsEnum = "PLACEMENT_TAG_TRACKING"
	PlacementTagFormatsEnumPlacementTagTrackingIframe                     PlacementTagFormatsEnum = "PLACEMENT_TAG_TRACKING_IFRAME"
	PlacementTagFormatsEnumPlacementTagTrackingJavascript                 PlacementTagFormatsEnum = "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
	PlacementTagFormatsEnumPlacementTagInstreamVideoPrefetchVast3         PlacementTagFormatsEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
	PlacementTagFormatsEnumPlacementTagIframeJavascriptLegacy             PlacementTagFormatsEnum = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
	PlacementTagFormatsEnumPlacementTagJavascriptLegacy                   PlacementTagFormatsEnum = "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
	PlacementTagFormatsEnumPlacementTagInterstitialIframeJavascriptLegacy PlacementTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
	PlacementTagFormatsEnumPlacementTagInterstitialJavascriptLegacy       PlacementTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
	PlacementTagFormatsEnumPlacementTagInstreamVideoPrefetchVast4         PlacementTagFormatsEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
	PlacementTagFormatsEnumPlacementTagTrackingThirdPartyMeasurement      PlacementTagFormatsEnum = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
)

type PlacementVpaidAdapterChoiceEnum string

const (
	PlacementVpaidAdapterChoiceEnumDefault PlacementVpaidAdapterChoiceEnum = "DEFAULT"
	PlacementVpaidAdapterChoiceEnumFlash   PlacementVpaidAdapterChoiceEnum = "FLASH"
	PlacementVpaidAdapterChoiceEnumHtml5   PlacementVpaidAdapterChoiceEnum = "HTML5"
	PlacementVpaidAdapterChoiceEnumBoth    PlacementVpaidAdapterChoiceEnum = "BOTH"
)

type Placement struct {
	AccountID                      *string                          `json:"accountId"`
	AdBlockingOptOut               *bool                            `json:"adBlockingOptOut"`
	AdditionalSizes                []Size                           `json:"additionalSizes"`
	AdvertiserID                   *string                          `json:"advertiserId"`
	AdvertiserIDDimensionValue     *DimensionValue                  `json:"advertiserIdDimensionValue"`
	Archived                       *bool                            `json:"archived"`
	CampaignID                     *string                          `json:"campaignId"`
	CampaignIDDimensionValue       *DimensionValue                  `json:"campaignIdDimensionValue"`
	Comment                        *string                          `json:"comment"`
	Compatibility                  *PlacementCompatibilityEnum      `json:"compatibility"`
	ContentCategoryID              *string                          `json:"contentCategoryId"`
	CreateInfo                     *LastModifiedInfo                `json:"createInfo"`
	DirectorySiteID                *string                          `json:"directorySiteId"`
	DirectorySiteIDDimensionValue  *DimensionValue                  `json:"directorySiteIdDimensionValue"`
	ExternalID                     *string                          `json:"externalId"`
	ID                             *string                          `json:"id"`
	IDDimensionValue               *DimensionValue                  `json:"idDimensionValue"`
	KeyName                        *string                          `json:"keyName"`
	Kind                           *string                          `json:"kind"`
	LastModifiedInfo               *LastModifiedInfo                `json:"lastModifiedInfo"`
	LookbackConfiguration          *LookbackConfiguration           `json:"lookbackConfiguration"`
	Name                           *string                          `json:"name"`
	PaymentApproved                *bool                            `json:"paymentApproved"`
	PaymentSource                  *PlacementPaymentSourceEnum      `json:"paymentSource"`
	PlacementGroupID               *string                          `json:"placementGroupId"`
	PlacementGroupIDDimensionValue *DimensionValue                  `json:"placementGroupIdDimensionValue"`
	PlacementStrategyID            *string                          `json:"placementStrategyId"`
	PricingSchedule                *PricingSchedule                 `json:"pricingSchedule"`
	Primary                        *bool                            `json:"primary"`
	PublisherUpdateInfo            *LastModifiedInfo                `json:"publisherUpdateInfo"`
	SiteID                         *string                          `json:"siteId"`
	SiteIDDimensionValue           *DimensionValue                  `json:"siteIdDimensionValue"`
	Size                           *Size                            `json:"size"`
	SslRequired                    *bool                            `json:"sslRequired"`
	Status                         *PlacementStatusEnum             `json:"status"`
	SubaccountID                   *string                          `json:"subaccountId"`
	TagFormats                     []PlacementTagFormatsEnum        `json:"tagFormats"`
	TagSetting                     *TagSetting                      `json:"tagSetting"`
	VideoActiveViewOptOut          *bool                            `json:"videoActiveViewOptOut"`
	VideoSettings                  *VideoSettings                   `json:"videoSettings"`
	VpaidAdapterChoice             *PlacementVpaidAdapterChoiceEnum `json:"vpaidAdapterChoice"`
}
