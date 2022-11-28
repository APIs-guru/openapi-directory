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
import { Size } from "./size";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";
import { TargetWindow } from "./targetwindow";
import { ClickTag } from "./clicktag";
import { CreativeCustomEvent } from "./creativecustomevent";
import { CreativeAssetSelection } from "./creativeassetselection";
import { CreativeAsset } from "./creativeasset";
import { CreativeFieldAssignment } from "./creativefieldassignment";
import { FsCommand } from "./fscommand";
import { DimensionValue } from "./dimensionvalue";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { ObaIcon } from "./obaicon";
import { VideoOffset } from "./videooffset";
import { ThirdPartyTrackingUrl } from "./thirdpartytrackingurl";
import { UniversalAdId } from "./universaladid";
export var CreativeArtworkTypeEnum;
(function (CreativeArtworkTypeEnum) {
    CreativeArtworkTypeEnum["ArtworkTypeFlash"] = "ARTWORK_TYPE_FLASH";
    CreativeArtworkTypeEnum["ArtworkTypeHtml5"] = "ARTWORK_TYPE_HTML5";
    CreativeArtworkTypeEnum["ArtworkTypeMixed"] = "ARTWORK_TYPE_MIXED";
    CreativeArtworkTypeEnum["ArtworkTypeImage"] = "ARTWORK_TYPE_IMAGE";
})(CreativeArtworkTypeEnum || (CreativeArtworkTypeEnum = {}));
export var CreativeAuthoringSourceEnum;
(function (CreativeAuthoringSourceEnum) {
    CreativeAuthoringSourceEnum["CreativeAuthoringSourceDcm"] = "CREATIVE_AUTHORING_SOURCE_DCM";
    CreativeAuthoringSourceEnum["CreativeAuthoringSourceDbm"] = "CREATIVE_AUTHORING_SOURCE_DBM";
    CreativeAuthoringSourceEnum["CreativeAuthoringSourceStudio"] = "CREATIVE_AUTHORING_SOURCE_STUDIO";
    CreativeAuthoringSourceEnum["CreativeAuthoringSourceGwd"] = "CREATIVE_AUTHORING_SOURCE_GWD";
    CreativeAuthoringSourceEnum["CreativeAuthoringSourceAcs"] = "CREATIVE_AUTHORING_SOURCE_ACS";
})(CreativeAuthoringSourceEnum || (CreativeAuthoringSourceEnum = {}));
export var CreativeAuthoringToolEnum;
(function (CreativeAuthoringToolEnum) {
    CreativeAuthoringToolEnum["Ninja"] = "NINJA";
    CreativeAuthoringToolEnum["Swiffy"] = "SWIFFY";
})(CreativeAuthoringToolEnum || (CreativeAuthoringToolEnum = {}));
export var CreativeBackupImageFeaturesEnum;
(function (CreativeBackupImageFeaturesEnum) {
    CreativeBackupImageFeaturesEnum["CssFontFace"] = "CSS_FONT_FACE";
    CreativeBackupImageFeaturesEnum["CssBackgroundSize"] = "CSS_BACKGROUND_SIZE";
    CreativeBackupImageFeaturesEnum["CssBorderImage"] = "CSS_BORDER_IMAGE";
    CreativeBackupImageFeaturesEnum["CssBorderRadius"] = "CSS_BORDER_RADIUS";
    CreativeBackupImageFeaturesEnum["CssBoxShadow"] = "CSS_BOX_SHADOW";
    CreativeBackupImageFeaturesEnum["CssFlexBox"] = "CSS_FLEX_BOX";
    CreativeBackupImageFeaturesEnum["CssHsla"] = "CSS_HSLA";
    CreativeBackupImageFeaturesEnum["CssMultipleBgs"] = "CSS_MULTIPLE_BGS";
    CreativeBackupImageFeaturesEnum["CssOpacity"] = "CSS_OPACITY";
    CreativeBackupImageFeaturesEnum["CssRgba"] = "CSS_RGBA";
    CreativeBackupImageFeaturesEnum["CssTextShadow"] = "CSS_TEXT_SHADOW";
    CreativeBackupImageFeaturesEnum["CssAnimations"] = "CSS_ANIMATIONS";
    CreativeBackupImageFeaturesEnum["CssColumns"] = "CSS_COLUMNS";
    CreativeBackupImageFeaturesEnum["CssGeneratedContent"] = "CSS_GENERATED_CONTENT";
    CreativeBackupImageFeaturesEnum["CssGradients"] = "CSS_GRADIENTS";
    CreativeBackupImageFeaturesEnum["CssReflections"] = "CSS_REFLECTIONS";
    CreativeBackupImageFeaturesEnum["CssTransforms"] = "CSS_TRANSFORMS";
    CreativeBackupImageFeaturesEnum["CssTransforms3D"] = "CSS_TRANSFORMS3D";
    CreativeBackupImageFeaturesEnum["CssTransitions"] = "CSS_TRANSITIONS";
    CreativeBackupImageFeaturesEnum["ApplicationCache"] = "APPLICATION_CACHE";
    CreativeBackupImageFeaturesEnum["Canvas"] = "CANVAS";
    CreativeBackupImageFeaturesEnum["CanvasText"] = "CANVAS_TEXT";
    CreativeBackupImageFeaturesEnum["DragAndDrop"] = "DRAG_AND_DROP";
    CreativeBackupImageFeaturesEnum["HashChange"] = "HASH_CHANGE";
    CreativeBackupImageFeaturesEnum["History"] = "HISTORY";
    CreativeBackupImageFeaturesEnum["Audio"] = "AUDIO";
    CreativeBackupImageFeaturesEnum["Video"] = "VIDEO";
    CreativeBackupImageFeaturesEnum["IndexedDb"] = "INDEXED_DB";
    CreativeBackupImageFeaturesEnum["InputAttrAutocomplete"] = "INPUT_ATTR_AUTOCOMPLETE";
    CreativeBackupImageFeaturesEnum["InputAttrAutofocus"] = "INPUT_ATTR_AUTOFOCUS";
    CreativeBackupImageFeaturesEnum["InputAttrList"] = "INPUT_ATTR_LIST";
    CreativeBackupImageFeaturesEnum["InputAttrPlaceholder"] = "INPUT_ATTR_PLACEHOLDER";
    CreativeBackupImageFeaturesEnum["InputAttrMax"] = "INPUT_ATTR_MAX";
    CreativeBackupImageFeaturesEnum["InputAttrMin"] = "INPUT_ATTR_MIN";
    CreativeBackupImageFeaturesEnum["InputAttrMultiple"] = "INPUT_ATTR_MULTIPLE";
    CreativeBackupImageFeaturesEnum["InputAttrPattern"] = "INPUT_ATTR_PATTERN";
    CreativeBackupImageFeaturesEnum["InputAttrRequired"] = "INPUT_ATTR_REQUIRED";
    CreativeBackupImageFeaturesEnum["InputAttrStep"] = "INPUT_ATTR_STEP";
    CreativeBackupImageFeaturesEnum["InputTypeSearch"] = "INPUT_TYPE_SEARCH";
    CreativeBackupImageFeaturesEnum["InputTypeTel"] = "INPUT_TYPE_TEL";
    CreativeBackupImageFeaturesEnum["InputTypeUrl"] = "INPUT_TYPE_URL";
    CreativeBackupImageFeaturesEnum["InputTypeEmail"] = "INPUT_TYPE_EMAIL";
    CreativeBackupImageFeaturesEnum["InputTypeDatetime"] = "INPUT_TYPE_DATETIME";
    CreativeBackupImageFeaturesEnum["InputTypeDate"] = "INPUT_TYPE_DATE";
    CreativeBackupImageFeaturesEnum["InputTypeMonth"] = "INPUT_TYPE_MONTH";
    CreativeBackupImageFeaturesEnum["InputTypeWeek"] = "INPUT_TYPE_WEEK";
    CreativeBackupImageFeaturesEnum["InputTypeTime"] = "INPUT_TYPE_TIME";
    CreativeBackupImageFeaturesEnum["InputTypeDatetimeLocal"] = "INPUT_TYPE_DATETIME_LOCAL";
    CreativeBackupImageFeaturesEnum["InputTypeNumber"] = "INPUT_TYPE_NUMBER";
    CreativeBackupImageFeaturesEnum["InputTypeRange"] = "INPUT_TYPE_RANGE";
    CreativeBackupImageFeaturesEnum["InputTypeColor"] = "INPUT_TYPE_COLOR";
    CreativeBackupImageFeaturesEnum["LocalStorage"] = "LOCAL_STORAGE";
    CreativeBackupImageFeaturesEnum["PostMessage"] = "POST_MESSAGE";
    CreativeBackupImageFeaturesEnum["SessionStorage"] = "SESSION_STORAGE";
    CreativeBackupImageFeaturesEnum["WebSockets"] = "WEB_SOCKETS";
    CreativeBackupImageFeaturesEnum["WebSqlDatabase"] = "WEB_SQL_DATABASE";
    CreativeBackupImageFeaturesEnum["WebWorkers"] = "WEB_WORKERS";
    CreativeBackupImageFeaturesEnum["GeoLocation"] = "GEO_LOCATION";
    CreativeBackupImageFeaturesEnum["InlineSvg"] = "INLINE_SVG";
    CreativeBackupImageFeaturesEnum["Smil"] = "SMIL";
    CreativeBackupImageFeaturesEnum["SvgHref"] = "SVG_HREF";
    CreativeBackupImageFeaturesEnum["SvgClipPaths"] = "SVG_CLIP_PATHS";
    CreativeBackupImageFeaturesEnum["Touch"] = "TOUCH";
    CreativeBackupImageFeaturesEnum["Webgl"] = "WEBGL";
    CreativeBackupImageFeaturesEnum["SvgFilters"] = "SVG_FILTERS";
    CreativeBackupImageFeaturesEnum["SvgFeImage"] = "SVG_FE_IMAGE";
})(CreativeBackupImageFeaturesEnum || (CreativeBackupImageFeaturesEnum = {}));
export var CreativeCompatibilityEnum;
(function (CreativeCompatibilityEnum) {
    CreativeCompatibilityEnum["Display"] = "DISPLAY";
    CreativeCompatibilityEnum["DisplayInterstitial"] = "DISPLAY_INTERSTITIAL";
    CreativeCompatibilityEnum["App"] = "APP";
    CreativeCompatibilityEnum["AppInterstitial"] = "APP_INTERSTITIAL";
    CreativeCompatibilityEnum["InStreamVideo"] = "IN_STREAM_VIDEO";
    CreativeCompatibilityEnum["InStreamAudio"] = "IN_STREAM_AUDIO";
})(CreativeCompatibilityEnum || (CreativeCompatibilityEnum = {}));
export var CreativeTypeEnum;
(function (CreativeTypeEnum) {
    CreativeTypeEnum["Image"] = "IMAGE";
    CreativeTypeEnum["DisplayRedirect"] = "DISPLAY_REDIRECT";
    CreativeTypeEnum["CustomDisplay"] = "CUSTOM_DISPLAY";
    CreativeTypeEnum["InternalRedirect"] = "INTERNAL_REDIRECT";
    CreativeTypeEnum["CustomDisplayInterstitial"] = "CUSTOM_DISPLAY_INTERSTITIAL";
    CreativeTypeEnum["InterstitialInternalRedirect"] = "INTERSTITIAL_INTERNAL_REDIRECT";
    CreativeTypeEnum["TrackingText"] = "TRACKING_TEXT";
    CreativeTypeEnum["RichMediaDisplayBanner"] = "RICH_MEDIA_DISPLAY_BANNER";
    CreativeTypeEnum["RichMediaInpageFloating"] = "RICH_MEDIA_INPAGE_FLOATING";
    CreativeTypeEnum["RichMediaImExpand"] = "RICH_MEDIA_IM_EXPAND";
    CreativeTypeEnum["RichMediaDisplayExpanding"] = "RICH_MEDIA_DISPLAY_EXPANDING";
    CreativeTypeEnum["RichMediaDisplayInterstitial"] = "RICH_MEDIA_DISPLAY_INTERSTITIAL";
    CreativeTypeEnum["RichMediaDisplayMultiFloatingInterstitial"] = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL";
    CreativeTypeEnum["RichMediaMobileInApp"] = "RICH_MEDIA_MOBILE_IN_APP";
    CreativeTypeEnum["FlashInpage"] = "FLASH_INPAGE";
    CreativeTypeEnum["InstreamVideo"] = "INSTREAM_VIDEO";
    CreativeTypeEnum["VpaidLinearVideo"] = "VPAID_LINEAR_VIDEO";
    CreativeTypeEnum["VpaidNonLinearVideo"] = "VPAID_NON_LINEAR_VIDEO";
    CreativeTypeEnum["InstreamVideoRedirect"] = "INSTREAM_VIDEO_REDIRECT";
    CreativeTypeEnum["RichMediaPeelDown"] = "RICH_MEDIA_PEEL_DOWN";
    CreativeTypeEnum["Html5Banner"] = "HTML5_BANNER";
    CreativeTypeEnum["Display"] = "DISPLAY";
    CreativeTypeEnum["DisplayImageGallery"] = "DISPLAY_IMAGE_GALLERY";
    CreativeTypeEnum["BrandSafeDefaultInstreamVideo"] = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO";
    CreativeTypeEnum["InstreamAudio"] = "INSTREAM_AUDIO";
})(CreativeTypeEnum || (CreativeTypeEnum = {}));
// Creative
/**
 * Contains properties of a Creative.
**/
var Creative = /** @class */ (function (_super) {
    __extends(Creative, _super);
    function Creative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adParameters" }),
        __metadata("design:type", String)
    ], Creative.prototype, "adParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adTagKeys" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "adTagKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalSizes", elemType: Size }),
        __metadata("design:type", Array)
    ], Creative.prototype, "additionalSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowScriptAccess" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "allowScriptAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artworkType" }),
        __metadata("design:type", String)
    ], Creative.prototype, "artworkType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authoringSource" }),
        __metadata("design:type", String)
    ], Creative.prototype, "authoringSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authoringTool" }),
        __metadata("design:type", String)
    ], Creative.prototype, "authoringTool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoAdvanceImages" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "autoAdvanceImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColor" }),
        __metadata("design:type", String)
    ], Creative.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupImageClickThroughUrl" }),
        __metadata("design:type", CreativeClickThroughUrl)
    ], Creative.prototype, "backupImageClickThroughUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupImageFeatures" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "backupImageFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupImageReportingLabel" }),
        __metadata("design:type", String)
    ], Creative.prototype, "backupImageReportingLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupImageTargetWindow" }),
        __metadata("design:type", TargetWindow)
    ], Creative.prototype, "backupImageTargetWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickTags", elemType: ClickTag }),
        __metadata("design:type", Array)
    ], Creative.prototype, "clickTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commercialId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "commercialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companionCreatives" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "companionCreatives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compatibility" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "compatibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=convertFlashToHtml5" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "convertFlashToHtml5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=counterCustomEvents", elemType: CreativeCustomEvent }),
        __metadata("design:type", Array)
    ], Creative.prototype, "counterCustomEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeAssetSelection" }),
        __metadata("design:type", CreativeAssetSelection)
    ], Creative.prototype, "creativeAssetSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeAssets", elemType: CreativeAsset }),
        __metadata("design:type", Array)
    ], Creative.prototype, "creativeAssets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeFieldAssignments", elemType: CreativeFieldAssignment }),
        __metadata("design:type", Array)
    ], Creative.prototype, "creativeFieldAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customKeyValues" }),
        __metadata("design:type", Array)
    ], Creative.prototype, "customKeyValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicAssetSelection" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "dynamicAssetSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exitCustomEvents", elemType: CreativeCustomEvent }),
        __metadata("design:type", Array)
    ], Creative.prototype, "exitCustomEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fsCommand" }),
        __metadata("design:type", FsCommand)
    ], Creative.prototype, "fsCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=htmlCode" }),
        __metadata("design:type", String)
    ], Creative.prototype, "htmlCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=htmlCodeLocked" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "htmlCodeLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Creative.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Creative.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Creative.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], Creative.prototype, "lastModifiedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestTraffickedCreativeId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "latestTraffickedCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaDescription" }),
        __metadata("design:type", String)
    ], Creative.prototype, "mediaDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaDuration" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "mediaDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Creative.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obaIcon" }),
        __metadata("design:type", ObaIcon)
    ], Creative.prototype, "obaIcon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideCss" }),
        __metadata("design:type", String)
    ], Creative.prototype, "overrideCss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progressOffset" }),
        __metadata("design:type", VideoOffset)
    ], Creative.prototype, "progressOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renderingId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "renderingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renderingIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], Creative.prototype, "renderingIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredFlashPluginVersion" }),
        __metadata("design:type", String)
    ], Creative.prototype, "requiredFlashPluginVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredFlashVersion" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "requiredFlashVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Size)
    ], Creative.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipOffset" }),
        __metadata("design:type", VideoOffset)
    ], Creative.prototype, "skipOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippable" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "skippable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCompliant" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "sslCompliant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslOverride" }),
        __metadata("design:type", Boolean)
    ], Creative.prototype, "sslOverride", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioAdvertiserId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "studioAdvertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioCreativeId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "studioCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioTraffickedCreativeId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "studioTraffickedCreativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], Creative.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyBackupImageImpressionsUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "thirdPartyBackupImageImpressionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyRichMediaImpressionsUrl" }),
        __metadata("design:type", String)
    ], Creative.prototype, "thirdPartyRichMediaImpressionsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyUrls", elemType: ThirdPartyTrackingUrl }),
        __metadata("design:type", Array)
    ], Creative.prototype, "thirdPartyUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timerCustomEvents", elemType: CreativeCustomEvent }),
        __metadata("design:type", Array)
    ], Creative.prototype, "timerCustomEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFileSize" }),
        __metadata("design:type", String)
    ], Creative.prototype, "totalFileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Creative.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=universalAdId" }),
        __metadata("design:type", UniversalAdId)
    ], Creative.prototype, "universalAdId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Creative.prototype, "version", void 0);
    return Creative;
}(SpeakeasyBase));
export { Creative };
