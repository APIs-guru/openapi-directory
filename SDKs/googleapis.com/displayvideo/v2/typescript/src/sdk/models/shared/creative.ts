import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
import { AssetAssociation } from "./assetassociation";
import { CmTrackingAd } from "./cmtrackingad";
import { CounterEvent } from "./counterevent";
import { ExitEvent } from "./exitevent";
import { ObaIcon } from "./obaicon";
import { AudioVideoOffset } from "./audiovideooffset";
import { ReviewStatusInfo } from "./reviewstatusinfo";
import { ThirdPartyUrl } from "./thirdpartyurl";
import { TimerEvent } from "./timerevent";
import { UniversalAdId } from "./universaladid";
import { Transcode } from "./transcode";


export enum CreativeCreativeAttributesEnum {
    CreativeAttributeUnspecified = "CREATIVE_ATTRIBUTE_UNSPECIFIED",
    CreativeAttributeVast = "CREATIVE_ATTRIBUTE_VAST",
    CreativeAttributeVpaidLinear = "CREATIVE_ATTRIBUTE_VPAID_LINEAR",
    CreativeAttributeVpaidNonLinear = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR"
}

export enum CreativeCreativeTypeEnum {
    CreativeTypeUnspecified = "CREATIVE_TYPE_UNSPECIFIED",
    CreativeTypeStandard = "CREATIVE_TYPE_STANDARD",
    CreativeTypeExpandable = "CREATIVE_TYPE_EXPANDABLE",
    CreativeTypeVideo = "CREATIVE_TYPE_VIDEO",
    CreativeTypeNative = "CREATIVE_TYPE_NATIVE",
    CreativeTypeTemplatedAppInstall = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL",
    CreativeTypeNativeSiteSquare = "CREATIVE_TYPE_NATIVE_SITE_SQUARE",
    CreativeTypeTemplatedAppInstallInterstitial = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL",
    CreativeTypeLightbox = "CREATIVE_TYPE_LIGHTBOX",
    CreativeTypeNativeAppInstall = "CREATIVE_TYPE_NATIVE_APP_INSTALL",
    CreativeTypeNativeAppInstallSquare = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE",
    CreativeTypeAudio = "CREATIVE_TYPE_AUDIO",
    CreativeTypePublisherHosted = "CREATIVE_TYPE_PUBLISHER_HOSTED",
    CreativeTypeNativeVideo = "CREATIVE_TYPE_NATIVE_VIDEO",
    CreativeTypeTemplatedAppInstallVideo = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"
}

export enum CreativeEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}

export enum CreativeExpandingDirectionEnum {
    ExpandingDirectionUnspecified = "EXPANDING_DIRECTION_UNSPECIFIED",
    ExpandingDirectionNone = "EXPANDING_DIRECTION_NONE",
    ExpandingDirectionUp = "EXPANDING_DIRECTION_UP",
    ExpandingDirectionDown = "EXPANDING_DIRECTION_DOWN",
    ExpandingDirectionLeft = "EXPANDING_DIRECTION_LEFT",
    ExpandingDirectionRight = "EXPANDING_DIRECTION_RIGHT",
    ExpandingDirectionUpAndLeft = "EXPANDING_DIRECTION_UP_AND_LEFT",
    ExpandingDirectionUpAndRight = "EXPANDING_DIRECTION_UP_AND_RIGHT",
    ExpandingDirectionDownAndLeft = "EXPANDING_DIRECTION_DOWN_AND_LEFT",
    ExpandingDirectionDownAndRight = "EXPANDING_DIRECTION_DOWN_AND_RIGHT",
    ExpandingDirectionUpOrDown = "EXPANDING_DIRECTION_UP_OR_DOWN",
    ExpandingDirectionLeftOrRight = "EXPANDING_DIRECTION_LEFT_OR_RIGHT",
    ExpandingDirectionAnyDiagonal = "EXPANDING_DIRECTION_ANY_DIAGONAL"
}

export enum CreativeHostingSourceEnum {
    HostingSourceUnspecified = "HOSTING_SOURCE_UNSPECIFIED",
    HostingSourceCm = "HOSTING_SOURCE_CM",
    HostingSourceThirdParty = "HOSTING_SOURCE_THIRD_PARTY",
    HostingSourceHosted = "HOSTING_SOURCE_HOSTED",
    HostingSourceRichMedia = "HOSTING_SOURCE_RICH_MEDIA"
}


// CreativeInput
/** 
 * A single Creative.
**/
export class CreativeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalDimensions", elemType: Dimensions })
  additionalDimensions?: Dimensions[];

  @SpeakeasyMetadata({ data: "json, name=appendedTag" })
  appendedTag?: string;

  @SpeakeasyMetadata({ data: "json, name=assets", elemType: AssetAssociation })
  assets?: AssetAssociation[];

  @SpeakeasyMetadata({ data: "json, name=cmTrackingAd" })
  cmTrackingAd?: CmTrackingAd;

  @SpeakeasyMetadata({ data: "json, name=companionCreativeIds" })
  companionCreativeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=counterEvents", elemType: CounterEvent })
  counterEvents?: CounterEvent[];

  @SpeakeasyMetadata({ data: "json, name=creativeType" })
  creativeType?: CreativeCreativeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: CreativeEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=exitEvents", elemType: ExitEvent })
  exitEvents?: ExitEvent[];

  @SpeakeasyMetadata({ data: "json, name=expandOnHover" })
  expandOnHover?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expandingDirection" })
  expandingDirection?: CreativeExpandingDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=hostingSource" })
  hostingSource?: CreativeHostingSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=iasCampaignMonitoring" })
  iasCampaignMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=integrationCode" })
  integrationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=jsTrackerUrl" })
  jsTrackerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=obaIcon" })
  obaIcon?: ObaIcon;

  @SpeakeasyMetadata({ data: "json, name=progressOffset" })
  progressOffset?: AudioVideoOffset;

  @SpeakeasyMetadata({ data: "json, name=requireHtml5" })
  requireHtml5?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requireMraid" })
  requireMraid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requirePingForAttribution" })
  requirePingForAttribution?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reviewStatus" })
  reviewStatus?: ReviewStatusInfo;

  @SpeakeasyMetadata({ data: "json, name=skipOffset" })
  skipOffset?: AudioVideoOffset;

  @SpeakeasyMetadata({ data: "json, name=skippable" })
  skippable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyTag" })
  thirdPartyTag?: string;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyUrls", elemType: ThirdPartyUrl })
  thirdPartyUrls?: ThirdPartyUrl[];

  @SpeakeasyMetadata({ data: "json, name=timerEvents", elemType: TimerEvent })
  timerEvents?: TimerEvent[];

  @SpeakeasyMetadata({ data: "json, name=trackerUrls" })
  trackerUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=universalAdId" })
  universalAdId?: UniversalAdId;

  @SpeakeasyMetadata({ data: "json, name=vastTagUrl" })
  vastTagUrl?: string;
}


// Creative
/** 
 * A single Creative.
**/
export class Creative extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalDimensions", elemType: Dimensions })
  additionalDimensions?: Dimensions[];

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=appendedTag" })
  appendedTag?: string;

  @SpeakeasyMetadata({ data: "json, name=assets", elemType: AssetAssociation })
  assets?: AssetAssociation[];

  @SpeakeasyMetadata({ data: "json, name=cmPlacementId" })
  cmPlacementId?: string;

  @SpeakeasyMetadata({ data: "json, name=cmTrackingAd" })
  cmTrackingAd?: CmTrackingAd;

  @SpeakeasyMetadata({ data: "json, name=companionCreativeIds" })
  companionCreativeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=counterEvents", elemType: CounterEvent })
  counterEvents?: CounterEvent[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeAttributes" })
  creativeAttributes?: CreativeCreativeAttributesEnum[];

  @SpeakeasyMetadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeType" })
  creativeType?: CreativeCreativeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamic" })
  dynamic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entityStatus" })
  entityStatus?: CreativeEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=exitEvents", elemType: ExitEvent })
  exitEvents?: ExitEvent[];

  @SpeakeasyMetadata({ data: "json, name=expandOnHover" })
  expandOnHover?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expandingDirection" })
  expandingDirection?: CreativeExpandingDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=hostingSource" })
  hostingSource?: CreativeHostingSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=html5Video" })
  html5Video?: boolean;

  @SpeakeasyMetadata({ data: "json, name=iasCampaignMonitoring" })
  iasCampaignMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=integrationCode" })
  integrationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=jsTrackerUrl" })
  jsTrackerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItemIds" })
  lineItemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=mediaDuration" })
  mediaDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=mp3Audio" })
  mp3Audio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=obaIcon" })
  obaIcon?: ObaIcon;

  @SpeakeasyMetadata({ data: "json, name=oggAudio" })
  oggAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=progressOffset" })
  progressOffset?: AudioVideoOffset;

  @SpeakeasyMetadata({ data: "json, name=requireHtml5" })
  requireHtml5?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requireMraid" })
  requireMraid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requirePingForAttribution" })
  requirePingForAttribution?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reviewStatus" })
  reviewStatus?: ReviewStatusInfo;

  @SpeakeasyMetadata({ data: "json, name=skipOffset" })
  skipOffset?: AudioVideoOffset;

  @SpeakeasyMetadata({ data: "json, name=skippable" })
  skippable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyTag" })
  thirdPartyTag?: string;

  @SpeakeasyMetadata({ data: "json, name=thirdPartyUrls", elemType: ThirdPartyUrl })
  thirdPartyUrls?: ThirdPartyUrl[];

  @SpeakeasyMetadata({ data: "json, name=timerEvents", elemType: TimerEvent })
  timerEvents?: TimerEvent[];

  @SpeakeasyMetadata({ data: "json, name=trackerUrls" })
  trackerUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=transcodes", elemType: Transcode })
  transcodes?: Transcode[];

  @SpeakeasyMetadata({ data: "json, name=universalAdId" })
  universalAdId?: UniversalAdId;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vastTagUrl" })
  vastTagUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=vpaid" })
  vpaid?: boolean;
}
