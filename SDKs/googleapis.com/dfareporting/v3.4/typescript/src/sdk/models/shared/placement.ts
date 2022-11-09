import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Size } from "./size";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { LookbackConfiguration } from "./lookbackconfiguration";
import { DimensionValue } from "./dimensionvalue";
import { PricingSchedule } from "./pricingschedule";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { DimensionValue } from "./dimensionvalue";
import { Size } from "./size";
import { TagSetting } from "./tagsetting";
import { VideoSettings } from "./videosettings";

export enum PlacementCompatibilityEnum {
    Display = "DISPLAY"
,    DisplayInterstitial = "DISPLAY_INTERSTITIAL"
,    App = "APP"
,    AppInterstitial = "APP_INTERSTITIAL"
,    InStreamVideo = "IN_STREAM_VIDEO"
,    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum PlacementPaymentSourceEnum {
    PlacementAgencyPaid = "PLACEMENT_AGENCY_PAID"
,    PlacementPublisherPaid = "PLACEMENT_PUBLISHER_PAID"
}

export enum PlacementStatusEnum {
    PendingReview = "PENDING_REVIEW"
,    PaymentAccepted = "PAYMENT_ACCEPTED"
,    PaymentRejected = "PAYMENT_REJECTED"
,    AcknowledgeRejection = "ACKNOWLEDGE_REJECTION"
,    AcknowledgeAcceptance = "ACKNOWLEDGE_ACCEPTANCE"
,    Draft = "DRAFT"
}

export enum PlacementTagFormatsEnum {
    PlacementTagStandard = "PLACEMENT_TAG_STANDARD"
,    PlacementTagIframeJavascript = "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
,    PlacementTagIframeIlayer = "PLACEMENT_TAG_IFRAME_ILAYER"
,    PlacementTagInternalRedirect = "PLACEMENT_TAG_INTERNAL_REDIRECT"
,    PlacementTagJavascript = "PLACEMENT_TAG_JAVASCRIPT"
,    PlacementTagInterstitialIframeJavascript = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
,    PlacementTagInterstitialInternalRedirect = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
,    PlacementTagInterstitialJavascript = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
,    PlacementTagClickCommands = "PLACEMENT_TAG_CLICK_COMMANDS"
,    PlacementTagInstreamVideoPrefetch = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
,    PlacementTagTracking = "PLACEMENT_TAG_TRACKING"
,    PlacementTagTrackingIframe = "PLACEMENT_TAG_TRACKING_IFRAME"
,    PlacementTagTrackingJavascript = "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
,    PlacementTagInstreamVideoPrefetchVast3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
,    PlacementTagIframeJavascriptLegacy = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
,    PlacementTagJavascriptLegacy = "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
,    PlacementTagInterstitialIframeJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
,    PlacementTagInterstitialJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
,    PlacementTagInstreamVideoPrefetchVast4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
,    PlacementTagTrackingThirdPartyMeasurement = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
}

export enum PlacementVpaidAdapterChoiceEnum {
    Default = "DEFAULT"
,    Flash = "FLASH"
,    Html5 = "HTML5"
,    Both = "BOTH"
}


// Placement
/** 
 * Contains properties of a placement.
**/
export class Placement extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=adBlockingOptOut" })
  adBlockingOptOut?: boolean;

  @Metadata({ data: "json, name=additionalSizes", elemType: shared.Size })
  additionalSizes?: Size[];

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=campaignIdDimensionValue" })
  campaignIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=compatibility" })
  compatibility?: PlacementCompatibilityEnum;

  @Metadata({ data: "json, name=contentCategoryId" })
  contentCategoryId?: string;

  @Metadata({ data: "json, name=createInfo" })
  createInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=directorySiteId" })
  directorySiteId?: string;

  @Metadata({ data: "json, name=directorySiteIdDimensionValue" })
  directorySiteIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=keyName" })
  keyName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=lookbackConfiguration" })
  lookbackConfiguration?: LookbackConfiguration;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=paymentApproved" })
  paymentApproved?: boolean;

  @Metadata({ data: "json, name=paymentSource" })
  paymentSource?: PlacementPaymentSourceEnum;

  @Metadata({ data: "json, name=placementGroupId" })
  placementGroupId?: string;

  @Metadata({ data: "json, name=placementGroupIdDimensionValue" })
  placementGroupIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=placementStrategyId" })
  placementStrategyId?: string;

  @Metadata({ data: "json, name=pricingSchedule" })
  pricingSchedule?: PricingSchedule;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=publisherUpdateInfo" })
  publisherUpdateInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=siteId" })
  siteId?: string;

  @Metadata({ data: "json, name=siteIdDimensionValue" })
  siteIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=size" })
  size?: Size;

  @Metadata({ data: "json, name=sslRequired" })
  sslRequired?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: PlacementStatusEnum;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=tagFormats" })
  tagFormats?: PlacementTagFormatsEnum[];

  @Metadata({ data: "json, name=tagSetting" })
  tagSetting?: TagSetting;

  @Metadata({ data: "json, name=videoActiveViewOptOut" })
  videoActiveViewOptOut?: boolean;

  @Metadata({ data: "json, name=videoSettings" })
  videoSettings?: VideoSettings;

  @Metadata({ data: "json, name=vpaidAdapterChoice" })
  vpaidAdapterChoice?: PlacementVpaidAdapterChoiceEnum;
}
