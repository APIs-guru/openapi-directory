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
import { CreativeAssetId } from "./creativeassetid";
import { CreativeCustomEvent } from "./creativecustomevent";
import { DimensionValue } from "./dimensionvalue";
import { OffsetPosition } from "./offsetposition";
export var CreativeAssetAlignmentEnum;
(function (CreativeAssetAlignmentEnum) {
    CreativeAssetAlignmentEnum["AlignmentTop"] = "ALIGNMENT_TOP";
    CreativeAssetAlignmentEnum["AlignmentRight"] = "ALIGNMENT_RIGHT";
    CreativeAssetAlignmentEnum["AlignmentBottom"] = "ALIGNMENT_BOTTOM";
    CreativeAssetAlignmentEnum["AlignmentLeft"] = "ALIGNMENT_LEFT";
})(CreativeAssetAlignmentEnum || (CreativeAssetAlignmentEnum = {}));
export var CreativeAssetArtworkTypeEnum;
(function (CreativeAssetArtworkTypeEnum) {
    CreativeAssetArtworkTypeEnum["ArtworkTypeFlash"] = "ARTWORK_TYPE_FLASH";
    CreativeAssetArtworkTypeEnum["ArtworkTypeHtml5"] = "ARTWORK_TYPE_HTML5";
    CreativeAssetArtworkTypeEnum["ArtworkTypeMixed"] = "ARTWORK_TYPE_MIXED";
    CreativeAssetArtworkTypeEnum["ArtworkTypeImage"] = "ARTWORK_TYPE_IMAGE";
})(CreativeAssetArtworkTypeEnum || (CreativeAssetArtworkTypeEnum = {}));
export var CreativeAssetChildAssetTypeEnum;
(function (CreativeAssetChildAssetTypeEnum) {
    CreativeAssetChildAssetTypeEnum["ChildAssetTypeFlash"] = "CHILD_ASSET_TYPE_FLASH";
    CreativeAssetChildAssetTypeEnum["ChildAssetTypeVideo"] = "CHILD_ASSET_TYPE_VIDEO";
    CreativeAssetChildAssetTypeEnum["ChildAssetTypeImage"] = "CHILD_ASSET_TYPE_IMAGE";
    CreativeAssetChildAssetTypeEnum["ChildAssetTypeData"] = "CHILD_ASSET_TYPE_DATA";
})(CreativeAssetChildAssetTypeEnum || (CreativeAssetChildAssetTypeEnum = {}));
export var CreativeAssetDetectedFeaturesEnum;
(function (CreativeAssetDetectedFeaturesEnum) {
    CreativeAssetDetectedFeaturesEnum["CssFontFace"] = "CSS_FONT_FACE";
    CreativeAssetDetectedFeaturesEnum["CssBackgroundSize"] = "CSS_BACKGROUND_SIZE";
    CreativeAssetDetectedFeaturesEnum["CssBorderImage"] = "CSS_BORDER_IMAGE";
    CreativeAssetDetectedFeaturesEnum["CssBorderRadius"] = "CSS_BORDER_RADIUS";
    CreativeAssetDetectedFeaturesEnum["CssBoxShadow"] = "CSS_BOX_SHADOW";
    CreativeAssetDetectedFeaturesEnum["CssFlexBox"] = "CSS_FLEX_BOX";
    CreativeAssetDetectedFeaturesEnum["CssHsla"] = "CSS_HSLA";
    CreativeAssetDetectedFeaturesEnum["CssMultipleBgs"] = "CSS_MULTIPLE_BGS";
    CreativeAssetDetectedFeaturesEnum["CssOpacity"] = "CSS_OPACITY";
    CreativeAssetDetectedFeaturesEnum["CssRgba"] = "CSS_RGBA";
    CreativeAssetDetectedFeaturesEnum["CssTextShadow"] = "CSS_TEXT_SHADOW";
    CreativeAssetDetectedFeaturesEnum["CssAnimations"] = "CSS_ANIMATIONS";
    CreativeAssetDetectedFeaturesEnum["CssColumns"] = "CSS_COLUMNS";
    CreativeAssetDetectedFeaturesEnum["CssGeneratedContent"] = "CSS_GENERATED_CONTENT";
    CreativeAssetDetectedFeaturesEnum["CssGradients"] = "CSS_GRADIENTS";
    CreativeAssetDetectedFeaturesEnum["CssReflections"] = "CSS_REFLECTIONS";
    CreativeAssetDetectedFeaturesEnum["CssTransforms"] = "CSS_TRANSFORMS";
    CreativeAssetDetectedFeaturesEnum["CssTransforms3D"] = "CSS_TRANSFORMS3D";
    CreativeAssetDetectedFeaturesEnum["CssTransitions"] = "CSS_TRANSITIONS";
    CreativeAssetDetectedFeaturesEnum["ApplicationCache"] = "APPLICATION_CACHE";
    CreativeAssetDetectedFeaturesEnum["Canvas"] = "CANVAS";
    CreativeAssetDetectedFeaturesEnum["CanvasText"] = "CANVAS_TEXT";
    CreativeAssetDetectedFeaturesEnum["DragAndDrop"] = "DRAG_AND_DROP";
    CreativeAssetDetectedFeaturesEnum["HashChange"] = "HASH_CHANGE";
    CreativeAssetDetectedFeaturesEnum["History"] = "HISTORY";
    CreativeAssetDetectedFeaturesEnum["Audio"] = "AUDIO";
    CreativeAssetDetectedFeaturesEnum["Video"] = "VIDEO";
    CreativeAssetDetectedFeaturesEnum["IndexedDb"] = "INDEXED_DB";
    CreativeAssetDetectedFeaturesEnum["InputAttrAutocomplete"] = "INPUT_ATTR_AUTOCOMPLETE";
    CreativeAssetDetectedFeaturesEnum["InputAttrAutofocus"] = "INPUT_ATTR_AUTOFOCUS";
    CreativeAssetDetectedFeaturesEnum["InputAttrList"] = "INPUT_ATTR_LIST";
    CreativeAssetDetectedFeaturesEnum["InputAttrPlaceholder"] = "INPUT_ATTR_PLACEHOLDER";
    CreativeAssetDetectedFeaturesEnum["InputAttrMax"] = "INPUT_ATTR_MAX";
    CreativeAssetDetectedFeaturesEnum["InputAttrMin"] = "INPUT_ATTR_MIN";
    CreativeAssetDetectedFeaturesEnum["InputAttrMultiple"] = "INPUT_ATTR_MULTIPLE";
    CreativeAssetDetectedFeaturesEnum["InputAttrPattern"] = "INPUT_ATTR_PATTERN";
    CreativeAssetDetectedFeaturesEnum["InputAttrRequired"] = "INPUT_ATTR_REQUIRED";
    CreativeAssetDetectedFeaturesEnum["InputAttrStep"] = "INPUT_ATTR_STEP";
    CreativeAssetDetectedFeaturesEnum["InputTypeSearch"] = "INPUT_TYPE_SEARCH";
    CreativeAssetDetectedFeaturesEnum["InputTypeTel"] = "INPUT_TYPE_TEL";
    CreativeAssetDetectedFeaturesEnum["InputTypeUrl"] = "INPUT_TYPE_URL";
    CreativeAssetDetectedFeaturesEnum["InputTypeEmail"] = "INPUT_TYPE_EMAIL";
    CreativeAssetDetectedFeaturesEnum["InputTypeDatetime"] = "INPUT_TYPE_DATETIME";
    CreativeAssetDetectedFeaturesEnum["InputTypeDate"] = "INPUT_TYPE_DATE";
    CreativeAssetDetectedFeaturesEnum["InputTypeMonth"] = "INPUT_TYPE_MONTH";
    CreativeAssetDetectedFeaturesEnum["InputTypeWeek"] = "INPUT_TYPE_WEEK";
    CreativeAssetDetectedFeaturesEnum["InputTypeTime"] = "INPUT_TYPE_TIME";
    CreativeAssetDetectedFeaturesEnum["InputTypeDatetimeLocal"] = "INPUT_TYPE_DATETIME_LOCAL";
    CreativeAssetDetectedFeaturesEnum["InputTypeNumber"] = "INPUT_TYPE_NUMBER";
    CreativeAssetDetectedFeaturesEnum["InputTypeRange"] = "INPUT_TYPE_RANGE";
    CreativeAssetDetectedFeaturesEnum["InputTypeColor"] = "INPUT_TYPE_COLOR";
    CreativeAssetDetectedFeaturesEnum["LocalStorage"] = "LOCAL_STORAGE";
    CreativeAssetDetectedFeaturesEnum["PostMessage"] = "POST_MESSAGE";
    CreativeAssetDetectedFeaturesEnum["SessionStorage"] = "SESSION_STORAGE";
    CreativeAssetDetectedFeaturesEnum["WebSockets"] = "WEB_SOCKETS";
    CreativeAssetDetectedFeaturesEnum["WebSqlDatabase"] = "WEB_SQL_DATABASE";
    CreativeAssetDetectedFeaturesEnum["WebWorkers"] = "WEB_WORKERS";
    CreativeAssetDetectedFeaturesEnum["GeoLocation"] = "GEO_LOCATION";
    CreativeAssetDetectedFeaturesEnum["InlineSvg"] = "INLINE_SVG";
    CreativeAssetDetectedFeaturesEnum["Smil"] = "SMIL";
    CreativeAssetDetectedFeaturesEnum["SvgHref"] = "SVG_HREF";
    CreativeAssetDetectedFeaturesEnum["SvgClipPaths"] = "SVG_CLIP_PATHS";
    CreativeAssetDetectedFeaturesEnum["Touch"] = "TOUCH";
    CreativeAssetDetectedFeaturesEnum["Webgl"] = "WEBGL";
    CreativeAssetDetectedFeaturesEnum["SvgFilters"] = "SVG_FILTERS";
    CreativeAssetDetectedFeaturesEnum["SvgFeImage"] = "SVG_FE_IMAGE";
})(CreativeAssetDetectedFeaturesEnum || (CreativeAssetDetectedFeaturesEnum = {}));
export var CreativeAssetDisplayTypeEnum;
(function (CreativeAssetDisplayTypeEnum) {
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeInpage"] = "ASSET_DISPLAY_TYPE_INPAGE";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeFloating"] = "ASSET_DISPLAY_TYPE_FLOATING";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeOverlay"] = "ASSET_DISPLAY_TYPE_OVERLAY";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeExpanding"] = "ASSET_DISPLAY_TYPE_EXPANDING";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeFlashInFlash"] = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeFlashInFlashExpanding"] = "ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypePeelDown"] = "ASSET_DISPLAY_TYPE_PEEL_DOWN";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeVpaidLinear"] = "ASSET_DISPLAY_TYPE_VPAID_LINEAR";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeVpaidNonLinear"] = "ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR";
    CreativeAssetDisplayTypeEnum["AssetDisplayTypeBackdrop"] = "ASSET_DISPLAY_TYPE_BACKDROP";
})(CreativeAssetDisplayTypeEnum || (CreativeAssetDisplayTypeEnum = {}));
export var CreativeAssetDurationTypeEnum;
(function (CreativeAssetDurationTypeEnum) {
    CreativeAssetDurationTypeEnum["AssetDurationTypeAuto"] = "ASSET_DURATION_TYPE_AUTO";
    CreativeAssetDurationTypeEnum["AssetDurationTypeNone"] = "ASSET_DURATION_TYPE_NONE";
    CreativeAssetDurationTypeEnum["AssetDurationTypeCustom"] = "ASSET_DURATION_TYPE_CUSTOM";
})(CreativeAssetDurationTypeEnum || (CreativeAssetDurationTypeEnum = {}));
export var CreativeAssetOrientationEnum;
(function (CreativeAssetOrientationEnum) {
    CreativeAssetOrientationEnum["Landscape"] = "LANDSCAPE";
    CreativeAssetOrientationEnum["Portrait"] = "PORTRAIT";
    CreativeAssetOrientationEnum["Square"] = "SQUARE";
})(CreativeAssetOrientationEnum || (CreativeAssetOrientationEnum = {}));
export var CreativeAssetPositionLeftUnitEnum;
(function (CreativeAssetPositionLeftUnitEnum) {
    CreativeAssetPositionLeftUnitEnum["OffsetUnitPixel"] = "OFFSET_UNIT_PIXEL";
    CreativeAssetPositionLeftUnitEnum["OffsetUnitPercent"] = "OFFSET_UNIT_PERCENT";
    CreativeAssetPositionLeftUnitEnum["OffsetUnitPixelFromCenter"] = "OFFSET_UNIT_PIXEL_FROM_CENTER";
})(CreativeAssetPositionLeftUnitEnum || (CreativeAssetPositionLeftUnitEnum = {}));
export var CreativeAssetPositionTopUnitEnum;
(function (CreativeAssetPositionTopUnitEnum) {
    CreativeAssetPositionTopUnitEnum["OffsetUnitPixel"] = "OFFSET_UNIT_PIXEL";
    CreativeAssetPositionTopUnitEnum["OffsetUnitPercent"] = "OFFSET_UNIT_PERCENT";
    CreativeAssetPositionTopUnitEnum["OffsetUnitPixelFromCenter"] = "OFFSET_UNIT_PIXEL_FROM_CENTER";
})(CreativeAssetPositionTopUnitEnum || (CreativeAssetPositionTopUnitEnum = {}));
export var CreativeAssetRoleEnum;
(function (CreativeAssetRoleEnum) {
    CreativeAssetRoleEnum["Primary"] = "PRIMARY";
    CreativeAssetRoleEnum["BackupImage"] = "BACKUP_IMAGE";
    CreativeAssetRoleEnum["AdditionalImage"] = "ADDITIONAL_IMAGE";
    CreativeAssetRoleEnum["AdditionalFlash"] = "ADDITIONAL_FLASH";
    CreativeAssetRoleEnum["ParentVideo"] = "PARENT_VIDEO";
    CreativeAssetRoleEnum["TranscodedVideo"] = "TRANSCODED_VIDEO";
    CreativeAssetRoleEnum["Other"] = "OTHER";
    CreativeAssetRoleEnum["AlternateVideo"] = "ALTERNATE_VIDEO";
    CreativeAssetRoleEnum["ParentAudio"] = "PARENT_AUDIO";
    CreativeAssetRoleEnum["TranscodedAudio"] = "TRANSCODED_AUDIO";
})(CreativeAssetRoleEnum || (CreativeAssetRoleEnum = {}));
export var CreativeAssetStartTimeTypeEnum;
(function (CreativeAssetStartTimeTypeEnum) {
    CreativeAssetStartTimeTypeEnum["AssetStartTimeTypeNone"] = "ASSET_START_TIME_TYPE_NONE";
    CreativeAssetStartTimeTypeEnum["AssetStartTimeTypeCustom"] = "ASSET_START_TIME_TYPE_CUSTOM";
})(CreativeAssetStartTimeTypeEnum || (CreativeAssetStartTimeTypeEnum = {}));
export var CreativeAssetWindowModeEnum;
(function (CreativeAssetWindowModeEnum) {
    CreativeAssetWindowModeEnum["Opaque"] = "OPAQUE";
    CreativeAssetWindowModeEnum["Window"] = "WINDOW";
    CreativeAssetWindowModeEnum["Transparent"] = "TRANSPARENT";
})(CreativeAssetWindowModeEnum || (CreativeAssetWindowModeEnum = {}));
// CreativeAsset
/**
 * Creative Asset.
**/
var CreativeAsset = /** @class */ (function (_super) {
    __extends(CreativeAsset, _super);
    function CreativeAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionScript3" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "actionScript3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalSizes", elemType: Size }),
        __metadata("design:type", Array)
    ], CreativeAsset.prototype, "additionalSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alignment" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "alignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artworkType" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "artworkType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetIdentifier" }),
        __metadata("design:type", CreativeAssetId)
    ], CreativeAsset.prototype, "assetIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioBitRate" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "audioBitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioSampleRate" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "audioSampleRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupImageExit" }),
        __metadata("design:type", CreativeCustomEvent)
    ], CreativeAsset.prototype, "backupImageExit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bitRate" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "bitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childAssetType" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "childAssetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collapsedSize" }),
        __metadata("design:type", Size)
    ], CreativeAsset.prototype, "collapsedSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companionCreativeIds" }),
        __metadata("design:type", Array)
    ], CreativeAsset.prototype, "companionCreativeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customStartTimeValue" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "customStartTimeValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedFeatures" }),
        __metadata("design:type", Array)
    ], CreativeAsset.prototype, "detectedFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayType" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "displayType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationType" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "durationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expandedDimension" }),
        __metadata("design:type", Size)
    ], CreativeAsset.prototype, "expandedDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSize" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "fileSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flashVersion" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "flashVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frameRate" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "frameRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideFlashObjects" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "hideFlashObjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideSelectionBoxes" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "hideSelectionBoxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontallyLocked" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "horizontallyLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], CreativeAsset.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaDuration" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "mediaDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", OffsetPosition)
    ], CreativeAsset.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orientation" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "orientation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalBackup" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "originalBackup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=politeLoad" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "politeLoad", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", OffsetPosition)
    ], CreativeAsset.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionLeftUnit" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "positionLeftUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionTopUnit" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "positionTopUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progressiveServingUrl" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "progressiveServingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushdown" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "pushdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pushdownDuration" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "pushdownDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Size)
    ], CreativeAsset.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCompliant" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "sslCompliant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimeType" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "startTimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingServingUrl" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "streamingServingUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transparency" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "transparency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticallyLocked" }),
        __metadata("design:type", Boolean)
    ], CreativeAsset.prototype, "verticallyLocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windowMode" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "windowMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zIndex" }),
        __metadata("design:type", Number)
    ], CreativeAsset.prototype, "zIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zipFilename" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "zipFilename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zipFilesize" }),
        __metadata("design:type", String)
    ], CreativeAsset.prototype, "zipFilesize", void 0);
    return CreativeAsset;
}(SpeakeasyBase));
export { CreativeAsset };
