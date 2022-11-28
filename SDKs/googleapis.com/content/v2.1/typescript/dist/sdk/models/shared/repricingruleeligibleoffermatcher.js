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
import { RepricingRuleEligibleOfferMatcherStringMatcher } from "./repricingruleeligibleoffermatcherstringmatcher";
export var RepricingRuleEligibleOfferMatcherMatcherOptionEnum;
(function (RepricingRuleEligibleOfferMatcherMatcherOptionEnum) {
    RepricingRuleEligibleOfferMatcherMatcherOptionEnum["MatcherOptionUnspecified"] = "MATCHER_OPTION_UNSPECIFIED";
    RepricingRuleEligibleOfferMatcherMatcherOptionEnum["MatcherOptionCustomFilter"] = "MATCHER_OPTION_CUSTOM_FILTER";
    RepricingRuleEligibleOfferMatcherMatcherOptionEnum["MatcherOptionUseFeedAttribute"] = "MATCHER_OPTION_USE_FEED_ATTRIBUTE";
    RepricingRuleEligibleOfferMatcherMatcherOptionEnum["MatcherOptionAllProducts"] = "MATCHER_OPTION_ALL_PRODUCTS";
})(RepricingRuleEligibleOfferMatcherMatcherOptionEnum || (RepricingRuleEligibleOfferMatcherMatcherOptionEnum = {}));
// RepricingRuleEligibleOfferMatcher
/**
 * Matcher that specifies eligible offers. When the USE_FEED_ATTRIBUTE option is selected, only the repricing_rule_id attribute on the product feed is used to specify offer-rule mapping. When the CUSTOM_FILTER option is selected, only the *_matcher fields are used to filter the offers for offer-rule mapping. If the CUSTOM_FILTER option is selected, an offer needs to satisfy each custom filter matcher to be eligible for a rule. Size limit: the sum of the number of entries in all the matchers should not exceed 20. For example, there can be 15 product ids and 5 brands, but not 10 product ids and 11 brands.
**/
var RepricingRuleEligibleOfferMatcher = /** @class */ (function (_super) {
    __extends(RepricingRuleEligibleOfferMatcher, _super);
    function RepricingRuleEligibleOfferMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brandMatcher" }),
        __metadata("design:type", RepricingRuleEligibleOfferMatcherStringMatcher)
    ], RepricingRuleEligibleOfferMatcher.prototype, "brandMatcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupIdMatcher" }),
        __metadata("design:type", RepricingRuleEligibleOfferMatcherStringMatcher)
    ], RepricingRuleEligibleOfferMatcher.prototype, "itemGroupIdMatcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matcherOption" }),
        __metadata("design:type", String)
    ], RepricingRuleEligibleOfferMatcher.prototype, "matcherOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offerIdMatcher" }),
        __metadata("design:type", RepricingRuleEligibleOfferMatcherStringMatcher)
    ], RepricingRuleEligibleOfferMatcher.prototype, "offerIdMatcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skipWhenOnPromotion" }),
        __metadata("design:type", Boolean)
    ], RepricingRuleEligibleOfferMatcher.prototype, "skipWhenOnPromotion", void 0);
    return RepricingRuleEligibleOfferMatcher;
}(SpeakeasyBase));
export { RepricingRuleEligibleOfferMatcher };
