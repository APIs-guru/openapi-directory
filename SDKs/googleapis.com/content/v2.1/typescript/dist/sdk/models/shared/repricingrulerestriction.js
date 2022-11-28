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
import { RepricingRuleRestrictionBoundary } from "./repricingrulerestrictionboundary";
// RepricingRuleRestriction
/**
 * Definition of a rule restriction. At least one of the following needs to be true: (1) use_auto_pricing_min_price is true (2) floor.price_delta exists (3) floor.percentage_delta exists If floor.price_delta and floor.percentage_delta are both set on a rule, the highest value will be chosen by the Repricer. In other words, for a product with a price of $50, if the `floor.percentage_delta` is "-10" and the floor.price_delta is "-12", the offer price will only be lowered $5 (10% lower than the original offer price).
**/
var RepricingRuleRestriction = /** @class */ (function (_super) {
    __extends(RepricingRuleRestriction, _super);
    function RepricingRuleRestriction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floor" }),
        __metadata("design:type", RepricingRuleRestrictionBoundary)
    ], RepricingRuleRestriction.prototype, "floor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useAutoPricingMinPrice" }),
        __metadata("design:type", Boolean)
    ], RepricingRuleRestriction.prototype, "useAutoPricingMinPrice", void 0);
    return RepricingRuleRestriction;
}(SpeakeasyBase));
export { RepricingRuleRestriction };
