import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { MeasurementPartnerWrappingData } from "./measurementpartnerwrappingdata";
import { PricingSchedule } from "./pricingschedule";
import { TagSetting } from "./tagsetting";
import { VideoSettings } from "./videosettings";


export enum PlacementCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum PlacementPaymentSourceEnum {
    PlacementAgencyPaid = "PLACEMENT_AGENCY_PAID",
    PlacementPublisherPaid = "PLACEMENT_PUBLISHER_PAID"
}

export enum PlacementStatusEnum {
    PendingReview = "PENDING_REVIEW",
    PaymentAccepted = "PAYMENT_ACCEPTED",
    PaymentRejected = "PAYMENT_REJECTED",
    AcknowledgeRejection = "ACKNOWLEDGE_REJECTION",
    AcknowledgeAcceptance = "ACKNOWLEDGE_ACCEPTANCE",
    Draft = "DRAFT"
}

export enum PlacementTagFormatsEnum {
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

export enum PlacementVpaidAdapterChoiceEnum {
    Default = "DEFAULT",
    Flash = "FLASH",
    Html5 = "HTML5",
    Both = "BOTH"
}


// Placement
/** 
 * Contains properties of a placement.
**/
export class Placement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=adBlockingOptOut" })
  adBlockingOptOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=additionalSizes", elemType: Size })
  additionalSizes?: Size[];

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignIdDimensionValue" })
  campaignIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibility" })
  compatibility?: PlacementCompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=contentCategoryId" })
  contentCategoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=createInfo" })
  createInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=directorySiteId" })
  directorySiteId?: string;

  @SpeakeasyMetadata({ data: "json, name=directorySiteIdDimensionValue" })
  directorySiteIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=keyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=lookbackConfiguration" })
  lookbackConfiguration?: LookbackConfiguration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerWrappingData" })
  partnerWrappingData?: MeasurementPartnerWrappingData;

  @SpeakeasyMetadata({ data: "json, name=paymentApproved" })
  paymentApproved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paymentSource" })
  paymentSource?: PlacementPaymentSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=placementGroupId" })
  placementGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=placementGroupIdDimensionValue" })
  placementGroupIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=placementStrategyId" })
  placementStrategyId?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingSchedule" })
  pricingSchedule?: PricingSchedule;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publisherUpdateInfo" })
  publisherUpdateInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=siteId" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=siteIdDimensionValue" })
  siteIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=sslRequired" })
  sslRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PlacementStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagFormats" })
  tagFormats?: PlacementTagFormatsEnum[];

  @SpeakeasyMetadata({ data: "json, name=tagSetting" })
  tagSetting?: TagSetting;

  @SpeakeasyMetadata({ data: "json, name=videoActiveViewOptOut" })
  videoActiveViewOptOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=videoSettings" })
  videoSettings?: VideoSettings;

  @SpeakeasyMetadata({ data: "json, name=vpaidAdapterChoice" })
  vpaidAdapterChoice?: PlacementVpaidAdapterChoiceEnum;

  @SpeakeasyMetadata({ data: "json, name=wrappingOptOut" })
  wrappingOptOut?: boolean;
}
