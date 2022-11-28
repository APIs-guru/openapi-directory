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
export var GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum;
(function (GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum) {
    GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum["StatisticUndefined"] = "STATISTIC_UNDEFINED";
    GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum["Mean"] = "MEAN";
    GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum["Min"] = "MIN";
    GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum["Max"] = "MAX";
})(GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum || (GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum = {}));
// GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation
/**
 * Evaluates whether the column aggregate statistic lies between a specified range.
**/
var GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation, _super);
    function GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.prototype, "maxValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minValue" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.prototype, "minValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statistic" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.prototype, "statistic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strictMaxEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.prototype, "strictMaxEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strictMinEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation.prototype, "strictMinEnabled", void 0);
    return GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation };
