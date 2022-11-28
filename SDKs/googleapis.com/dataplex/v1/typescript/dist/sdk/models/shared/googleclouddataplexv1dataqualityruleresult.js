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
import { GoogleCloudDataplexV1DataQualityRule } from "./googleclouddataplexv1dataqualityrule";
// GoogleCloudDataplexV1DataQualityRuleResult
/**
 * DataQualityRuleResult provides a more detailed, per-rule level view of the results.
**/
var GoogleCloudDataplexV1DataQualityRuleResult = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1DataQualityRuleResult, _super);
    function GoogleCloudDataplexV1DataQualityRuleResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatedCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataQualityRuleResult.prototype, "evaluatedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failingRowsQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataQualityRuleResult.prototype, "failingRowsQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nullCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataQualityRuleResult.prototype, "nullCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passRatio" }),
        __metadata("design:type", Number)
    ], GoogleCloudDataplexV1DataQualityRuleResult.prototype, "passRatio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passed" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDataplexV1DataQualityRuleResult.prototype, "passed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passedCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1DataQualityRuleResult.prototype, "passedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rule" }),
        __metadata("design:type", GoogleCloudDataplexV1DataQualityRule)
    ], GoogleCloudDataplexV1DataQualityRuleResult.prototype, "rule", void 0);
    return GoogleCloudDataplexV1DataQualityRuleResult;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1DataQualityRuleResult };
