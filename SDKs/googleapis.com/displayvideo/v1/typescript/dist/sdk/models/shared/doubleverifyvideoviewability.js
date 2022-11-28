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
export var DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
(function (DoubleVerifyVideoViewabilityPlayerImpressionRateEnum) {
    DoubleVerifyVideoViewabilityPlayerImpressionRateEnum["PlayerSize400X300Unspecified"] = "PLAYER_SIZE_400X300_UNSPECIFIED";
    DoubleVerifyVideoViewabilityPlayerImpressionRateEnum["PlayerSize400X30095"] = "PLAYER_SIZE_400X300_95";
    DoubleVerifyVideoViewabilityPlayerImpressionRateEnum["PlayerSize400X30070"] = "PLAYER_SIZE_400X300_70";
    DoubleVerifyVideoViewabilityPlayerImpressionRateEnum["PlayerSize400X30025"] = "PLAYER_SIZE_400X300_25";
    DoubleVerifyVideoViewabilityPlayerImpressionRateEnum["PlayerSize400X3005"] = "PLAYER_SIZE_400X300_5";
})(DoubleVerifyVideoViewabilityPlayerImpressionRateEnum || (DoubleVerifyVideoViewabilityPlayerImpressionRateEnum = {}));
export var DoubleVerifyVideoViewabilityVideoIabEnum;
(function (DoubleVerifyVideoViewabilityVideoIabEnum) {
    DoubleVerifyVideoViewabilityVideoIabEnum["VideoIabUnspecified"] = "VIDEO_IAB_UNSPECIFIED";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability80PercentHigher"] = "IAB_VIEWABILITY_80_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability75PercentHigher"] = "IAB_VIEWABILITY_75_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability70PercentHigher"] = "IAB_VIEWABILITY_70_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability65PercentHihger"] = "IAB_VIEWABILITY_65_PERCENT_HIHGER";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability60PercentHigher"] = "IAB_VIEWABILITY_60_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability55PercentHihger"] = "IAB_VIEWABILITY_55_PERCENT_HIHGER";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability50PercentHigher"] = "IAB_VIEWABILITY_50_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability40PercentHihger"] = "IAB_VIEWABILITY_40_PERCENT_HIHGER";
    DoubleVerifyVideoViewabilityVideoIabEnum["IabViewability30PercentHihger"] = "IAB_VIEWABILITY_30_PERCENT_HIHGER";
})(DoubleVerifyVideoViewabilityVideoIabEnum || (DoubleVerifyVideoViewabilityVideoIabEnum = {}));
export var DoubleVerifyVideoViewabilityVideoViewableRateEnum;
(function (DoubleVerifyVideoViewabilityVideoViewableRateEnum) {
    DoubleVerifyVideoViewabilityVideoViewableRateEnum["VideoViewableRateUnspecified"] = "VIDEO_VIEWABLE_RATE_UNSPECIFIED";
    DoubleVerifyVideoViewabilityVideoViewableRateEnum["ViewedPerformance40PercentHigher"] = "VIEWED_PERFORMANCE_40_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoViewableRateEnum["ViewedPerformance35PercentHigher"] = "VIEWED_PERFORMANCE_35_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoViewableRateEnum["ViewedPerformance30PercentHigher"] = "VIEWED_PERFORMANCE_30_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoViewableRateEnum["ViewedPerformance25PercentHigher"] = "VIEWED_PERFORMANCE_25_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoViewableRateEnum["ViewedPerformance20PercentHigher"] = "VIEWED_PERFORMANCE_20_PERCENT_HIGHER";
    DoubleVerifyVideoViewabilityVideoViewableRateEnum["ViewedPerformance10PercentHigher"] = "VIEWED_PERFORMANCE_10_PERCENT_HIGHER";
})(DoubleVerifyVideoViewabilityVideoViewableRateEnum || (DoubleVerifyVideoViewabilityVideoViewableRateEnum = {}));
// DoubleVerifyVideoViewability
/**
 * Details of DoubleVerify video viewability settings.
**/
var DoubleVerifyVideoViewability = /** @class */ (function (_super) {
    __extends(DoubleVerifyVideoViewability, _super);
    function DoubleVerifyVideoViewability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playerImpressionRate" }),
        __metadata("design:type", String)
    ], DoubleVerifyVideoViewability.prototype, "playerImpressionRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoIab" }),
        __metadata("design:type", String)
    ], DoubleVerifyVideoViewability.prototype, "videoIab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoViewableRate" }),
        __metadata("design:type", String)
    ], DoubleVerifyVideoViewability.prototype, "videoViewableRate", void 0);
    return DoubleVerifyVideoViewability;
}(SpeakeasyBase));
export { DoubleVerifyVideoViewability };
