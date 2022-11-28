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
import { GoogleCloudRetailV2betaRuleBoostAction } from "./googlecloudretailv2betaruleboostaction";
import { GoogleCloudRetailV2betaCondition } from "./googlecloudretailv2betacondition";
import { GoogleCloudRetailV2betaRuleDoNotAssociateAction } from "./googlecloudretailv2betaruledonotassociateaction";
import { GoogleCloudRetailV2betaRuleFilterAction } from "./googlecloudretailv2betarulefilteraction";
import { GoogleCloudRetailV2betaRuleIgnoreAction } from "./googlecloudretailv2betaruleignoreaction";
import { GoogleCloudRetailV2betaRuleOnewaySynonymsAction } from "./googlecloudretailv2betaruleonewaysynonymsaction";
import { GoogleCloudRetailV2betaRuleRedirectAction } from "./googlecloudretailv2betaruleredirectaction";
import { GoogleCloudRetailV2betaRuleReplacementAction } from "./googlecloudretailv2betarulereplacementaction";
import { GoogleCloudRetailV2betaRuleTwowaySynonymsAction } from "./googlecloudretailv2betaruletwowaysynonymsaction";
// GoogleCloudRetailV2betaRule
/**
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
**/
var GoogleCloudRetailV2betaRule = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaRule, _super);
    function GoogleCloudRetailV2betaRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boostAction" }),
        __metadata("design:type", GoogleCloudRetailV2betaRuleBoostAction)
    ], GoogleCloudRetailV2betaRule.prototype, "boostAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", GoogleCloudRetailV2betaCondition)
    ], GoogleCloudRetailV2betaRule.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doNotAssociateAction" }),
        __metadata("design:type", GoogleCloudRetailV2betaRuleDoNotAssociateAction)
    ], GoogleCloudRetailV2betaRule.prototype, "doNotAssociateAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterAction" }),
        __metadata("design:type", GoogleCloudRetailV2betaRuleFilterAction)
    ], GoogleCloudRetailV2betaRule.prototype, "filterAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreAction" }),
        __metadata("design:type", GoogleCloudRetailV2betaRuleIgnoreAction)
    ], GoogleCloudRetailV2betaRule.prototype, "ignoreAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onewaySynonymsAction" }),
        __metadata("design:type", GoogleCloudRetailV2betaRuleOnewaySynonymsAction)
    ], GoogleCloudRetailV2betaRule.prototype, "onewaySynonymsAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectAction" }),
        __metadata("design:type", GoogleCloudRetailV2betaRuleRedirectAction)
    ], GoogleCloudRetailV2betaRule.prototype, "redirectAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replacementAction" }),
        __metadata("design:type", GoogleCloudRetailV2betaRuleReplacementAction)
    ], GoogleCloudRetailV2betaRule.prototype, "replacementAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twowaySynonymsAction" }),
        __metadata("design:type", GoogleCloudRetailV2betaRuleTwowaySynonymsAction)
    ], GoogleCloudRetailV2betaRule.prototype, "twowaySynonymsAction", void 0);
    return GoogleCloudRetailV2betaRule;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaRule };
