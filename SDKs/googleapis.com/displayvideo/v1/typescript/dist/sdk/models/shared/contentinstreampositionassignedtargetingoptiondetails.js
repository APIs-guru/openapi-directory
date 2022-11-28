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
export var ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum;
(function (ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum) {
    ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeUnspecified"] = "AD_TYPE_UNSPECIFIED";
    ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeDisplay"] = "AD_TYPE_DISPLAY";
    ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeVideo"] = "AD_TYPE_VIDEO";
    ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeAudio"] = "AD_TYPE_AUDIO";
})(ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum || (ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum = {}));
export var ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
(function (ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum) {
    ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum["ContentInstreamPositionUnspecified"] = "CONTENT_INSTREAM_POSITION_UNSPECIFIED";
    ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum["ContentInstreamPositionPreRoll"] = "CONTENT_INSTREAM_POSITION_PRE_ROLL";
    ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum["ContentInstreamPositionMidRoll"] = "CONTENT_INSTREAM_POSITION_MID_ROLL";
    ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum["ContentInstreamPositionPostRoll"] = "CONTENT_INSTREAM_POSITION_POST_ROLL";
    ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum["ContentInstreamPositionUnknown"] = "CONTENT_INSTREAM_POSITION_UNKNOWN";
})(ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum || (ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum = {}));
// ContentInstreamPositionAssignedTargetingOptionDetails
/**
 * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
**/
var ContentInstreamPositionAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ContentInstreamPositionAssignedTargetingOptionDetails, _super);
    function ContentInstreamPositionAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adType" }),
        __metadata("design:type", String)
    ], ContentInstreamPositionAssignedTargetingOptionDetails.prototype, "adType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentInstreamPosition" }),
        __metadata("design:type", String)
    ], ContentInstreamPositionAssignedTargetingOptionDetails.prototype, "contentInstreamPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], ContentInstreamPositionAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return ContentInstreamPositionAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { ContentInstreamPositionAssignedTargetingOptionDetails };
// ContentInstreamPositionAssignedTargetingOptionDetailsInput
/**
 * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
**/
var ContentInstreamPositionAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(ContentInstreamPositionAssignedTargetingOptionDetailsInput, _super);
    function ContentInstreamPositionAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentInstreamPosition" }),
        __metadata("design:type", String)
    ], ContentInstreamPositionAssignedTargetingOptionDetailsInput.prototype, "contentInstreamPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], ContentInstreamPositionAssignedTargetingOptionDetailsInput.prototype, "targetingOptionId", void 0);
    return ContentInstreamPositionAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { ContentInstreamPositionAssignedTargetingOptionDetailsInput };
