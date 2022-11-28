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
import { PerformanceThreshold } from "./performancethreshold";
import { MetricRange } from "./metricrange";
// WindowsBasedSli
/**
 * A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
**/
var WindowsBasedSli = /** @class */ (function (_super) {
    __extends(WindowsBasedSli, _super);
    function WindowsBasedSli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goodBadMetricFilter" }),
        __metadata("design:type", String)
    ], WindowsBasedSli.prototype, "goodBadMetricFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goodTotalRatioThreshold" }),
        __metadata("design:type", PerformanceThreshold)
    ], WindowsBasedSli.prototype, "goodTotalRatioThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricMeanInRange" }),
        __metadata("design:type", MetricRange)
    ], WindowsBasedSli.prototype, "metricMeanInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricSumInRange" }),
        __metadata("design:type", MetricRange)
    ], WindowsBasedSli.prototype, "metricSumInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windowPeriod" }),
        __metadata("design:type", String)
    ], WindowsBasedSli.prototype, "windowPeriod", void 0);
    return WindowsBasedSli;
}(SpeakeasyBase));
export { WindowsBasedSli };
