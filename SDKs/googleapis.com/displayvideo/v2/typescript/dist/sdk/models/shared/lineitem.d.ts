import { SpeakeasyBase } from "../../../internal/utils";
import { BiddingStrategy } from "./biddingstrategy";
import { LineItemBudgetInput } from "./lineitembudget";
import { ConversionCountingConfig } from "./conversioncountingconfig";
import { LineItemFlight } from "./lineitemflight";
import { FrequencyCap } from "./frequencycap";
import { IntegrationDetails } from "./integrationdetails";
import { MobileAppInput } from "./mobileapp";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PartnerRevenueModel } from "./partnerrevenuemodel";
import { TargetingExpansionConfig } from "./targetingexpansionconfig";
import { YoutubeAndPartnersSettings } from "./youtubeandpartnerssettings";
import { LineItemBudget } from "./lineitembudget";
import { MobileApp } from "./mobileapp";
export declare enum LineItemEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
export declare enum LineItemLineItemTypeEnum {
    LineItemTypeUnspecified = "LINE_ITEM_TYPE_UNSPECIFIED",
    LineItemTypeDisplayDefault = "LINE_ITEM_TYPE_DISPLAY_DEFAULT",
    LineItemTypeDisplayMobileAppInstall = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL",
    LineItemTypeVideoDefault = "LINE_ITEM_TYPE_VIDEO_DEFAULT",
    LineItemTypeVideoMobileAppInstall = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL",
    LineItemTypeDisplayMobileAppInventory = "LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY",
    LineItemTypeVideoMobileAppInventory = "LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY",
    LineItemTypeAudioDefault = "LINE_ITEM_TYPE_AUDIO_DEFAULT",
    LineItemTypeVideoOverTheTop = "LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP",
    LineItemTypeYoutubeAndPartnersAction = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION",
    LineItemTypeYoutubeAndPartnersNonSkippable = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE",
    LineItemTypeYoutubeAndPartnersVideoSequence = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE",
    LineItemTypeYoutubeAndPartnersAudio = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO",
    LineItemTypeYoutubeAndPartnersReach = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH",
    LineItemTypeYoutubeAndPartnersSimple = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE",
    LineItemTypeYoutubeAndPartnersNonSkippableOverTheTop = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP",
    LineItemTypeYoutubeAndPartnersReachOverTheTop = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP",
    LineItemTypeYoutubeAndPartnersSimpleOverTheTop = "LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP"
}
export declare enum LineItemReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    ReservationTypeNotGuaranteed = "RESERVATION_TYPE_NOT_GUARANTEED",
    ReservationTypeProgrammaticGuaranteed = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED",
    ReservationTypeTagGuaranteed = "RESERVATION_TYPE_TAG_GUARANTEED",
    ReservationTypePetraViral = "RESERVATION_TYPE_PETRA_VIRAL",
    ReservationTypeInstantReserve = "RESERVATION_TYPE_INSTANT_RESERVE"
}
export declare enum LineItemWarningMessagesEnum {
    LineItemWarningMessageUnspecified = "LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED",
    InvalidFlightDates = "INVALID_FLIGHT_DATES",
    Expired = "EXPIRED",
    PendingFlight = "PENDING_FLIGHT",
    AllPartnerEnabledExchangesNegativelyTargeted = "ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED",
    InvalidInventorySource = "INVALID_INVENTORY_SOURCE",
    AppInventoryInvalidSiteTargeting = "APP_INVENTORY_INVALID_SITE_TARGETING",
    AppInventoryInvalidAudienceLists = "APP_INVENTORY_INVALID_AUDIENCE_LISTS",
    NoValidCreative = "NO_VALID_CREATIVE",
    ParentInsertionOrderPaused = "PARENT_INSERTION_ORDER_PAUSED",
    ParentInsertionOrderExpired = "PARENT_INSERTION_ORDER_EXPIRED"
}
/**
 * A single line item.
**/
export declare class LineItemInput extends SpeakeasyBase {
    bidStrategy?: BiddingStrategy;
    budget?: LineItemBudgetInput;
    conversionCounting?: ConversionCountingConfig;
    creativeIds?: string[];
    displayName?: string;
    entityStatus?: LineItemEntityStatusEnum;
    excludeNewExchanges?: boolean;
    flight?: LineItemFlight;
    frequencyCap?: FrequencyCap;
    insertionOrderId?: string;
    integrationDetails?: IntegrationDetails;
    lineItemType?: LineItemLineItemTypeEnum;
    mobileApp?: MobileAppInput;
    pacing?: Pacing;
    partnerCosts?: PartnerCost[];
    partnerRevenueModel?: PartnerRevenueModel;
    targetingExpansion?: TargetingExpansionConfig;
    youtubeAndPartnersSettings?: YoutubeAndPartnersSettings;
}
/**
 * A single line item.
**/
export declare class LineItem extends SpeakeasyBase {
    advertiserId?: string;
    bidStrategy?: BiddingStrategy;
    budget?: LineItemBudget;
    campaignId?: string;
    conversionCounting?: ConversionCountingConfig;
    creativeIds?: string[];
    displayName?: string;
    entityStatus?: LineItemEntityStatusEnum;
    excludeNewExchanges?: boolean;
    flight?: LineItemFlight;
    frequencyCap?: FrequencyCap;
    insertionOrderId?: string;
    integrationDetails?: IntegrationDetails;
    lineItemId?: string;
    lineItemType?: LineItemLineItemTypeEnum;
    mobileApp?: MobileApp;
    name?: string;
    pacing?: Pacing;
    partnerCosts?: PartnerCost[];
    partnerRevenueModel?: PartnerRevenueModel;
    reservationType?: LineItemReservationTypeEnum;
    targetingExpansion?: TargetingExpansionConfig;
    updateTime?: string;
    warningMessages?: LineItemWarningMessagesEnum[];
    youtubeAndPartnersSettings?: YoutubeAndPartnersSettings;
}
