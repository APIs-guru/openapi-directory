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
export var TagDataFormatEnum;
(function (TagDataFormatEnum) {
    TagDataFormatEnum["PlacementTagStandard"] = "PLACEMENT_TAG_STANDARD";
    TagDataFormatEnum["PlacementTagIframeJavascript"] = "PLACEMENT_TAG_IFRAME_JAVASCRIPT";
    TagDataFormatEnum["PlacementTagIframeIlayer"] = "PLACEMENT_TAG_IFRAME_ILAYER";
    TagDataFormatEnum["PlacementTagInternalRedirect"] = "PLACEMENT_TAG_INTERNAL_REDIRECT";
    TagDataFormatEnum["PlacementTagJavascript"] = "PLACEMENT_TAG_JAVASCRIPT";
    TagDataFormatEnum["PlacementTagInterstitialIframeJavascript"] = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT";
    TagDataFormatEnum["PlacementTagInterstitialInternalRedirect"] = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT";
    TagDataFormatEnum["PlacementTagInterstitialJavascript"] = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT";
    TagDataFormatEnum["PlacementTagClickCommands"] = "PLACEMENT_TAG_CLICK_COMMANDS";
    TagDataFormatEnum["PlacementTagInstreamVideoPrefetch"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH";
    TagDataFormatEnum["PlacementTagTracking"] = "PLACEMENT_TAG_TRACKING";
    TagDataFormatEnum["PlacementTagTrackingIframe"] = "PLACEMENT_TAG_TRACKING_IFRAME";
    TagDataFormatEnum["PlacementTagTrackingJavascript"] = "PLACEMENT_TAG_TRACKING_JAVASCRIPT";
    TagDataFormatEnum["PlacementTagInstreamVideoPrefetchVast3"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3";
    TagDataFormatEnum["PlacementTagIframeJavascriptLegacy"] = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY";
    TagDataFormatEnum["PlacementTagJavascriptLegacy"] = "PLACEMENT_TAG_JAVASCRIPT_LEGACY";
    TagDataFormatEnum["PlacementTagInterstitialIframeJavascriptLegacy"] = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY";
    TagDataFormatEnum["PlacementTagInterstitialJavascriptLegacy"] = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY";
    TagDataFormatEnum["PlacementTagInstreamVideoPrefetchVast4"] = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4";
    TagDataFormatEnum["PlacementTagTrackingThirdPartyMeasurement"] = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT";
})(TagDataFormatEnum || (TagDataFormatEnum = {}));
// TagData
/**
 * Placement Tag Data
**/
var TagData = /** @class */ (function (_super) {
    __extends(TagData, _super);
    function TagData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adId" }),
        __metadata("design:type", String)
    ], TagData.prototype, "adId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickTag" }),
        __metadata("design:type", String)
    ], TagData.prototype, "clickTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeId" }),
        __metadata("design:type", String)
    ], TagData.prototype, "creativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], TagData.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionTag" }),
        __metadata("design:type", String)
    ], TagData.prototype, "impressionTag", void 0);
    return TagData;
}(SpeakeasyBase));
export { TagData };
