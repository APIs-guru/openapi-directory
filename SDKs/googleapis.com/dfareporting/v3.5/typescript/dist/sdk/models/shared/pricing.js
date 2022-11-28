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
import { Flight } from "./flight";
export var PricingCapCostTypeEnum;
(function (PricingCapCostTypeEnum) {
    PricingCapCostTypeEnum["PlanningPlacementCapCostTypeNone"] = "PLANNING_PLACEMENT_CAP_COST_TYPE_NONE";
    PricingCapCostTypeEnum["PlanningPlacementCapCostTypeMonthly"] = "PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY";
    PricingCapCostTypeEnum["PlanningPlacementCapCostTypeCumulative"] = "PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE";
})(PricingCapCostTypeEnum || (PricingCapCostTypeEnum = {}));
export var PricingGroupTypeEnum;
(function (PricingGroupTypeEnum) {
    PricingGroupTypeEnum["PlanningPlacementGroupTypePackage"] = "PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE";
    PricingGroupTypeEnum["PlanningPlacementGroupTypeRoadblock"] = "PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK";
})(PricingGroupTypeEnum || (PricingGroupTypeEnum = {}));
export var PricingPricingTypeEnum;
(function (PricingPricingTypeEnum) {
    PricingPricingTypeEnum["PlanningPlacementPricingTypeImpressions"] = "PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS";
    PricingPricingTypeEnum["PlanningPlacementPricingTypeCpm"] = "PLANNING_PLACEMENT_PRICING_TYPE_CPM";
    PricingPricingTypeEnum["PlanningPlacementPricingTypeClicks"] = "PLANNING_PLACEMENT_PRICING_TYPE_CLICKS";
    PricingPricingTypeEnum["PlanningPlacementPricingTypeCpc"] = "PLANNING_PLACEMENT_PRICING_TYPE_CPC";
    PricingPricingTypeEnum["PlanningPlacementPricingTypeCpa"] = "PLANNING_PLACEMENT_PRICING_TYPE_CPA";
    PricingPricingTypeEnum["PlanningPlacementPricingTypeFlatRateImpressions"] = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS";
    PricingPricingTypeEnum["PlanningPlacementPricingTypeFlatRateClicks"] = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS";
    PricingPricingTypeEnum["PlanningPlacementPricingTypeCpmActiveview"] = "PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW";
})(PricingPricingTypeEnum || (PricingPricingTypeEnum = {}));
// Pricing
/**
 * Pricing Information
**/
var Pricing = /** @class */ (function (_super) {
    __extends(Pricing, _super);
    function Pricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capCostType" }),
        __metadata("design:type", String)
    ], Pricing.prototype, "capCostType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], Pricing.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flights", elemType: Flight }),
        __metadata("design:type", Array)
    ], Pricing.prototype, "flights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupType" }),
        __metadata("design:type", String)
    ], Pricing.prototype, "groupType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricingType" }),
        __metadata("design:type", String)
    ], Pricing.prototype, "pricingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], Pricing.prototype, "startDate", void 0);
    return Pricing;
}(SpeakeasyBase));
export { Pricing };
