import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Dimensions } from "./dimensions";
import { AssetAssociation } from "./assetassociation";
import { CmTrackingAd } from "./cmtrackingad";
import { CounterEvent } from "./counterevent";
import { Dimensions } from "./dimensions";
import { ExitEvent } from "./exitevent";
import { ObaIcon } from "./obaicon";
import { AudioVideoOffset } from "./audiovideooffset";
import { ReviewStatusInfo } from "./reviewstatusinfo";
import { AudioVideoOffset } from "./audiovideooffset";
import { ThirdPartyUrl } from "./thirdpartyurl";
import { TimerEvent } from "./timerevent";
import { Transcode } from "./transcode";
import { UniversalAdId } from "./universaladid";

export enum CreativeCreativeAttributesEnum {
    CreativeAttributeUnspecified = "CREATIVE_ATTRIBUTE_UNSPECIFIED"
,    CreativeAttributeVast = "CREATIVE_ATTRIBUTE_VAST"
,    CreativeAttributeVpaidLinear = "CREATIVE_ATTRIBUTE_VPAID_LINEAR"
,    CreativeAttributeVpaidNonLinear = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR"
}

export enum CreativeCreativeTypeEnum {
    CreativeTypeUnspecified = "CREATIVE_TYPE_UNSPECIFIED"
,    CreativeTypeStandard = "CREATIVE_TYPE_STANDARD"
,    CreativeTypeExpandable = "CREATIVE_TYPE_EXPANDABLE"
,    CreativeTypeVideo = "CREATIVE_TYPE_VIDEO"
,    CreativeTypeNative = "CREATIVE_TYPE_NATIVE"
,    CreativeTypeTemplatedAppInstall = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL"
,    CreativeTypeNativeSiteSquare = "CREATIVE_TYPE_NATIVE_SITE_SQUARE"
,    CreativeTypeTemplatedAppInstallInterstitial = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL"
,    CreativeTypeLightbox = "CREATIVE_TYPE_LIGHTBOX"
,    CreativeTypeNativeAppInstall = "CREATIVE_TYPE_NATIVE_APP_INSTALL"
,    CreativeTypeNativeAppInstallSquare = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE"
,    CreativeTypeAudio = "CREATIVE_TYPE_AUDIO"
,    CreativeTypePublisherHosted = "CREATIVE_TYPE_PUBLISHER_HOSTED"
,    CreativeTypeNativeVideo = "CREATIVE_TYPE_NATIVE_VIDEO"
,    CreativeTypeTemplatedAppInstallVideo = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"
}

export enum CreativeEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED"
,    EntityStatusActive = "ENTITY_STATUS_ACTIVE"
,    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED"
,    EntityStatusDraft = "ENTITY_STATUS_DRAFT"
,    EntityStatusPaused = "ENTITY_STATUS_PAUSED"
,    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}

export enum CreativeExpandingDirectionEnum {
    ExpandingDirectionUnspecified = "EXPANDING_DIRECTION_UNSPECIFIED"
,    ExpandingDirectionNone = "EXPANDING_DIRECTION_NONE"
,    ExpandingDirectionUp = "EXPANDING_DIRECTION_UP"
,    ExpandingDirectionDown = "EXPANDING_DIRECTION_DOWN"
,    ExpandingDirectionLeft = "EXPANDING_DIRECTION_LEFT"
,    ExpandingDirectionRight = "EXPANDING_DIRECTION_RIGHT"
,    ExpandingDirectionUpAndLeft = "EXPANDING_DIRECTION_UP_AND_LEFT"
,    ExpandingDirectionUpAndRight = "EXPANDING_DIRECTION_UP_AND_RIGHT"
,    ExpandingDirectionDownAndLeft = "EXPANDING_DIRECTION_DOWN_AND_LEFT"
,    ExpandingDirectionDownAndRight = "EXPANDING_DIRECTION_DOWN_AND_RIGHT"
,    ExpandingDirectionUpOrDown = "EXPANDING_DIRECTION_UP_OR_DOWN"
,    ExpandingDirectionLeftOrRight = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
,    ExpandingDirectionAnyDiagonal = "EXPANDING_DIRECTION_ANY_DIAGONAL"
}

export enum CreativeHostingSourceEnum {
    HostingSourceUnspecified = "HOSTING_SOURCE_UNSPECIFIED"
,    HostingSourceCm = "HOSTING_SOURCE_CM"
,    HostingSourceThirdParty = "HOSTING_SOURCE_THIRD_PARTY"
,    HostingSourceHosted = "HOSTING_SOURCE_HOSTED"
,    HostingSourceRichMedia = "HOSTING_SOURCE_RICH_MEDIA"
}


// Creative
/** 
 * A single Creative.
**/
export class Creative extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalDimensions", elemType: shared.Dimensions })
  additionalDimensions?: Dimensions[];

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=appendedTag" })
  appendedTag?: string;

  @Metadata({ data: "json, name=assets", elemType: shared.AssetAssociation })
  assets?: AssetAssociation[];

  @Metadata({ data: "json, name=cmPlacementId" })
  cmPlacementId?: string;

  @Metadata({ data: "json, name=cmTrackingAd" })
  cmTrackingAd?: CmTrackingAd;

  @Metadata({ data: "json, name=companionCreativeIds" })
  companionCreativeIds?: string[];

  @Metadata({ data: "json, name=counterEvents", elemType: shared.CounterEvent })
  counterEvents?: CounterEvent[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creativeAttributes" })
  creativeAttributes?: CreativeCreativeAttributesEnum[];

  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @Metadata({ data: "json, name=creativeType" })
  creativeType?: CreativeCreativeTypeEnum;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=dynamic" })
  dynamic?: boolean;

  @Metadata({ data: "json, name=entityStatus" })
  entityStatus?: CreativeEntityStatusEnum;

  @Metadata({ data: "json, name=exitEvents", elemType: shared.ExitEvent })
  exitEvents?: ExitEvent[];

  @Metadata({ data: "json, name=expandOnHover" })
  expandOnHover?: boolean;

  @Metadata({ data: "json, name=expandingDirection" })
  expandingDirection?: CreativeExpandingDirectionEnum;

  @Metadata({ data: "json, name=hostingSource" })
  hostingSource?: CreativeHostingSourceEnum;

  @Metadata({ data: "json, name=html5Video" })
  html5Video?: boolean;

  @Metadata({ data: "json, name=iasCampaignMonitoring" })
  iasCampaignMonitoring?: boolean;

  @Metadata({ data: "json, name=integrationCode" })
  integrationCode?: string;

  @Metadata({ data: "json, name=jsTrackerUrl" })
  jsTrackerUrl?: string;

  @Metadata({ data: "json, name=lineItemIds" })
  lineItemIds?: string[];

  @Metadata({ data: "json, name=mediaDuration" })
  mediaDuration?: string;

  @Metadata({ data: "json, name=mp3Audio" })
  mp3Audio?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=obaIcon" })
  obaIcon?: ObaIcon;

  @Metadata({ data: "json, name=oggAudio" })
  oggAudio?: boolean;

  @Metadata({ data: "json, name=progressOffset" })
  progressOffset?: AudioVideoOffset;

  @Metadata({ data: "json, name=requireHtml5" })
  requireHtml5?: boolean;

  @Metadata({ data: "json, name=requireMraid" })
  requireMraid?: boolean;

  @Metadata({ data: "json, name=requirePingForAttribution" })
  requirePingForAttribution?: boolean;

  @Metadata({ data: "json, name=reviewStatus" })
  reviewStatus?: ReviewStatusInfo;

  @Metadata({ data: "json, name=skipOffset" })
  skipOffset?: AudioVideoOffset;

  @Metadata({ data: "json, name=skippable" })
  skippable?: boolean;

  @Metadata({ data: "json, name=thirdPartyTag" })
  thirdPartyTag?: string;

  @Metadata({ data: "json, name=thirdPartyUrls", elemType: shared.ThirdPartyUrl })
  thirdPartyUrls?: ThirdPartyUrl[];

  @Metadata({ data: "json, name=timerEvents", elemType: shared.TimerEvent })
  timerEvents?: TimerEvent[];

  @Metadata({ data: "json, name=trackerUrls" })
  trackerUrls?: string[];

  @Metadata({ data: "json, name=transcodes", elemType: shared.Transcode })
  transcodes?: Transcode[];

  @Metadata({ data: "json, name=universalAdId" })
  universalAdId?: UniversalAdId;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=vastTagUrl" })
  vastTagUrl?: string;

  @Metadata({ data: "json, name=vpaid" })
  vpaid?: boolean;
}
