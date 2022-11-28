package shared

type LineItemEntityStatusEnum string

const (
	LineItemEntityStatusEnumEntityStatusUnspecified          LineItemEntityStatusEnum = "ENTITY_STATUS_UNSPECIFIED"
	LineItemEntityStatusEnumEntityStatusActive               LineItemEntityStatusEnum = "ENTITY_STATUS_ACTIVE"
	LineItemEntityStatusEnumEntityStatusArchived             LineItemEntityStatusEnum = "ENTITY_STATUS_ARCHIVED"
	LineItemEntityStatusEnumEntityStatusDraft                LineItemEntityStatusEnum = "ENTITY_STATUS_DRAFT"
	LineItemEntityStatusEnumEntityStatusPaused               LineItemEntityStatusEnum = "ENTITY_STATUS_PAUSED"
	LineItemEntityStatusEnumEntityStatusScheduledForDeletion LineItemEntityStatusEnum = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
)

type LineItemLineItemTypeEnum string

const (
	LineItemLineItemTypeEnumLineItemTypeUnspecified                              LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_UNSPECIFIED"
	LineItemLineItemTypeEnumLineItemTypeDisplayDefault                           LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_DISPLAY_DEFAULT"
	LineItemLineItemTypeEnumLineItemTypeDisplayMobileAppInstall                  LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL"
	LineItemLineItemTypeEnumLineItemTypeVideoDefault                             LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_VIDEO_DEFAULT"
	LineItemLineItemTypeEnumLineItemTypeVideoMobileAppInstall                    LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL"
	LineItemLineItemTypeEnumLineItemTypeDisplayMobileAppInventory                LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY"
	LineItemLineItemTypeEnumLineItemTypeVideoMobileAppInventory                  LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY"
	LineItemLineItemTypeEnumLineItemTypeAudioDefault                             LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_AUDIO_DEFAULT"
	LineItemLineItemTypeEnumLineItemTypeVideoOverTheTop                          LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersAction                 LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersNonSkippable           LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersVideoSequence          LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersAudio                  LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersReach                  LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersSimple                 LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersNonSkippableOverTheTop LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersReachOverTheTop        LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP"
	LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersSimpleOverTheTop       LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP"
)

type LineItemReservationTypeEnum string

const (
	LineItemReservationTypeEnumReservationTypeUnspecified            LineItemReservationTypeEnum = "RESERVATION_TYPE_UNSPECIFIED"
	LineItemReservationTypeEnumReservationTypeNotGuaranteed          LineItemReservationTypeEnum = "RESERVATION_TYPE_NOT_GUARANTEED"
	LineItemReservationTypeEnumReservationTypeProgrammaticGuaranteed LineItemReservationTypeEnum = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"
	LineItemReservationTypeEnumReservationTypeTagGuaranteed          LineItemReservationTypeEnum = "RESERVATION_TYPE_TAG_GUARANTEED"
	LineItemReservationTypeEnumReservationTypePetraViral             LineItemReservationTypeEnum = "RESERVATION_TYPE_PETRA_VIRAL"
	LineItemReservationTypeEnumReservationTypeInstantReserve         LineItemReservationTypeEnum = "RESERVATION_TYPE_INSTANT_RESERVE"
)

type LineItemWarningMessagesEnum string

const (
	LineItemWarningMessagesEnumLineItemWarningMessageUnspecified            LineItemWarningMessagesEnum = "LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED"
	LineItemWarningMessagesEnumInvalidFlightDates                           LineItemWarningMessagesEnum = "INVALID_FLIGHT_DATES"
	LineItemWarningMessagesEnumExpired                                      LineItemWarningMessagesEnum = "EXPIRED"
	LineItemWarningMessagesEnumPendingFlight                                LineItemWarningMessagesEnum = "PENDING_FLIGHT"
	LineItemWarningMessagesEnumAllPartnerEnabledExchangesNegativelyTargeted LineItemWarningMessagesEnum = "ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED"
	LineItemWarningMessagesEnumInvalidInventorySource                       LineItemWarningMessagesEnum = "INVALID_INVENTORY_SOURCE"
	LineItemWarningMessagesEnumAppInventoryInvalidSiteTargeting             LineItemWarningMessagesEnum = "APP_INVENTORY_INVALID_SITE_TARGETING"
	LineItemWarningMessagesEnumAppInventoryInvalidAudienceLists             LineItemWarningMessagesEnum = "APP_INVENTORY_INVALID_AUDIENCE_LISTS"
	LineItemWarningMessagesEnumNoValidCreative                              LineItemWarningMessagesEnum = "NO_VALID_CREATIVE"
	LineItemWarningMessagesEnumParentInsertionOrderPaused                   LineItemWarningMessagesEnum = "PARENT_INSERTION_ORDER_PAUSED"
	LineItemWarningMessagesEnumParentInsertionOrderExpired                  LineItemWarningMessagesEnum = "PARENT_INSERTION_ORDER_EXPIRED"
)

// LineItemInput
// A single line item.
type LineItemInput struct {
	BidStrategy                *BiddingStrategy            `json:"bidStrategy,omitempty"`
	Budget                     *LineItemBudgetInput        `json:"budget,omitempty"`
	ConversionCounting         *ConversionCountingConfig   `json:"conversionCounting,omitempty"`
	CreativeIds                []string                    `json:"creativeIds,omitempty"`
	DisplayName                *string                     `json:"displayName,omitempty"`
	EntityStatus               *LineItemEntityStatusEnum   `json:"entityStatus,omitempty"`
	ExcludeNewExchanges        *bool                       `json:"excludeNewExchanges,omitempty"`
	Flight                     *LineItemFlight             `json:"flight,omitempty"`
	FrequencyCap               *FrequencyCap               `json:"frequencyCap,omitempty"`
	InsertionOrderID           *string                     `json:"insertionOrderId,omitempty"`
	IntegrationDetails         *IntegrationDetails         `json:"integrationDetails,omitempty"`
	LineItemType               *LineItemLineItemTypeEnum   `json:"lineItemType,omitempty"`
	MobileApp                  *MobileAppInput             `json:"mobileApp,omitempty"`
	Pacing                     *Pacing                     `json:"pacing,omitempty"`
	PartnerCosts               []PartnerCost               `json:"partnerCosts,omitempty"`
	PartnerRevenueModel        *PartnerRevenueModel        `json:"partnerRevenueModel,omitempty"`
	TargetingExpansion         *TargetingExpansionConfig   `json:"targetingExpansion,omitempty"`
	YoutubeAndPartnersSettings *YoutubeAndPartnersSettings `json:"youtubeAndPartnersSettings,omitempty"`
}

// LineItem
// A single line item.
type LineItem struct {
	AdvertiserID               *string                       `json:"advertiserId,omitempty"`
	BidStrategy                *BiddingStrategy              `json:"bidStrategy,omitempty"`
	Budget                     *LineItemBudget               `json:"budget,omitempty"`
	CampaignID                 *string                       `json:"campaignId,omitempty"`
	ConversionCounting         *ConversionCountingConfig     `json:"conversionCounting,omitempty"`
	CreativeIds                []string                      `json:"creativeIds,omitempty"`
	DisplayName                *string                       `json:"displayName,omitempty"`
	EntityStatus               *LineItemEntityStatusEnum     `json:"entityStatus,omitempty"`
	ExcludeNewExchanges        *bool                         `json:"excludeNewExchanges,omitempty"`
	Flight                     *LineItemFlight               `json:"flight,omitempty"`
	FrequencyCap               *FrequencyCap                 `json:"frequencyCap,omitempty"`
	InsertionOrderID           *string                       `json:"insertionOrderId,omitempty"`
	IntegrationDetails         *IntegrationDetails           `json:"integrationDetails,omitempty"`
	LineItemID                 *string                       `json:"lineItemId,omitempty"`
	LineItemType               *LineItemLineItemTypeEnum     `json:"lineItemType,omitempty"`
	MobileApp                  *MobileApp                    `json:"mobileApp,omitempty"`
	Name                       *string                       `json:"name,omitempty"`
	Pacing                     *Pacing                       `json:"pacing,omitempty"`
	PartnerCosts               []PartnerCost                 `json:"partnerCosts,omitempty"`
	PartnerRevenueModel        *PartnerRevenueModel          `json:"partnerRevenueModel,omitempty"`
	ReservationType            *LineItemReservationTypeEnum  `json:"reservationType,omitempty"`
	TargetingExpansion         *TargetingExpansionConfig     `json:"targetingExpansion,omitempty"`
	UpdateTime                 *string                       `json:"updateTime,omitempty"`
	WarningMessages            []LineItemWarningMessagesEnum `json:"warningMessages,omitempty"`
	YoutubeAndPartnersSettings *YoutubeAndPartnersSettings   `json:"youtubeAndPartnersSettings,omitempty"`
}
