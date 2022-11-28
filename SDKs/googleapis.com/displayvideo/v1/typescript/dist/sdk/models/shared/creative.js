var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { Transcode } from "./transcode";
import { UniversalAdId } from "./universaladid";
export var CreativeCreativeAttributesEnum;
(function (CreativeCreativeAttributesEnum) {
    CreativeCreativeAttributesEnum["CreativeAttributeUnspecified"] = "CREATIVE_ATTRIBUTE_UNSPECIFIED";
    CreativeCreativeAttributesEnum["CreativeAttributeVast"] = "CREATIVE_ATTRIBUTE_VAST";
    CreativeCreativeAttributesEnum["CreativeAttributeVpaidLinear"] = "CREATIVE_ATTRIBUTE_VPAID_LINEAR";
    CreativeCreativeAttributesEnum["CreativeAttributeVpaidNonLinear"] = "CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR";
})(CreativeCreativeAttributesEnum || (CreativeCreativeAttributesEnum = {}));
export var CreativeCreativeTypeEnum;
(function (CreativeCreativeTypeEnum) {
    CreativeCreativeTypeEnum["CreativeTypeUnspecified"] = "CREATIVE_TYPE_UNSPECIFIED";
    CreativeCreativeTypeEnum["CreativeTypeStandard"] = "CREATIVE_TYPE_STANDARD";
    CreativeCreativeTypeEnum["CreativeTypeExpandable"] = "CREATIVE_TYPE_EXPANDABLE";
    CreativeCreativeTypeEnum["CreativeTypeVideo"] = "CREATIVE_TYPE_VIDEO";
    CreativeCreativeTypeEnum["CreativeTypeNative"] = "CREATIVE_TYPE_NATIVE";
    CreativeCreativeTypeEnum["CreativeTypeTemplatedAppInstall"] = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL";
    CreativeCreativeTypeEnum["CreativeTypeNativeSiteSquare"] = "CREATIVE_TYPE_NATIVE_SITE_SQUARE";
    CreativeCreativeTypeEnum["CreativeTypeTemplatedAppInstallInterstitial"] = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL";
    CreativeCreativeTypeEnum["CreativeTypeLightbox"] = "CREATIVE_TYPE_LIGHTBOX";
    CreativeCreativeTypeEnum["CreativeTypeNativeAppInstall"] = "CREATIVE_TYPE_NATIVE_APP_INSTALL";
    CreativeCreativeTypeEnum["CreativeTypeNativeAppInstallSquare"] = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE";
    CreativeCreativeTypeEnum["CreativeTypeAudio"] = "CREATIVE_TYPE_AUDIO";
    CreativeCreativeTypeEnum["CreativeTypePublisherHosted"] = "CREATIVE_TYPE_PUBLISHER_HOSTED";
    CreativeCreativeTypeEnum["CreativeTypeNativeVideo"] = "CREATIVE_TYPE_NATIVE_VIDEO";
    CreativeCreativeTypeEnum["CreativeTypeTemplatedAppInstallVideo"] = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO";
})(CreativeCreativeTypeEnum || (CreativeCreativeTypeEnum = {}));
export var CreativeEntityStatusEnum;
(function (CreativeEntityStatusEnum) {
    CreativeEntityStatusEnum["EntityStatusUnspecified"] = "ENTITY_STATUS_UNSPECIFIED";
    CreativeEntityStatusEnum["EntityStatusActive"] = "ENTITY_STATUS_ACTIVE";
    CreativeEntityStatusEnum["EntityStatusArchived"] = "ENTITY_STATUS_ARCHIVED";
    CreativeEntityStatusEnum["EntityStatusDraft"] = "ENTITY_STATUS_DRAFT";
    CreativeEntityStatusEnum["EntityStatusPaused"] = "ENTITY_STATUS_PAUSED";
    CreativeEntityStatusEnum["EntityStatusScheduledForDeletion"] = "ENTITY_STATUS_SCHEDULED_FOR_DELETION";
})(CreativeEntityStatusEnum || (CreativeEntityStatusEnum = {}));
export var CreativeExpandingDirectionEnum;
(function (CreativeExpandingDirectionEnum) {
    CreativeExpandingDirectionEnum["ExpandingDirectionUnspecified"] = "EXPANDING_DIRECTION_UNSPECIFIED";
    CreativeExpandingDirectionEnum["ExpandingDirectionNone"] = "EXPANDING_DIRECTION_NONE";
    CreativeExpandingDirectionEnum["ExpandingDirectionUp"] = "EXPANDING_DIRECTION_UP";
    CreativeExpandingDirectionEnum["ExpandingDirectionDown"] = "EXPANDING_DIRECTION_DOWN";
    CreativeExpandingDirectionEnum["ExpandingDirectionLeft"] = "EXPANDING_DIRECTION_LEFT";
    CreativeExpandingDirectionEnum["ExpandingDirectionRight"] = "EXPANDING_DIRECTION_RIGHT";
    CreativeExpandingDirectionEnum["ExpandingDirectionUpAndLeft"] = "EXPANDING_DIRECTION_UP_AND_LEFT";
    CreativeExpandingDirectionEnum["ExpandingDirectionUpAndRight"] = "EXPANDING_DIRECTION_UP_AND_RIGHT";
    CreativeExpandingDirectionEnum["ExpandingDirectionDownAndLeft"] = "EXPANDING_DIRECTION_DOWN_AND_LEFT";
    CreativeExpandingDirectionEnum["ExpandingDirectionDownAndRight"] = "EXPANDING_DIRECTION_DOWN_AND_RIGHT";
    CreativeExpandingDirectionEnum["ExpandingDirectionUpOrDown"] = "EXPANDING_DIRECTION_UP_OR_DOWN";
    CreativeExpandingDirectionEnum["ExpandingDirectionLeftOrRight"] = "EXPANDING_DIRECTION_LEFT_OR_RIGHT";
    CreativeExpandingDirectionEnum["ExpandingDirectionAnyDiagonal"] = "EXPANDING_DIRECTION_ANY_DIAGONAL";
})(CreativeExpandingDirectionEnum || (CreativeExpandingDirectionEnum = {}));
export var CreativeHostingSourceEnum;
(function (CreativeHostingSourceEnum) {
    CreativeHostingSourceEnum["HostingSourceUnspecified"] = "HOSTING_SOURCE_UNSPECIFIED";
    CreativeHostingSourceEnum["HostingSourceCm"] = "HOSTING_SOURCE_CM";
    CreativeHostingSourceEnum["HostingSourceThirdParty"] = "HOSTING_SOURCE_THIRD_PARTY";
    CreativeHostingSourceEnum["HostingSourceHosted"] = "HOSTING_SOURCE_HOSTED";
    CreativeHostingSourceEnum["HostingSourceRichMedia"] = "HOSTING_SOURCE_RICH_MEDIA";
})(CreativeHostingSourceEnum || (CreativeHostingSourceEnum = {}));
// Creative
/**
 * A single Creative.
**/
var Creative = /** @class */ (function (_super) {
    __extends(Creative, _super);
    function Creative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDimensions", elemType: Dimensions }),
        __metadata("design:type", Array)
    ], Creative.prototype, "additionalDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appendedTag" }),
        __metadata("design:type", String)
    ], Creative.prototype, "appendedTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: AssetAssociation }),
        __metadata("design:type", Array)
    ], Creative.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cmPlacementId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "cmPlacementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cmTrackingAd" }),
        __metadata("design:type", CmTrackingAd)
    ], Creative.prototype, "cmTrackingAd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companionCreativeIds" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "companionCreativeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counterEvents", elemType: CounterEvent }),
        __metadata("design:type", Array)
    ], Creative.prototype, "counterEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Creative.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeAttributes" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "creativeAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "creativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeType" }),
        __metadata("design:type", String)
    ], Creative.prototype, "creativeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Dimensions)
    ], Creative.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Creative.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamic" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "dynamic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], Creative.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exitEvents", elemType: ExitEvent }),
        __metadata("design:type", Array)
    ], Creative.prototype, "exitEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expandOnHover" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "expandOnHover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expandingDirection" }),
        __metadata("design:type", String)
    ], Creative.prototype, "expandingDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostingSource" }),
        __metadata("design:type", String)
    ], Creative.prototype, "hostingSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html5Video" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "html5Video", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iasCampaignMonitoring" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "iasCampaignMonitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationCode" }),
        __metadata("design:type", String)
    ], Creative.prototype, "integrationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsTrackerUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "jsTrackerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItemIds" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "lineItemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaDuration" }),
        __metadata("design:type", String)
    ], Creative.prototype, "mediaDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mp3Audio" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "mp3Audio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Creative.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Creative.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obaIcon" }),
        __metadata("design:type", ObaIcon)
    ], Creative.prototype, "obaIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oggAudio" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "oggAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progressOffset" }),
        __metadata("design:type", AudioVideoOffset)
    ], Creative.prototype, "progressOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireHtml5" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "requireHtml5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireMraid" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "requireMraid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requirePingForAttribution" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "requirePingForAttribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewStatus" }),
        __metadata("design:type", ReviewStatusInfo)
    ], Creative.prototype, "reviewStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipOffset" }),
        __metadata("design:type", AudioVideoOffset)
    ], Creative.prototype, "skipOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippable" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "skippable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyTag" }),
        __metadata("design:type", String)
    ], Creative.prototype, "thirdPartyTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyUrls", elemType: ThirdPartyUrl }),
        __metadata("design:type", Array)
    ], Creative.prototype, "thirdPartyUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timerEvents", elemType: TimerEvent }),
        __metadata("design:type", Array)
    ], Creative.prototype, "timerEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackerUrls" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "trackerUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transcodes", elemType: Transcode }),
        __metadata("design:type", Array)
    ], Creative.prototype, "transcodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=universalAdId" }),
        __metadata("design:type", UniversalAdId)
    ], Creative.prototype, "universalAdId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Creative.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vastTagUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "vastTagUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpaid" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "vpaid", void 0);
    return Creative;
}(SpeakeasyBase));
export { Creative };
// CreativeInput
/**
 * A single Creative.
**/
var CreativeInput = /** @class */ (function (_super) {
    __extends(CreativeInput, _super);
    function CreativeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalDimensions", elemType: Dimensions }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "additionalDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appendedTag" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "appendedTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets", elemType: AssetAssociation }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cmTrackingAd" }),
        __metadata("design:type", CmTrackingAd)
    ], CreativeInput.prototype, "cmTrackingAd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companionCreativeIds" }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "companionCreativeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counterEvents", elemType: CounterEvent }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "counterEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeType" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "creativeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Dimensions)
    ], CreativeInput.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityStatus" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "entityStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exitEvents", elemType: ExitEvent }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "exitEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expandOnHover" }),
        __metadata("design:type", Boolean)
    ], CreativeInput.prototype, "expandOnHover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expandingDirection" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "expandingDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostingSource" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "hostingSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iasCampaignMonitoring" }),
        __metadata("design:type", Boolean)
    ], CreativeInput.prototype, "iasCampaignMonitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationCode" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "integrationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsTrackerUrl" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "jsTrackerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obaIcon" }),
        __metadata("design:type", ObaIcon)
    ], CreativeInput.prototype, "obaIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progressOffset" }),
        __metadata("design:type", AudioVideoOffset)
    ], CreativeInput.prototype, "progressOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireHtml5" }),
        __metadata("design:type", Boolean)
    ], CreativeInput.prototype, "requireHtml5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requireMraid" }),
        __metadata("design:type", Boolean)
    ], CreativeInput.prototype, "requireMraid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requirePingForAttribution" }),
        __metadata("design:type", Boolean)
    ], CreativeInput.prototype, "requirePingForAttribution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviewStatus" }),
        __metadata("design:type", ReviewStatusInfo)
    ], CreativeInput.prototype, "reviewStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipOffset" }),
        __metadata("design:type", AudioVideoOffset)
    ], CreativeInput.prototype, "skipOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippable" }),
        __metadata("design:type", Boolean)
    ], CreativeInput.prototype, "skippable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyTag" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "thirdPartyTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyUrls", elemType: ThirdPartyUrl }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "thirdPartyUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timerEvents", elemType: TimerEvent }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "timerEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackerUrls" }),
        __metadata("design:type", Array)
    ], CreativeInput.prototype, "trackerUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=universalAdId" }),
        __metadata("design:type", UniversalAdId)
    ], CreativeInput.prototype, "universalAdId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vastTagUrl" }),
        __metadata("design:type", String)
    ], CreativeInput.prototype, "vastTagUrl", void 0);
    return CreativeInput;
}(SpeakeasyBase));
export { CreativeInput };
