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
import { GoogleCloudRetailV2RuleBoostAction } from "./googlecloudretailv2ruleboostaction";
import { GoogleCloudRetailV2Condition } from "./googlecloudretailv2condition";
import { GoogleCloudRetailV2RuleDoNotAssociateAction } from "./googlecloudretailv2ruledonotassociateaction";
import { GoogleCloudRetailV2RuleFilterAction } from "./googlecloudretailv2rulefilteraction";
import { GoogleCloudRetailV2RuleIgnoreAction } from "./googlecloudretailv2ruleignoreaction";
import { GoogleCloudRetailV2RuleOnewaySynonymsAction } from "./googlecloudretailv2ruleonewaysynonymsaction";
import { GoogleCloudRetailV2RuleRedirectAction } from "./googlecloudretailv2ruleredirectaction";
import { GoogleCloudRetailV2RuleReplacementAction } from "./googlecloudretailv2rulereplacementaction";
import { GoogleCloudRetailV2RuleTwowaySynonymsAction } from "./googlecloudretailv2ruletwowaysynonymsaction";
// GoogleCloudRetailV2Rule
/**
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
**/
var GoogleCloudRetailV2Rule = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2Rule, _super);
    function GoogleCloudRetailV2Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boostAction" }),
        __metadata("design:type", GoogleCloudRetailV2RuleBoostAction)
    ], GoogleCloudRetailV2Rule.prototype, "boostAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", GoogleCloudRetailV2Condition)
    ], GoogleCloudRetailV2Rule.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doNotAssociateAction" }),
        __metadata("design:type", GoogleCloudRetailV2RuleDoNotAssociateAction)
    ], GoogleCloudRetailV2Rule.prototype, "doNotAssociateAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterAction" }),
        __metadata("design:type", GoogleCloudRetailV2RuleFilterAction)
    ], GoogleCloudRetailV2Rule.prototype, "filterAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreAction" }),
        __metadata("design:type", GoogleCloudRetailV2RuleIgnoreAction)
    ], GoogleCloudRetailV2Rule.prototype, "ignoreAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onewaySynonymsAction" }),
        __metadata("design:type", GoogleCloudRetailV2RuleOnewaySynonymsAction)
    ], GoogleCloudRetailV2Rule.prototype, "onewaySynonymsAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectAction" }),
        __metadata("design:type", GoogleCloudRetailV2RuleRedirectAction)
    ], GoogleCloudRetailV2Rule.prototype, "redirectAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replacementAction" }),
        __metadata("design:type", GoogleCloudRetailV2RuleReplacementAction)
    ], GoogleCloudRetailV2Rule.prototype, "replacementAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twowaySynonymsAction" }),
        __metadata("design:type", GoogleCloudRetailV2RuleTwowaySynonymsAction)
    ], GoogleCloudRetailV2Rule.prototype, "twowaySynonymsAction", void 0);
    return GoogleCloudRetailV2Rule;
}(SpeakeasyBase));
export { GoogleCloudRetailV2Rule };
