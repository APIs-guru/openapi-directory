import { SpeakeasyBase } from "../../../internal/utils";
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
import { Transcode } from "./transcode";
import { UniversalAdId } from "./universaladid";
export declare enum CreativeCreativeAttributesEnum {
    CreativeAttributeUnspecified = "CREATIVE_ATTRIBUTE_UNSPECIFIED",
    CreativeAttributeVast = "CREATIVE_ATTRIBUTE_VAST",
    CreativeAttributeVpaidLinear = "CREATIVE_ATTRIBUTE_VPAID_LINEAR",
    CreativeAttributeVpaidNonLinear = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR"
}
export declare enum CreativeCreativeTypeEnum {
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
export declare enum CreativeEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
export declare enum CreativeExpandingDirectionEnum {
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
export declare enum CreativeHostingSourceEnum {
    HostingSourceUnspecified = "HOSTING_SOURCE_UNSPECIFIED",
    HostingSourceCm = "HOSTING_SOURCE_CM",
    HostingSourceThirdParty = "HOSTING_SOURCE_THIRD_PARTY",
    HostingSourceHosted = "HOSTING_SOURCE_HOSTED",
    HostingSourceRichMedia = "HOSTING_SOURCE_RICH_MEDIA"
}
/**
 * A single Creative.
**/
export declare class Creative extends SpeakeasyBase {
    additionalDimensions?: Dimensions[];
    advertiserId?: string;
    appendedTag?: string;
    assets?: AssetAssociation[];
    cmPlacementId?: string;
    cmTrackingAd?: CmTrackingAd;
    companionCreativeIds?: string[];
    counterEvents?: CounterEvent[];
    createTime?: string;
    creativeAttributes?: CreativeCreativeAttributesEnum[];
    creativeId?: string;
    creativeType?: CreativeCreativeTypeEnum;
    dimensions?: Dimensions;
    displayName?: string;
    dynamic?: boolean;
    entityStatus?: CreativeEntityStatusEnum;
    exitEvents?: ExitEvent[];
    expandOnHover?: boolean;
    expandingDirection?: CreativeExpandingDirectionEnum;
    hostingSource?: CreativeHostingSourceEnum;
    html5Video?: boolean;
    iasCampaignMonitoring?: boolean;
    integrationCode?: string;
    jsTrackerUrl?: string;
    lineItemIds?: string[];
    mediaDuration?: string;
    mp3Audio?: boolean;
    name?: string;
    notes?: string;
    obaIcon?: ObaIcon;
    oggAudio?: boolean;
    progressOffset?: AudioVideoOffset;
    requireHtml5?: boolean;
    requireMraid?: boolean;
    requirePingForAttribution?: boolean;
    reviewStatus?: ReviewStatusInfo;
    skipOffset?: AudioVideoOffset;
    skippable?: boolean;
    thirdPartyTag?: string;
    thirdPartyUrls?: ThirdPartyUrl[];
    timerEvents?: TimerEvent[];
    trackerUrls?: string[];
    transcodes?: Transcode[];
    universalAdId?: UniversalAdId;
    updateTime?: string;
    vastTagUrl?: string;
    vpaid?: boolean;
}
/**
 * A single Creative.
**/
export declare class CreativeInput extends SpeakeasyBase {
    additionalDimensions?: Dimensions[];
    appendedTag?: string;
    assets?: AssetAssociation[];
    cmTrackingAd?: CmTrackingAd;
    companionCreativeIds?: string[];
    counterEvents?: CounterEvent[];
    creativeType?: CreativeCreativeTypeEnum;
    dimensions?: Dimensions;
    displayName?: string;
    entityStatus?: CreativeEntityStatusEnum;
    exitEvents?: ExitEvent[];
    expandOnHover?: boolean;
    expandingDirection?: CreativeExpandingDirectionEnum;
    hostingSource?: CreativeHostingSourceEnum;
    iasCampaignMonitoring?: boolean;
    integrationCode?: string;
    jsTrackerUrl?: string;
    notes?: string;
    obaIcon?: ObaIcon;
    progressOffset?: AudioVideoOffset;
    requireHtml5?: boolean;
    requireMraid?: boolean;
    requirePingForAttribution?: boolean;
    reviewStatus?: ReviewStatusInfo;
    skipOffset?: AudioVideoOffset;
    skippable?: boolean;
    thirdPartyTag?: string;
    thirdPartyUrls?: ThirdPartyUrl[];
    timerEvents?: TimerEvent[];
    trackerUrls?: string[];
    universalAdId?: UniversalAdId;
    vastTagUrl?: string;
}
