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
import { GooglePrivacyDlpV2Dictionary } from "./googleprivacydlpv2dictionary";
import { GooglePrivacyDlpV2ExcludeByHotword } from "./googleprivacydlpv2excludebyhotword";
import { GooglePrivacyDlpV2ExcludeInfoTypes } from "./googleprivacydlpv2excludeinfotypes";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
export var GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum;
(function (GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum) {
    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum["MatchingTypeUnspecified"] = "MATCHING_TYPE_UNSPECIFIED";
    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum["MatchingTypeFullMatch"] = "MATCHING_TYPE_FULL_MATCH";
    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum["MatchingTypePartialMatch"] = "MATCHING_TYPE_PARTIAL_MATCH";
    GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum["MatchingTypeInverseMatch"] = "MATCHING_TYPE_INVERSE_MATCH";
})(GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum || (GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum = {}));
// GooglePrivacyDlpV2ExclusionRule
/**
 * The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
**/
var GooglePrivacyDlpV2ExclusionRule = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2ExclusionRule, _super);
    function GooglePrivacyDlpV2ExclusionRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dictionary" }),
        __metadata("design:type", GooglePrivacyDlpV2Dictionary)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "dictionary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeByHotword" }),
        __metadata("design:type", GooglePrivacyDlpV2ExcludeByHotword)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "excludeByHotword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeInfoTypes" }),
        __metadata("design:type", GooglePrivacyDlpV2ExcludeInfoTypes)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "excludeInfoTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchingType" }),
        __metadata("design:type", String)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "matchingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regex" }),
        __metadata("design:type", GooglePrivacyDlpV2Regex)
    ], GooglePrivacyDlpV2ExclusionRule.prototype, "regex", void 0);
    return GooglePrivacyDlpV2ExclusionRule;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2ExclusionRule };
