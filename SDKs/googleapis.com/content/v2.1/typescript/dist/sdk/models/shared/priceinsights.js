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
// PriceInsights
/**
 * Price Insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
**/
var PriceInsights = /** @class */ (function (_super) {
    __extends(PriceInsights, _super);
    function PriceInsights() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictedClicksChangeFraction" }),
        __metadata("design:type", Number)
    ], PriceInsights.prototype, "predictedClicksChangeFraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictedConversionsChangeFraction" }),
        __metadata("design:type", Number)
    ], PriceInsights.prototype, "predictedConversionsChangeFraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictedGrossProfitChangeFraction" }),
        __metadata("design:type", Number)
    ], PriceInsights.prototype, "predictedGrossProfitChangeFraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictedImpressionsChangeFraction" }),
        __metadata("design:type", Number)
    ], PriceInsights.prototype, "predictedImpressionsChangeFraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictedMonthlyGrossProfitChangeCurrencyCode" }),
        __metadata("design:type", String)
    ], PriceInsights.prototype, "predictedMonthlyGrossProfitChangeCurrencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictedMonthlyGrossProfitChangeMicros" }),
        __metadata("design:type", String)
    ], PriceInsights.prototype, "predictedMonthlyGrossProfitChangeMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedPriceCurrencyCode" }),
        __metadata("design:type", String)
    ], PriceInsights.prototype, "suggestedPriceCurrencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedPriceMicros" }),
        __metadata("design:type", String)
    ], PriceInsights.prototype, "suggestedPriceMicros", void 0);
    return PriceInsights;
}(SpeakeasyBase));
export { PriceInsights };
