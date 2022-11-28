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
export var DoubleVerifyDisplayViewabilityIabEnum;
(function (DoubleVerifyDisplayViewabilityIabEnum) {
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRateUnspecified"] = "IAB_VIEWED_RATE_UNSPECIFIED";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate80PercentHigher"] = "IAB_VIEWED_RATE_80_PERCENT_HIGHER";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate75PercentHigher"] = "IAB_VIEWED_RATE_75_PERCENT_HIGHER";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate70PercentHigher"] = "IAB_VIEWED_RATE_70_PERCENT_HIGHER";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate65PercentHigher"] = "IAB_VIEWED_RATE_65_PERCENT_HIGHER";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate60PercentHigher"] = "IAB_VIEWED_RATE_60_PERCENT_HIGHER";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate55PercentHigher"] = "IAB_VIEWED_RATE_55_PERCENT_HIGHER";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate50PercentHigher"] = "IAB_VIEWED_RATE_50_PERCENT_HIGHER";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate40PercentHigher"] = "IAB_VIEWED_RATE_40_PERCENT_HIGHER";
    DoubleVerifyDisplayViewabilityIabEnum["IabViewedRate30PercentHigher"] = "IAB_VIEWED_RATE_30_PERCENT_HIGHER";
})(DoubleVerifyDisplayViewabilityIabEnum || (DoubleVerifyDisplayViewabilityIabEnum = {}));
export var DoubleVerifyDisplayViewabilityViewableDuringEnum;
(function (DoubleVerifyDisplayViewabilityViewableDuringEnum) {
    DoubleVerifyDisplayViewabilityViewableDuringEnum["AverageViewDurationUnspecified"] = "AVERAGE_VIEW_DURATION_UNSPECIFIED";
    DoubleVerifyDisplayViewabilityViewableDuringEnum["AverageViewDuration5Sec"] = "AVERAGE_VIEW_DURATION_5_SEC";
    DoubleVerifyDisplayViewabilityViewableDuringEnum["AverageViewDuration10Sec"] = "AVERAGE_VIEW_DURATION_10_SEC";
    DoubleVerifyDisplayViewabilityViewableDuringEnum["AverageViewDuration15Sec"] = "AVERAGE_VIEW_DURATION_15_SEC";
})(DoubleVerifyDisplayViewabilityViewableDuringEnum || (DoubleVerifyDisplayViewabilityViewableDuringEnum = {}));
// DoubleVerifyDisplayViewability
/**
 * Details of DoubleVerify display viewability settings.
**/
var DoubleVerifyDisplayViewability = /** @class */ (function (_super) {
    __extends(DoubleVerifyDisplayViewability, _super);
    function DoubleVerifyDisplayViewability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iab" }),
        __metadata("design:type", String)
    ], DoubleVerifyDisplayViewability.prototype, "iab", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewableDuring" }),
        __metadata("design:type", String)
    ], DoubleVerifyDisplayViewability.prototype, "viewableDuring", void 0);
    return DoubleVerifyDisplayViewability;
}(SpeakeasyBase));
export { DoubleVerifyDisplayViewability };
