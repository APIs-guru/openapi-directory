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
import { GooglePrivacyDlpV2ExclusionRule } from "./googleprivacydlpv2exclusionrule";
import { GooglePrivacyDlpV2HotwordRule } from "./googleprivacydlpv2hotwordrule";
// GooglePrivacyDlpV2InspectionRule
/**
 * A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
**/
var GooglePrivacyDlpV2InspectionRule = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2InspectionRule, _super);
    function GooglePrivacyDlpV2InspectionRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exclusionRule" }),
        __metadata("design:type", GooglePrivacyDlpV2ExclusionRule)
    ], GooglePrivacyDlpV2InspectionRule.prototype, "exclusionRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotwordRule" }),
        __metadata("design:type", GooglePrivacyDlpV2HotwordRule)
    ], GooglePrivacyDlpV2InspectionRule.prototype, "hotwordRule", void 0);
    return GooglePrivacyDlpV2InspectionRule;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2InspectionRule };
