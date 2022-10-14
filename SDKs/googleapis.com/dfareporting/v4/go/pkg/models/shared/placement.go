package shared

type PlacementActiveStatusEnum string

const (
	PlacementActiveStatusEnumPlacementStatusUnknown             PlacementActiveStatusEnum = "PLACEMENT_STATUS_UNKNOWN"
	PlacementActiveStatusEnumPlacementStatusActive              PlacementActiveStatusEnum = "PLACEMENT_STATUS_ACTIVE"
	PlacementActiveStatusEnumPlacementStatusInactive            PlacementActiveStatusEnum = "PLACEMENT_STATUS_INACTIVE"
	PlacementActiveStatusEnumPlacementStatusArchived            PlacementActiveStatusEnum = "PLACEMENT_STATUS_ARCHIVED"
	PlacementActiveStatusEnumPlacementStatusPermanentlyArchived PlacementActiveStatusEnum = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
)

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
	AccountID                      *string                          `json:"accountId,omitempty"`
	ActiveStatus                   *PlacementActiveStatusEnum       `json:"activeStatus,omitempty"`
	AdBlockingOptOut               *bool                            `json:"adBlockingOptOut,omitempty"`
	AdditionalSizes                []Size                           `json:"additionalSizes,omitempty"`
	AdvertiserID                   *string                          `json:"advertiserId,omitempty"`
	AdvertiserIDDimensionValue     *DimensionValue                  `json:"advertiserIdDimensionValue,omitempty"`
	CampaignID                     *string                          `json:"campaignId,omitempty"`
	CampaignIDDimensionValue       *DimensionValue                  `json:"campaignIdDimensionValue,omitempty"`
	Comment                        *string                          `json:"comment,omitempty"`
	Compatibility                  *PlacementCompatibilityEnum      `json:"compatibility,omitempty"`
	ContentCategoryID              *string                          `json:"contentCategoryId,omitempty"`
	CreateInfo                     *LastModifiedInfo                `json:"createInfo,omitempty"`
	DirectorySiteID                *string                          `json:"directorySiteId,omitempty"`
	DirectorySiteIDDimensionValue  *DimensionValue                  `json:"directorySiteIdDimensionValue,omitempty"`
	ExternalID                     *string                          `json:"externalId,omitempty"`
	ID                             *string                          `json:"id,omitempty"`
	IDDimensionValue               *DimensionValue                  `json:"idDimensionValue,omitempty"`
	KeyName                        *string                          `json:"keyName,omitempty"`
	Kind                           *string                          `json:"kind,omitempty"`
	LastModifiedInfo               *LastModifiedInfo                `json:"lastModifiedInfo,omitempty"`
	LookbackConfiguration          *LookbackConfiguration           `json:"lookbackConfiguration,omitempty"`
	Name                           *string                          `json:"name,omitempty"`
	PartnerWrappingData            *MeasurementPartnerWrappingData  `json:"partnerWrappingData,omitempty"`
	PaymentApproved                *bool                            `json:"paymentApproved,omitempty"`
	PaymentSource                  *PlacementPaymentSourceEnum      `json:"paymentSource,omitempty"`
	PlacementGroupID               *string                          `json:"placementGroupId,omitempty"`
	PlacementGroupIDDimensionValue *DimensionValue                  `json:"placementGroupIdDimensionValue,omitempty"`
	PlacementStrategyID            *string                          `json:"placementStrategyId,omitempty"`
	PricingSchedule                *PricingSchedule                 `json:"pricingSchedule,omitempty"`
	Primary                        *bool                            `json:"primary,omitempty"`
	PublisherUpdateInfo            *LastModifiedInfo                `json:"publisherUpdateInfo,omitempty"`
	SiteID                         *string                          `json:"siteId,omitempty"`
	SiteIDDimensionValue           *DimensionValue                  `json:"siteIdDimensionValue,omitempty"`
	Size                           *Size                            `json:"size,omitempty"`
	SslRequired                    *bool                            `json:"sslRequired,omitempty"`
	Status                         *PlacementStatusEnum             `json:"status,omitempty"`
	SubaccountID                   *string                          `json:"subaccountId,omitempty"`
	TagFormats                     []PlacementTagFormatsEnum        `json:"tagFormats,omitempty"`
	TagSetting                     *TagSetting                      `json:"tagSetting,omitempty"`
	VideoActiveViewOptOut          *bool                            `json:"videoActiveViewOptOut,omitempty"`
	VideoSettings                  *VideoSettings                   `json:"videoSettings,omitempty"`
	VpaidAdapterChoice             *PlacementVpaidAdapterChoiceEnum `json:"vpaidAdapterChoice,omitempty"`
	WrappingOptOut                 *bool                            `json:"wrappingOptOut,omitempty"`
}
