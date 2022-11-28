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
import { GaugeView } from "./gaugeview";
import { SparkChartView } from "./sparkchartview";
import { Threshold } from "./threshold";
import { TimeSeriesQuery } from "./timeseriesquery";
// Scorecard
/**
 * A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
**/
var Scorecard = /** @class */ (function (_super) {
    __extends(Scorecard, _super);
    function Scorecard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gaugeView" }),
        __metadata("design:type", GaugeView)
    ], Scorecard.prototype, "gaugeView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sparkChartView" }),
        __metadata("design:type", SparkChartView)
    ], Scorecard.prototype, "sparkChartView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thresholds", elemType: Threshold }),
        __metadata("design:type", Array)
    ], Scorecard.prototype, "thresholds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSeriesQuery" }),
        __metadata("design:type", TimeSeriesQuery)
    ], Scorecard.prototype, "timeSeriesQuery", void 0);
    return Scorecard;
}(SpeakeasyBase));
export { Scorecard };
