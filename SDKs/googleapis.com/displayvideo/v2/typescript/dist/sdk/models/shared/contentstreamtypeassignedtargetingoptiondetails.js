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
export var ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum;
(function (ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum) {
    ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum["ContentStreamTypeUnspecified"] = "CONTENT_STREAM_TYPE_UNSPECIFIED";
    ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum["ContentLiveStream"] = "CONTENT_LIVE_STREAM";
    ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum["ContentOnDemand"] = "CONTENT_ON_DEMAND";
})(ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum || (ContentStreamTypeAssignedTargetingOptionDetailsContentStreamTypeEnum = {}));
// ContentStreamTypeAssignedTargetingOptionDetailsInput
/**
 * Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
**/
var ContentStreamTypeAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(ContentStreamTypeAssignedTargetingOptionDetailsInput, _super);
    function ContentStreamTypeAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], ContentStreamTypeAssignedTargetingOptionDetailsInput.prototype, "targetingOptionId", void 0);
    return ContentStreamTypeAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { ContentStreamTypeAssignedTargetingOptionDetailsInput };
// ContentStreamTypeAssignedTargetingOptionDetails
/**
 * Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.
**/
var ContentStreamTypeAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(ContentStreamTypeAssignedTargetingOptionDetails, _super);
    function ContentStreamTypeAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentStreamType" }),
        __metadata("design:type", String)
    ], ContentStreamTypeAssignedTargetingOptionDetails.prototype, "contentStreamType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], ContentStreamTypeAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return ContentStreamTypeAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { ContentStreamTypeAssignedTargetingOptionDetails };
