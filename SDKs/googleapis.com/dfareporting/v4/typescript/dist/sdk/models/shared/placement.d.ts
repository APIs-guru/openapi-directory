import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { MeasurementPartnerWrappingData } from "./measurementpartnerwrappingdata";
import { PricingSchedule } from "./pricingschedule";
import { TagSetting } from "./tagsetting";
import { VideoSettings } from "./videosettings";
export declare enum PlacementActiveStatusEnum {
    PlacementStatusUnknown = "PLACEMENT_STATUS_UNKNOWN",
    PlacementStatusActive = "PLACEMENT_STATUS_ACTIVE",
    PlacementStatusInactive = "PLACEMENT_STATUS_INACTIVE",
    PlacementStatusArchived = "PLACEMENT_STATUS_ARCHIVED",
    PlacementStatusPermanentlyArchived = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
}
export declare enum PlacementCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
export declare enum PlacementPaymentSourceEnum {
    PlacementAgencyPaid = "PLACEMENT_AGENCY_PAID",
    PlacementPublisherPaid = "PLACEMENT_PUBLISHER_PAID"
}
export declare enum PlacementStatusEnum {
    PendingReview = "PENDING_REVIEW",
    PaymentAccepted = "PAYMENT_ACCEPTED",
    PaymentRejected = "PAYMENT_REJECTED",
    AcknowledgeRejection = "ACKNOWLEDGE_REJECTION",
    AcknowledgeAcceptance = "ACKNOWLEDGE_ACCEPTANCE",
    Draft = "DRAFT"
}
export declare enum PlacementTagFormatsEnum {
    PlacementTagStandard = "PLACEMENT_TAG_STANDARD",
    PlacementTagIframeJavascript = "PLACEMENT_TAG_IFRAME_JAVASCRIPT",
    PlacementTagIframeIlayer = "PLACEMENT_TAG_IFRAME_ILAYER",
    PlacementTagInternalRedirect = "PLACEMENT_TAG_INTERNAL_REDIRECT",
    PlacementTagJavascript = "PLACEMENT_TAG_JAVASCRIPT",
    PlacementTagInterstitialIframeJavascript = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT",
    PlacementTagInterstitialInternalRedirect = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT",
    PlacementTagInterstitialJavascript = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT",
    PlacementTagClickCommands = "PLACEMENT_TAG_CLICK_COMMANDS",
    PlacementTagInstreamVideoPrefetch = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH",
    PlacementTagTracking = "PLACEMENT_TAG_TRACKING",
    PlacementTagTrackingIframe = "PLACEMENT_TAG_TRACKING_IFRAME",
    PlacementTagTrackingJavascript = "PLACEMENT_TAG_TRACKING_JAVASCRIPT",
    PlacementTagInstreamVideoPrefetchVast3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3",
    PlacementTagIframeJavascriptLegacy = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY",
    PlacementTagJavascriptLegacy = "PLACEMENT_TAG_JAVASCRIPT_LEGACY",
    PlacementTagInterstitialIframeJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY",
    PlacementTagInterstitialJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY",
    PlacementTagInstreamVideoPrefetchVast4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4",
    PlacementTagTrackingThirdPartyMeasurement = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
}
export declare enum PlacementVpaidAdapterChoiceEnum {
    Default = "DEFAULT",
    Flash = "FLASH",
    Html5 = "HTML5",
    Both = "BOTH"
}
/**
 * Contains properties of a placement.
**/
export declare class Placement extends SpeakeasyBase {
    accountId?: string;
    activeStatus?: PlacementActiveStatusEnum;
    adBlockingOptOut?: boolean;
    additionalSizes?: Size[];
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    campaignId?: string;
    campaignIdDimensionValue?: DimensionValue;
    comment?: string;
    compatibility?: PlacementCompatibilityEnum;
    contentCategoryId?: string;
    createInfo?: LastModifiedInfo;
    directorySiteId?: string;
    directorySiteIdDimensionValue?: DimensionValue;
    externalId?: string;
    id?: string;
    idDimensionValue?: DimensionValue;
    keyName?: string;
    kind?: string;
    lastModifiedInfo?: LastModifiedInfo;
    lookbackConfiguration?: LookbackConfiguration;
    name?: string;
    partnerWrappingData?: MeasurementPartnerWrappingData;
    paymentApproved?: boolean;
    paymentSource?: PlacementPaymentSourceEnum;
    placementGroupId?: string;
    placementGroupIdDimensionValue?: DimensionValue;
    placementStrategyId?: string;
    pricingSchedule?: PricingSchedule;
    primary?: boolean;
    publisherUpdateInfo?: LastModifiedInfo;
    siteId?: string;
    siteIdDimensionValue?: DimensionValue;
    size?: Size;
    sslRequired?: boolean;
    status?: PlacementStatusEnum;
    subaccountId?: string;
    tagFormats?: PlacementTagFormatsEnum[];
    tagSetting?: TagSetting;
    videoActiveViewOptOut?: boolean;
    videoSettings?: VideoSettings;
    vpaidAdapterChoice?: PlacementVpaidAdapterChoiceEnum;
    wrappingOptOut?: boolean;
}
