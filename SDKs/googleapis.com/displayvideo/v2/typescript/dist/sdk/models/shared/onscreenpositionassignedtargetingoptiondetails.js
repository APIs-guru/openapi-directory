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
export var OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum;
(function (OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum) {
    OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeUnspecified"] = "AD_TYPE_UNSPECIFIED";
    OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeDisplay"] = "AD_TYPE_DISPLAY";
    OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeVideo"] = "AD_TYPE_VIDEO";
    OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum["AdTypeAudio"] = "AD_TYPE_AUDIO";
})(OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum || (OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum = {}));
export var OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum;
(function (OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum) {
    OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum["OnScreenPositionUnspecified"] = "ON_SCREEN_POSITION_UNSPECIFIED";
    OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum["OnScreenPositionUnknown"] = "ON_SCREEN_POSITION_UNKNOWN";
    OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum["OnScreenPositionAboveTheFold"] = "ON_SCREEN_POSITION_ABOVE_THE_FOLD";
    OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum["OnScreenPositionBelowTheFold"] = "ON_SCREEN_POSITION_BELOW_THE_FOLD";
})(OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum || (OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum = {}));
// OnScreenPositionAssignedTargetingOptionDetails
/**
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
var OnScreenPositionAssignedTargetingOptionDetails = /** @class */ (function (_super) {
    __extends(OnScreenPositionAssignedTargetingOptionDetails, _super);
    function OnScreenPositionAssignedTargetingOptionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adType" }),
        __metadata("design:type", String)
    ], OnScreenPositionAssignedTargetingOptionDetails.prototype, "adType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onScreenPosition" }),
        __metadata("design:type", String)
    ], OnScreenPositionAssignedTargetingOptionDetails.prototype, "onScreenPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], OnScreenPositionAssignedTargetingOptionDetails.prototype, "targetingOptionId", void 0);
    return OnScreenPositionAssignedTargetingOptionDetails;
}(SpeakeasyBase));
export { OnScreenPositionAssignedTargetingOptionDetails };
// OnScreenPositionAssignedTargetingOptionDetailsInput
/**
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
**/
var OnScreenPositionAssignedTargetingOptionDetailsInput = /** @class */ (function (_super) {
    __extends(OnScreenPositionAssignedTargetingOptionDetailsInput, _super);
    function OnScreenPositionAssignedTargetingOptionDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetingOptionId" }),
        __metadata("design:type", String)
    ], OnScreenPositionAssignedTargetingOptionDetailsInput.prototype, "targetingOptionId", void 0);
    return OnScreenPositionAssignedTargetingOptionDetailsInput;
}(SpeakeasyBase));
export { OnScreenPositionAssignedTargetingOptionDetailsInput };
