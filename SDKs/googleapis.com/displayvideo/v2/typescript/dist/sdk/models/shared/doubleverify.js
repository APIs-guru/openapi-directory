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
import { DoubleVerifyAppStarRating } from "./doubleverifyappstarrating";
import { DoubleVerifyBrandSafetyCategories } from "./doubleverifybrandsafetycategories";
import { DoubleVerifyDisplayViewability } from "./doubleverifydisplayviewability";
import { DoubleVerifyFraudInvalidTraffic } from "./doubleverifyfraudinvalidtraffic";
import { DoubleVerifyVideoViewability } from "./doubleverifyvideoviewability";
export var DoubleVerifyAvoidedAgeRatingsEnum;
(function (DoubleVerifyAvoidedAgeRatingsEnum) {
    DoubleVerifyAvoidedAgeRatingsEnum["AgeRatingUnspecified"] = "AGE_RATING_UNSPECIFIED";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRateUnknown"] = "APP_AGE_RATE_UNKNOWN";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate4Plus"] = "APP_AGE_RATE_4_PLUS";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate9Plus"] = "APP_AGE_RATE_9_PLUS";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate12Plus"] = "APP_AGE_RATE_12_PLUS";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate17Plus"] = "APP_AGE_RATE_17_PLUS";
    DoubleVerifyAvoidedAgeRatingsEnum["AppAgeRate18Plus"] = "APP_AGE_RATE_18_PLUS";
})(DoubleVerifyAvoidedAgeRatingsEnum || (DoubleVerifyAvoidedAgeRatingsEnum = {}));
// DoubleVerify
/**
 * Details of DoubleVerify settings.
**/
var DoubleVerify = /** @class */ (function (_super) {
    __extends(DoubleVerify, _super);
    function DoubleVerify() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appStarRating" }),
        __metadata("design:type", DoubleVerifyAppStarRating)
    ], DoubleVerify.prototype, "appStarRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avoidedAgeRatings" }),
        __metadata("design:type", Array)
    ], DoubleVerify.prototype, "avoidedAgeRatings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brandSafetyCategories" }),
        __metadata("design:type", DoubleVerifyBrandSafetyCategories)
    ], DoubleVerify.prototype, "brandSafetyCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customSegmentId" }),
        __metadata("design:type", String)
    ], DoubleVerify.prototype, "customSegmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayViewability" }),
        __metadata("design:type", DoubleVerifyDisplayViewability)
    ], DoubleVerify.prototype, "displayViewability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fraudInvalidTraffic" }),
        __metadata("design:type", DoubleVerifyFraudInvalidTraffic)
    ], DoubleVerify.prototype, "fraudInvalidTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoViewability" }),
        __metadata("design:type", DoubleVerifyVideoViewability)
    ], DoubleVerify.prototype, "videoViewability", void 0);
    return DoubleVerify;
}(SpeakeasyBase));
export { DoubleVerify };
