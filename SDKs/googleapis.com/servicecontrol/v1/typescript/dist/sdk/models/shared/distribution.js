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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExplicitBuckets } from "./explicitbuckets";
import { ExponentialBuckets } from "./exponentialbuckets";
import { LinearBuckets } from "./linearbuckets";
// Distribution
/**
 * Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
**/
var Distribution = /** @class */ (function (_super) {
    __extends(Distribution, _super);
    function Distribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bucketCounts" }),
        __metadata("design:type", Array)
    ], Distribution.prototype, "bucketCounts", void 0);
    __decorate([
        Metadata({ data: "json, name=count" }),
        __metadata("design:type", String)
    ], Distribution.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=exemplars", elemType: shared.Exemplar }),
        __metadata("design:type", Array)
    ], Distribution.prototype, "exemplars", void 0);
    __decorate([
        Metadata({ data: "json, name=explicitBuckets" }),
        __metadata("design:type", ExplicitBuckets)
    ], Distribution.prototype, "explicitBuckets", void 0);
    __decorate([
        Metadata({ data: "json, name=exponentialBuckets" }),
        __metadata("design:type", ExponentialBuckets)
    ], Distribution.prototype, "exponentialBuckets", void 0);
    __decorate([
        Metadata({ data: "json, name=linearBuckets" }),
        __metadata("design:type", LinearBuckets)
    ], Distribution.prototype, "linearBuckets", void 0);
    __decorate([
        Metadata({ data: "json, name=maximum" }),
        __metadata("design:type", Number)
    ], Distribution.prototype, "maximum", void 0);
    __decorate([
        Metadata({ data: "json, name=mean" }),
        __metadata("design:type", Number)
    ], Distribution.prototype, "mean", void 0);
    __decorate([
        Metadata({ data: "json, name=minimum" }),
        __metadata("design:type", Number)
    ], Distribution.prototype, "minimum", void 0);
    __decorate([
        Metadata({ data: "json, name=sumOfSquaredDeviation" }),
        __metadata("design:type", Number)
    ], Distribution.prototype, "sumOfSquaredDeviation", void 0);
    return Distribution;
}(SpeakeasyBase));
export { Distribution };
