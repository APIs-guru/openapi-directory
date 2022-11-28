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
import { ResponsePolicyRuleLocalData } from "./responsepolicyrulelocaldata";
export var ResponsePolicyRuleBehaviorEnum;
(function (ResponsePolicyRuleBehaviorEnum) {
    ResponsePolicyRuleBehaviorEnum["BehaviorUnspecified"] = "behaviorUnspecified";
    ResponsePolicyRuleBehaviorEnum["BypassResponsePolicy"] = "bypassResponsePolicy";
})(ResponsePolicyRuleBehaviorEnum || (ResponsePolicyRuleBehaviorEnum = {}));
// ResponsePolicyRule
/**
 * A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
**/
var ResponsePolicyRule = /** @class */ (function (_super) {
    __extends(ResponsePolicyRule, _super);
    function ResponsePolicyRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=behavior" }),
        __metadata("design:type", String)
    ], ResponsePolicyRule.prototype, "behavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsName" }),
        __metadata("design:type", String)
    ], ResponsePolicyRule.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ResponsePolicyRule.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localData" }),
        __metadata("design:type", ResponsePolicyRuleLocalData)
    ], ResponsePolicyRule.prototype, "localData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleName" }),
        __metadata("design:type", String)
    ], ResponsePolicyRule.prototype, "ruleName", void 0);
    return ResponsePolicyRule;
}(SpeakeasyBase));
export { ResponsePolicyRule };
