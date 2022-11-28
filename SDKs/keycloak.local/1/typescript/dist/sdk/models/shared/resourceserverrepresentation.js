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
import { PolicyRepresentation } from "./policyrepresentation";
import { ResourceRepresentation } from "./resourcerepresentation";
import { ScopeRepresentation } from "./scoperepresentation";
export var ResourceServerRepresentationDecisionStrategyEnum;
(function (ResourceServerRepresentationDecisionStrategyEnum) {
    ResourceServerRepresentationDecisionStrategyEnum["Affirmative"] = "AFFIRMATIVE";
    ResourceServerRepresentationDecisionStrategyEnum["Unanimous"] = "UNANIMOUS";
    ResourceServerRepresentationDecisionStrategyEnum["Consensus"] = "CONSENSUS";
})(ResourceServerRepresentationDecisionStrategyEnum || (ResourceServerRepresentationDecisionStrategyEnum = {}));
export var ResourceServerRepresentationPolicyEnforcementModeEnum;
(function (ResourceServerRepresentationPolicyEnforcementModeEnum) {
    ResourceServerRepresentationPolicyEnforcementModeEnum["Enforcing"] = "ENFORCING";
    ResourceServerRepresentationPolicyEnforcementModeEnum["Permissive"] = "PERMISSIVE";
    ResourceServerRepresentationPolicyEnforcementModeEnum["Disabled"] = "DISABLED";
})(ResourceServerRepresentationPolicyEnforcementModeEnum || (ResourceServerRepresentationPolicyEnforcementModeEnum = {}));
var ResourceServerRepresentation = /** @class */ (function (_super) {
    __extends(ResourceServerRepresentation, _super);
    function ResourceServerRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowRemoteResourceManagement" }),
        __metadata("design:type", Boolean)
    ], ResourceServerRepresentation.prototype, "allowRemoteResourceManagement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], ResourceServerRepresentation.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=decisionStrategy" }),
        __metadata("design:type", String)
    ], ResourceServerRepresentation.prototype, "decisionStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ResourceServerRepresentation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ResourceServerRepresentation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policies", elemType: PolicyRepresentation }),
        __metadata("design:type", Array)
    ], ResourceServerRepresentation.prototype, "policies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyEnforcementMode" }),
        __metadata("design:type", String)
    ], ResourceServerRepresentation.prototype, "policyEnforcementMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: ResourceRepresentation }),
        __metadata("design:type", Array)
    ], ResourceServerRepresentation.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes", elemType: ScopeRepresentation }),
        __metadata("design:type", Array)
    ], ResourceServerRepresentation.prototype, "scopes", void 0);
    return ResourceServerRepresentation;
}(SpeakeasyBase));
export { ResourceServerRepresentation };
