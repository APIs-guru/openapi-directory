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
// TimeSeriesRatio
/**
 * A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.
**/
var TimeSeriesRatio = /** @class */ (function (_super) {
    __extends(TimeSeriesRatio, _super);
    function TimeSeriesRatio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=badServiceFilter" }),
        __metadata("design:type", String)
    ], TimeSeriesRatio.prototype, "badServiceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goodServiceFilter" }),
        __metadata("design:type", String)
    ], TimeSeriesRatio.prototype, "goodServiceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalServiceFilter" }),
        __metadata("design:type", String)
    ], TimeSeriesRatio.prototype, "totalServiceFilter", void 0);
    return TimeSeriesRatio;
}(SpeakeasyBase));
export { TimeSeriesRatio };
