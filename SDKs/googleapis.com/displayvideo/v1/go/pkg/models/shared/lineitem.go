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
	LineItemLineItemTypeEnumLineItemTypeUnspecified               LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_UNSPECIFIED"
	LineItemLineItemTypeEnumLineItemTypeDisplayDefault            LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_DISPLAY_DEFAULT"
	LineItemLineItemTypeEnumLineItemTypeDisplayMobileAppInstall   LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL"
	LineItemLineItemTypeEnumLineItemTypeVideoDefault              LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_VIDEO_DEFAULT"
	LineItemLineItemTypeEnumLineItemTypeVideoMobileAppInstall     LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL"
	LineItemLineItemTypeEnumLineItemTypeDisplayMobileAppInventory LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY"
	LineItemLineItemTypeEnumLineItemTypeVideoMobileAppInventory   LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY"
	LineItemLineItemTypeEnumLineItemTypeAudioDefault              LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_AUDIO_DEFAULT"
	LineItemLineItemTypeEnumLineItemTypeVideoOverTheTop           LineItemLineItemTypeEnum = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP"
)

type LineItemReservationTypeEnum string

const (
	LineItemReservationTypeEnumReservationTypeUnspecified            LineItemReservationTypeEnum = "RESERVATION_TYPE_UNSPECIFIED"
	LineItemReservationTypeEnumReservationTypeNotGuaranteed          LineItemReservationTypeEnum = "RESERVATION_TYPE_NOT_GUARANTEED"
	LineItemReservationTypeEnumReservationTypeProgrammaticGuaranteed LineItemReservationTypeEnum = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"
	LineItemReservationTypeEnumReservationTypeTagGuaranteed          LineItemReservationTypeEnum = "RESERVATION_TYPE_TAG_GUARANTEED"
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
	LineItemWarningMessagesEnumNoPositiveAudienceListTargeted               LineItemWarningMessagesEnum = "NO_POSITIVE_AUDIENCE_LIST_TARGETED"
	LineItemWarningMessagesEnumAppInstallNoConversionPixel                  LineItemWarningMessagesEnum = "APP_INSTALL_NO_CONVERSION_PIXEL"
	LineItemWarningMessagesEnumTargetingRevokedOrClosedUserList             LineItemWarningMessagesEnum = "TARGETING_REVOKED_OR_CLOSED_USER_LIST"
	LineItemWarningMessagesEnumAppInstallNoOptimalBiddingStrategy           LineItemWarningMessagesEnum = "APP_INSTALL_NO_OPTIMAL_BIDDING_STRATEGY"
	LineItemWarningMessagesEnumCreativeSizeNotInUseForTargetedDeals         LineItemWarningMessagesEnum = "CREATIVE_SIZE_NOT_IN_USE_FOR_TARGETED_DEALS"
	LineItemWarningMessagesEnumNoCreativeForTargetedDeals                   LineItemWarningMessagesEnum = "NO_CREATIVE_FOR_TARGETED_DEALS"
	LineItemWarningMessagesEnumTargetingDeprecatedGeoTarget                 LineItemWarningMessagesEnum = "TARGETING_DEPRECATED_GEO_TARGET"
)

type LineItem struct {
	AdvertiserID        *string                       `json:"advertiserId"`
	BidStrategy         *BiddingStrategy              `json:"bidStrategy"`
	Budget              *LineItemBudget               `json:"budget"`
	CampaignID          *string                       `json:"campaignId"`
	ConversionCounting  *ConversionCountingConfig     `json:"conversionCounting"`
	CreativeIds         []string                      `json:"creativeIds"`
	DisplayName         *string                       `json:"displayName"`
	EntityStatus        *LineItemEntityStatusEnum     `json:"entityStatus"`
	ExcludeNewExchanges *bool                         `json:"excludeNewExchanges"`
	Flight              *LineItemFlight               `json:"flight"`
	FrequencyCap        *FrequencyCap                 `json:"frequencyCap"`
	InsertionOrderID    *string                       `json:"insertionOrderId"`
	IntegrationDetails  *IntegrationDetails           `json:"integrationDetails"`
	InventorySourceIds  []string                      `json:"inventorySourceIds"`
	LineItemID          *string                       `json:"lineItemId"`
	LineItemType        *LineItemLineItemTypeEnum     `json:"lineItemType"`
	MobileApp           *MobileApp                    `json:"mobileApp"`
	Name                *string                       `json:"name"`
	Pacing              *Pacing                       `json:"pacing"`
	PartnerCosts        []PartnerCost                 `json:"partnerCosts"`
	PartnerRevenueModel *PartnerRevenueModel          `json:"partnerRevenueModel"`
	ReservationType     *LineItemReservationTypeEnum  `json:"reservationType"`
	TargetingExpansion  *TargetingExpansionConfig     `json:"targetingExpansion"`
	UpdateTime          *string                       `json:"updateTime"`
	WarningMessages     []LineItemWarningMessagesEnum `json:"warningMessages"`
}
