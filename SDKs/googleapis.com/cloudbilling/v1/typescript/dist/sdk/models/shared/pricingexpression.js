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
import { TierRate } from "./tierrate";
// PricingExpression
/**
 * Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.
**/
var PricingExpression = /** @class */ (function (_super) {
    __extends(PricingExpression, _super);
    function PricingExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseUnit" }),
        __metadata("design:type", String)
    ], PricingExpression.prototype, "baseUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseUnitConversionFactor" }),
        __metadata("design:type", Number)
    ], PricingExpression.prototype, "baseUnitConversionFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseUnitDescription" }),
        __metadata("design:type", String)
    ], PricingExpression.prototype, "baseUnitDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayQuantity" }),
        __metadata("design:type", Number)
    ], PricingExpression.prototype, "displayQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tieredRates", elemType: TierRate }),
        __metadata("design:type", Array)
    ], PricingExpression.prototype, "tieredRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageUnit" }),
        __metadata("design:type", String)
    ], PricingExpression.prototype, "usageUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageUnitDescription" }),
        __metadata("design:type", String)
    ], PricingExpression.prototype, "usageUnitDescription", void 0);
    return PricingExpression;
}(SpeakeasyBase));
export { PricingExpression };
