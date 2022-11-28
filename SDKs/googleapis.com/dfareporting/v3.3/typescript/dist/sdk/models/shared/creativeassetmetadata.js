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
import { CreativeAssetId } from "./creativeassetid";
import { ClickTag } from "./clicktag";
import { DimensionValue } from "./dimensionvalue";
export var CreativeAssetMetadataDetectedFeaturesEnum;
(function (CreativeAssetMetadataDetectedFeaturesEnum) {
    CreativeAssetMetadataDetectedFeaturesEnum["CssFontFace"] = "CSS_FONT_FACE";
    CreativeAssetMetadataDetectedFeaturesEnum["CssBackgroundSize"] = "CSS_BACKGROUND_SIZE";
    CreativeAssetMetadataDetectedFeaturesEnum["CssBorderImage"] = "CSS_BORDER_IMAGE";
    CreativeAssetMetadataDetectedFeaturesEnum["CssBorderRadius"] = "CSS_BORDER_RADIUS";
    CreativeAssetMetadataDetectedFeaturesEnum["CssBoxShadow"] = "CSS_BOX_SHADOW";
    CreativeAssetMetadataDetectedFeaturesEnum["CssFlexBox"] = "CSS_FLEX_BOX";
    CreativeAssetMetadataDetectedFeaturesEnum["CssHsla"] = "CSS_HSLA";
    CreativeAssetMetadataDetectedFeaturesEnum["CssMultipleBgs"] = "CSS_MULTIPLE_BGS";
    CreativeAssetMetadataDetectedFeaturesEnum["CssOpacity"] = "CSS_OPACITY";
    CreativeAssetMetadataDetectedFeaturesEnum["CssRgba"] = "CSS_RGBA";
    CreativeAssetMetadataDetectedFeaturesEnum["CssTextShadow"] = "CSS_TEXT_SHADOW";
    CreativeAssetMetadataDetectedFeaturesEnum["CssAnimations"] = "CSS_ANIMATIONS";
    CreativeAssetMetadataDetectedFeaturesEnum["CssColumns"] = "CSS_COLUMNS";
    CreativeAssetMetadataDetectedFeaturesEnum["CssGeneratedContent"] = "CSS_GENERATED_CONTENT";
    CreativeAssetMetadataDetectedFeaturesEnum["CssGradients"] = "CSS_GRADIENTS";
    CreativeAssetMetadataDetectedFeaturesEnum["CssReflections"] = "CSS_REFLECTIONS";
    CreativeAssetMetadataDetectedFeaturesEnum["CssTransforms"] = "CSS_TRANSFORMS";
    CreativeAssetMetadataDetectedFeaturesEnum["CssTransforms3D"] = "CSS_TRANSFORMS3D";
    CreativeAssetMetadataDetectedFeaturesEnum["CssTransitions"] = "CSS_TRANSITIONS";
    CreativeAssetMetadataDetectedFeaturesEnum["ApplicationCache"] = "APPLICATION_CACHE";
    CreativeAssetMetadataDetectedFeaturesEnum["Canvas"] = "CANVAS";
    CreativeAssetMetadataDetectedFeaturesEnum["CanvasText"] = "CANVAS_TEXT";
    CreativeAssetMetadataDetectedFeaturesEnum["DragAndDrop"] = "DRAG_AND_DROP";
    CreativeAssetMetadataDetectedFeaturesEnum["HashChange"] = "HASH_CHANGE";
    CreativeAssetMetadataDetectedFeaturesEnum["History"] = "HISTORY";
    CreativeAssetMetadataDetectedFeaturesEnum["Audio"] = "AUDIO";
    CreativeAssetMetadataDetectedFeaturesEnum["Video"] = "VIDEO";
    CreativeAssetMetadataDetectedFeaturesEnum["IndexedDb"] = "INDEXED_DB";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrAutocomplete"] = "INPUT_ATTR_AUTOCOMPLETE";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrAutofocus"] = "INPUT_ATTR_AUTOFOCUS";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrList"] = "INPUT_ATTR_LIST";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrPlaceholder"] = "INPUT_ATTR_PLACEHOLDER";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrMax"] = "INPUT_ATTR_MAX";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrMin"] = "INPUT_ATTR_MIN";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrMultiple"] = "INPUT_ATTR_MULTIPLE";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrPattern"] = "INPUT_ATTR_PATTERN";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrRequired"] = "INPUT_ATTR_REQUIRED";
    CreativeAssetMetadataDetectedFeaturesEnum["InputAttrStep"] = "INPUT_ATTR_STEP";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeSearch"] = "INPUT_TYPE_SEARCH";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeTel"] = "INPUT_TYPE_TEL";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeUrl"] = "INPUT_TYPE_URL";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeEmail"] = "INPUT_TYPE_EMAIL";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeDatetime"] = "INPUT_TYPE_DATETIME";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeDate"] = "INPUT_TYPE_DATE";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeMonth"] = "INPUT_TYPE_MONTH";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeWeek"] = "INPUT_TYPE_WEEK";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeTime"] = "INPUT_TYPE_TIME";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeDatetimeLocal"] = "INPUT_TYPE_DATETIME_LOCAL";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeNumber"] = "INPUT_TYPE_NUMBER";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeRange"] = "INPUT_TYPE_RANGE";
    CreativeAssetMetadataDetectedFeaturesEnum["InputTypeColor"] = "INPUT_TYPE_COLOR";
    CreativeAssetMetadataDetectedFeaturesEnum["LocalStorage"] = "LOCAL_STORAGE";
    CreativeAssetMetadataDetectedFeaturesEnum["PostMessage"] = "POST_MESSAGE";
    CreativeAssetMetadataDetectedFeaturesEnum["SessionStorage"] = "SESSION_STORAGE";
    CreativeAssetMetadataDetectedFeaturesEnum["WebSockets"] = "WEB_SOCKETS";
    CreativeAssetMetadataDetectedFeaturesEnum["WebSqlDatabase"] = "WEB_SQL_DATABASE";
    CreativeAssetMetadataDetectedFeaturesEnum["WebWorkers"] = "WEB_WORKERS";
    CreativeAssetMetadataDetectedFeaturesEnum["GeoLocation"] = "GEO_LOCATION";
    CreativeAssetMetadataDetectedFeaturesEnum["InlineSvg"] = "INLINE_SVG";
    CreativeAssetMetadataDetectedFeaturesEnum["Smil"] = "SMIL";
    CreativeAssetMetadataDetectedFeaturesEnum["SvgHref"] = "SVG_HREF";
    CreativeAssetMetadataDetectedFeaturesEnum["SvgClipPaths"] = "SVG_CLIP_PATHS";
    CreativeAssetMetadataDetectedFeaturesEnum["Touch"] = "TOUCH";
    CreativeAssetMetadataDetectedFeaturesEnum["Webgl"] = "WEBGL";
    CreativeAssetMetadataDetectedFeaturesEnum["SvgFilters"] = "SVG_FILTERS";
    CreativeAssetMetadataDetectedFeaturesEnum["SvgFeImage"] = "SVG_FE_IMAGE";
})(CreativeAssetMetadataDetectedFeaturesEnum || (CreativeAssetMetadataDetectedFeaturesEnum = {}));
export var CreativeAssetMetadataWarnedValidationRulesEnum;
(function (CreativeAssetMetadataWarnedValidationRulesEnum) {
    CreativeAssetMetadataWarnedValidationRulesEnum["ClickTagNonTopLevel"] = "CLICK_TAG_NON_TOP_LEVEL";
    CreativeAssetMetadataWarnedValidationRulesEnum["ClickTagMissing"] = "CLICK_TAG_MISSING";
    CreativeAssetMetadataWarnedValidationRulesEnum["ClickTagMoreThanOne"] = "CLICK_TAG_MORE_THAN_ONE";
    CreativeAssetMetadataWarnedValidationRulesEnum["ClickTagInvalid"] = "CLICK_TAG_INVALID";
    CreativeAssetMetadataWarnedValidationRulesEnum["OrphanedAsset"] = "ORPHANED_ASSET";
    CreativeAssetMetadataWarnedValidationRulesEnum["PrimaryHtmlMissing"] = "PRIMARY_HTML_MISSING";
    CreativeAssetMetadataWarnedValidationRulesEnum["ExternalFileReferenced"] = "EXTERNAL_FILE_REFERENCED";
    CreativeAssetMetadataWarnedValidationRulesEnum["MraidReferenced"] = "MRAID_REFERENCED";
    CreativeAssetMetadataWarnedValidationRulesEnum["AdmobReferenced"] = "ADMOB_REFERENCED";
    CreativeAssetMetadataWarnedValidationRulesEnum["FileTypeInvalid"] = "FILE_TYPE_INVALID";
    CreativeAssetMetadataWarnedValidationRulesEnum["ZipInvalid"] = "ZIP_INVALID";
    CreativeAssetMetadataWarnedValidationRulesEnum["LinkedFileNotFound"] = "LINKED_FILE_NOT_FOUND";
    CreativeAssetMetadataWarnedValidationRulesEnum["MaxFlashVersion11"] = "MAX_FLASH_VERSION_11";
    CreativeAssetMetadataWarnedValidationRulesEnum["NotSslCompliant"] = "NOT_SSL_COMPLIANT";
    CreativeAssetMetadataWarnedValidationRulesEnum["FileDetailEmpty"] = "FILE_DETAIL_EMPTY";
    CreativeAssetMetadataWarnedValidationRulesEnum["AssetInvalid"] = "ASSET_INVALID";
    CreativeAssetMetadataWarnedValidationRulesEnum["GwdPropertiesInvalid"] = "GWD_PROPERTIES_INVALID";
    CreativeAssetMetadataWarnedValidationRulesEnum["EnablerUnsupportedMethodDcm"] = "ENABLER_UNSUPPORTED_METHOD_DCM";
    CreativeAssetMetadataWarnedValidationRulesEnum["AssetFormatUnsupportedDcm"] = "ASSET_FORMAT_UNSUPPORTED_DCM";
    CreativeAssetMetadataWarnedValidationRulesEnum["ComponentUnsupportedDcm"] = "COMPONENT_UNSUPPORTED_DCM";
    CreativeAssetMetadataWarnedValidationRulesEnum["Html5FeatureUnsupported"] = "HTML5_FEATURE_UNSUPPORTED";
    CreativeAssetMetadataWarnedValidationRulesEnum["ClickTagInGwd"] = "CLICK_TAG_IN_GWD";
    CreativeAssetMetadataWarnedValidationRulesEnum["ClickTagHardCoded"] = "CLICK_TAG_HARD_CODED";
    CreativeAssetMetadataWarnedValidationRulesEnum["SvgInvalid"] = "SVG_INVALID";
    CreativeAssetMetadataWarnedValidationRulesEnum["ClickTagInRichMedia"] = "CLICK_TAG_IN_RICH_MEDIA";
})(CreativeAssetMetadataWarnedValidationRulesEnum || (CreativeAssetMetadataWarnedValidationRulesEnum = {}));
// CreativeAssetMetadata
/**
 * CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
**/
var CreativeAssetMetadata = /** @class */ (function (_super) {
    __extends(CreativeAssetMetadata, _super);
    function CreativeAssetMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetIdentifier" }),
        __metadata("design:type", CreativeAssetId)
    ], CreativeAssetMetadata.prototype, "assetIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickTags", elemType: ClickTag }),
        __metadata("design:type", Array)
    ], CreativeAssetMetadata.prototype, "clickTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectedFeatures" }),
        __metadata("design:type", Array)
    ], CreativeAssetMetadata.prototype, "detectedFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreativeAssetMetadata.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], CreativeAssetMetadata.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CreativeAssetMetadata.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnedValidationRules" }),
        __metadata("design:type", Array)
    ], CreativeAssetMetadata.prototype, "warnedValidationRules", void 0);
    return CreativeAssetMetadata;
}(SpeakeasyBase));
export { CreativeAssetMetadata };
