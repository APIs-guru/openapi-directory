import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BiddingStrategy } from "./biddingstrategy";
import { LineItemBudget } from "./lineitembudget";
import { ConversionCountingConfig } from "./conversioncountingconfig";
import { LineItemFlight } from "./lineitemflight";
import { FrequencyCap } from "./frequencycap";
import { IntegrationDetails } from "./integrationdetails";
import { MobileApp } from "./mobileapp";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PartnerRevenueModel } from "./partnerrevenuemodel";
import { TargetingExpansionConfig } from "./targetingexpansionconfig";

export enum LineItemEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}

export enum LineItemLineItemTypeEnum {
    LineItemTypeUnspecified = "LINE_ITEM_TYPE_UNSPECIFIED"
,    LineItemTypeDisplayDefault = "LINE_ITEM_TYPE_DISPLAY_DEFAULT"
,    LineItemTypeDisplayMobileAppInstall = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL"
,    LineItemTypeVideoDefault = "LINE_ITEM_TYPE_VIDEO_DEFAULT"
,    LineItemTypeVideoMobileAppInstall = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL"
,    LineItemTypeDisplayMobileAppInventory = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY"
,    LineItemTypeVideoMobileAppInventory = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY"
,    LineItemTypeAudioDefault = "LINE_ITEM_TYPE_AUDIO_DEFAULT"
,    LineItemTypeVideoOverTheTop = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP"
}

export enum LineItemReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED"
,    ReservationTypeNotGuaranteed = "RESERVATION_TYPE_NOT_GUARANTEED"
,    ReservationTypeProgrammaticGuaranteed = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED"
,    ReservationTypeTagGuaranteed = "RESERVATION_TYPE_TAG_GUARANTEED"
}

export enum LineItemWarningMessagesEnum {
    LineItemWarningMessageUnspecified = "LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED"
,    InvalidFlightDates = "INVALID_FLIGHT_DATES"
,    Expired = "EXPIRED"
,    PendingFlight = "PENDING_FLIGHT"
,    AllPartnerEnabledExchangesNegativelyTargeted = "ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED"
,    InvalidInventorySource = "INVALID_INVENTORY_SOURCE"
,    AppInventoryInvalidSiteTargeting = "APP_INVENTORY_INVALID_SITE_TARGETING"
,    AppInventoryInvalidAudienceLists = "APP_INVENTORY_INVALID_AUDIENCE_LISTS"
,    NoValidCreative = "NO_VALID_CREATIVE"
,    ParentInsertionOrderPaused = "PARENT_INSERTION_ORDER_PAUSED"
,    ParentInsertionOrderExpired = "PARENT_INSERTION_ORDER_EXPIRED"
,    NoPositiveAudienceListTargeted = "NO_POSITIVE_AUDIENCE_LIST_TARGETED"
,    AppInstallNoConversionPixel = "APP_INSTALL_NO_CONVERSION_PIXEL"
,    TargetingRevokedOrClosedUserList = "TARGETING_REVOKED_OR_CLOSED_USER_LIST"
,    AppInstallNoOptimalBiddingStrategy = "APP_INSTALL_NO_OPTIMAL_BIDDING_STRATEGY"
,    CreativeSizeNotInUseForTargetedDeals = "CREATIVE_SIZE_NOT_IN_USE_FOR_TARGETED_DEALS"
,    NoCreativeForTargetedDeals = "NO_CREATIVE_FOR_TARGETED_DEALS"
,    TargetingDeprecatedGeoTarget = "TARGETING_DEPRECATED_GEO_TARGET"
}


// LineItem
/** 
 * A single line item.
**/
export class LineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=bidStrategy" })
  bidStrategy?: BiddingStrategy;

  @Metadata({ data: "json, name=budget" })
  budget?: LineItemBudget;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=conversionCounting" })
  conversionCounting?: ConversionCountingConfig;

  @Metadata({ data: "json, name=creativeIds" })
  creativeIds?: string[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: LineItemEntityStatusEnum;

  @Metadata({ data: "json, name=excludeNewExchanges" })
  excludeNewExchanges?: boolean;

  @Metadata({ data: "json, name=flight" })
  flight?: LineItemFlight;

  @Metadata({ data: "json, name=frequencyCap" })
  frequencyCap?: FrequencyCap;

  @Metadata({ data: "json, name=insertionOrderId" })
  insertionOrderId?: string;

  @Metadata({ data: "json, name=integrationDetails" })
  integrationDetails?: IntegrationDetails;

  @Metadata({ data: "json, name=inventorySourceIds" })
  inventorySourceIds?: string[];

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=lineItemType" })
  lineItemType?: LineItemLineItemTypeEnum;

  @Metadata({ data: "json, name=mobileApp" })
  mobileApp?: MobileApp;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pacing" })
  pacing?: Pacing;

  @Metadata({ data: "json, name=partnerCosts", elemType: shared.PartnerCost })
  partnerCosts?: PartnerCost[];

  @Metadata({ data: "json, name=partnerRevenueModel" })
  partnerRevenueModel?: PartnerRevenueModel;

  @Metadata({ data: "json, name=reservationType" })
  reservationType?: LineItemReservationTypeEnum;

  @Metadata({ data: "json, name=targetingExpansion" })
  targetingExpansion?: TargetingExpansionConfig;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=warningMessages" })
  warningMessages?: LineItemWarningMessagesEnum[];
}
