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
import { BucketOptions } from "./bucketoptions";
import { Exemplar } from "./exemplar";
import { Range } from "./range";
// Distribution
/**
 * Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
**/
var Distribution = /** @class */ (function (_super) {
    __extends(Distribution, _super);
    function Distribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCounts" }),
        __metadata("design:type", Array)
    ], Distribution.prototype, "bucketCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketOptions" }),
        __metadata("design:type", BucketOptions)
    ], Distribution.prototype, "bucketOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", String)
    ], Distribution.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exemplars", elemType: Exemplar }),
        __metadata("design:type", Array)
    ], Distribution.prototype, "exemplars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mean" }),
        __metadata("design:type", Number)
    ], Distribution.prototype, "mean", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=range" }),
        __metadata("design:type", Range)
    ], Distribution.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sumOfSquaredDeviation" }),
        __metadata("design:type", Number)
    ], Distribution.prototype, "sumOfSquaredDeviation", void 0);
    return Distribution;
}(SpeakeasyBase));
export { Distribution };
