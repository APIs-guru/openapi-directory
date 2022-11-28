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
import { RepricingRuleCostOfGoodsSaleRule } from "./repricingrulecostofgoodssalerule";
import { RepricingRuleEffectiveTime } from "./repricingruleeffectivetime";
import { RepricingRuleEligibleOfferMatcher } from "./repricingruleeligibleoffermatcher";
import { RepricingRuleRestriction } from "./repricingrulerestriction";
import { RepricingRuleStatsBasedRule } from "./repricingrulestatsbasedrule";
export var RepricingRuleTypeEnum;
(function (RepricingRuleTypeEnum) {
    RepricingRuleTypeEnum["RepricingRuleTypeUnspecified"] = "REPRICING_RULE_TYPE_UNSPECIFIED";
    RepricingRuleTypeEnum["TypeStatsBased"] = "TYPE_STATS_BASED";
    RepricingRuleTypeEnum["TypeCogsBased"] = "TYPE_COGS_BASED";
    RepricingRuleTypeEnum["TypeSalesVolumeBased"] = "TYPE_SALES_VOLUME_BASED";
    RepricingRuleTypeEnum["TypeCompetitivePrice"] = "TYPE_COMPETITIVE_PRICE";
})(RepricingRuleTypeEnum || (RepricingRuleTypeEnum = {}));
// RepricingRule
/**
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
**/
var RepricingRule = /** @class */ (function (_super) {
    __extends(RepricingRule, _super);
    function RepricingRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cogsBasedRule" }),
        __metadata("design:type", RepricingRuleCostOfGoodsSaleRule)
    ], RepricingRule.prototype, "cogsBasedRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], RepricingRule.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveTimePeriod" }),
        __metadata("design:type", RepricingRuleEffectiveTime)
    ], RepricingRule.prototype, "effectiveTimePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibleOfferMatcher" }),
        __metadata("design:type", RepricingRuleEligibleOfferMatcher)
    ], RepricingRule.prototype, "eligibleOfferMatcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], RepricingRule.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantId" }),
        __metadata("design:type", String)
    ], RepricingRule.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paused" }),
        __metadata("design:type", Boolean)
    ], RepricingRule.prototype, "paused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restriction" }),
        __metadata("design:type", RepricingRuleRestriction)
    ], RepricingRule.prototype, "restriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleId" }),
        __metadata("design:type", String)
    ], RepricingRule.prototype, "ruleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statsBasedRule" }),
        __metadata("design:type", RepricingRuleStatsBasedRule)
    ], RepricingRule.prototype, "statsBasedRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RepricingRule.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RepricingRule.prototype, "type", void 0);
    return RepricingRule;
}(SpeakeasyBase));
export { RepricingRule };
// RepricingRuleInput
/**
 * Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
**/
var RepricingRuleInput = /** @class */ (function (_super) {
    __extends(RepricingRuleInput, _super);
    function RepricingRuleInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cogsBasedRule" }),
        __metadata("design:type", RepricingRuleCostOfGoodsSaleRule)
    ], RepricingRuleInput.prototype, "cogsBasedRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countryCode" }),
        __metadata("design:type", String)
    ], RepricingRuleInput.prototype, "countryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveTimePeriod" }),
        __metadata("design:type", RepricingRuleEffectiveTime)
    ], RepricingRuleInput.prototype, "effectiveTimePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibleOfferMatcher" }),
        __metadata("design:type", RepricingRuleEligibleOfferMatcher)
    ], RepricingRuleInput.prototype, "eligibleOfferMatcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], RepricingRuleInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paused" }),
        __metadata("design:type", Boolean)
    ], RepricingRuleInput.prototype, "paused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restriction" }),
        __metadata("design:type", RepricingRuleRestriction)
    ], RepricingRuleInput.prototype, "restriction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statsBasedRule" }),
        __metadata("design:type", RepricingRuleStatsBasedRule)
    ], RepricingRuleInput.prototype, "statsBasedRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], RepricingRuleInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RepricingRuleInput.prototype, "type", void 0);
    return RepricingRuleInput;
}(SpeakeasyBase));
export { RepricingRuleInput };
