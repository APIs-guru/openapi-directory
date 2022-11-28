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
export var ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum;
(function (ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum) {
    ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeUnspecified"] = "AD_TYPE_UNSPECIFIED";
    ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeDisplay"] = "AD_TYPE_DISPLAY";
    ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeVideo"] = "AD_TYPE_VIDEO";
    ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeAudio"] = "AD_TYPE_AUDIO";
})(ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum || (ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = {}));
export var ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
(function (ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum) {
    ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionUnspecified"] = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED";
    ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionUnknown"] = "CONTENT_OUTSTREAM_POSITION_UNKNOWN";
    ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionInArticle"] = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE";
    ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionInBanner"] = "CONTENT_OUTSTREAM_POSITION_IN_BANNER";
    ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionInFeed"] = "CONTENT_OUTSTREAM_POSITION_IN_FEED";
    ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum["ContentOutstreamPositionInterstitial"] = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL";
})(ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum || (ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum = {}));
// ContentOutstreamPositionAssignedTargetingOptionDetailsInput
/**
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
var ContentOutstreamPositionAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(ContentOutstreamPositionAssignedTargetingOptionDetailsInput, _super);
    function ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentOutstreamPosition" }),
        __metadata("design:type", String)
    ], ContentOutstreamPositionAssignedTargetingOptionDetailsInput.prototype, "contentOutstreamPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], ContentOutstreamPositionAssignedTargetingOptionDetailsInput.prototype, "targetingOptionId", void 0);
    return ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { ContentOutstreamPositionAssignedTargetingOptionDetailsInput };
// ContentOutstreamPositionAssignedTargetingOptionDetails
/**
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
**/
var ContentOutstreamPositionAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ContentOutstreamPositionAssignedTargetingOptionDetails, _super);
    function ContentOutstreamPositionAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adType" }),
        __metadata("design:type", String)
    ], ContentOutstreamPositionAssignedTargetingOptionDetails.prototype, "adType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentOutstreamPosition" }),
        __metadata("design:type", String)
    ], ContentOutstreamPositionAssignedTargetingOptionDetails.prototype, "contentOutstreamPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], ContentOutstreamPositionAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return ContentOutstreamPositionAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { ContentOutstreamPositionAssignedTargetingOptionDetails };
