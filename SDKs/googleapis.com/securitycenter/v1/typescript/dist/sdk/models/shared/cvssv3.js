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
export var Cvssv3AttackComplexityEnum;
(function (Cvssv3AttackComplexityEnum) {
    Cvssv3AttackComplexityEnum["AttackComplexityUnspecified"] = "ATTACK_COMPLEXITY_UNSPECIFIED";
    Cvssv3AttackComplexityEnum["AttackComplexityLow"] = "ATTACK_COMPLEXITY_LOW";
    Cvssv3AttackComplexityEnum["AttackComplexityHigh"] = "ATTACK_COMPLEXITY_HIGH";
})(Cvssv3AttackComplexityEnum || (Cvssv3AttackComplexityEnum = {}));
export var Cvssv3AttackVectorEnum;
(function (Cvssv3AttackVectorEnum) {
    Cvssv3AttackVectorEnum["AttackVectorUnspecified"] = "ATTACK_VECTOR_UNSPECIFIED";
    Cvssv3AttackVectorEnum["AttackVectorNetwork"] = "ATTACK_VECTOR_NETWORK";
    Cvssv3AttackVectorEnum["AttackVectorAdjacent"] = "ATTACK_VECTOR_ADJACENT";
    Cvssv3AttackVectorEnum["AttackVectorLocal"] = "ATTACK_VECTOR_LOCAL";
    Cvssv3AttackVectorEnum["AttackVectorPhysical"] = "ATTACK_VECTOR_PHYSICAL";
})(Cvssv3AttackVectorEnum || (Cvssv3AttackVectorEnum = {}));
export var Cvssv3AvailabilityImpactEnum;
(function (Cvssv3AvailabilityImpactEnum) {
    Cvssv3AvailabilityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    Cvssv3AvailabilityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    Cvssv3AvailabilityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    Cvssv3AvailabilityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(Cvssv3AvailabilityImpactEnum || (Cvssv3AvailabilityImpactEnum = {}));
export var Cvssv3ConfidentialityImpactEnum;
(function (Cvssv3ConfidentialityImpactEnum) {
    Cvssv3ConfidentialityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    Cvssv3ConfidentialityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    Cvssv3ConfidentialityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    Cvssv3ConfidentialityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(Cvssv3ConfidentialityImpactEnum || (Cvssv3ConfidentialityImpactEnum = {}));
export var Cvssv3IntegrityImpactEnum;
(function (Cvssv3IntegrityImpactEnum) {
    Cvssv3IntegrityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    Cvssv3IntegrityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    Cvssv3IntegrityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    Cvssv3IntegrityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(Cvssv3IntegrityImpactEnum || (Cvssv3IntegrityImpactEnum = {}));
export var Cvssv3PrivilegesRequiredEnum;
(function (Cvssv3PrivilegesRequiredEnum) {
    Cvssv3PrivilegesRequiredEnum["PrivilegesRequiredUnspecified"] = "PRIVILEGES_REQUIRED_UNSPECIFIED";
    Cvssv3PrivilegesRequiredEnum["PrivilegesRequiredNone"] = "PRIVILEGES_REQUIRED_NONE";
    Cvssv3PrivilegesRequiredEnum["PrivilegesRequiredLow"] = "PRIVILEGES_REQUIRED_LOW";
    Cvssv3PrivilegesRequiredEnum["PrivilegesRequiredHigh"] = "PRIVILEGES_REQUIRED_HIGH";
})(Cvssv3PrivilegesRequiredEnum || (Cvssv3PrivilegesRequiredEnum = {}));
export var Cvssv3ScopeEnum;
(function (Cvssv3ScopeEnum) {
    Cvssv3ScopeEnum["ScopeUnspecified"] = "SCOPE_UNSPECIFIED";
    Cvssv3ScopeEnum["ScopeUnchanged"] = "SCOPE_UNCHANGED";
    Cvssv3ScopeEnum["ScopeChanged"] = "SCOPE_CHANGED";
})(Cvssv3ScopeEnum || (Cvssv3ScopeEnum = {}));
export var Cvssv3UserInteractionEnum;
(function (Cvssv3UserInteractionEnum) {
    Cvssv3UserInteractionEnum["UserInteractionUnspecified"] = "USER_INTERACTION_UNSPECIFIED";
    Cvssv3UserInteractionEnum["UserInteractionNone"] = "USER_INTERACTION_NONE";
    Cvssv3UserInteractionEnum["UserInteractionRequired"] = "USER_INTERACTION_REQUIRED";
})(Cvssv3UserInteractionEnum || (Cvssv3UserInteractionEnum = {}));
// Cvssv3
/**
 * Common Vulnerability Scoring System version 3.
**/
var Cvssv3 = /** @class */ (function (_super) {
    __extends(Cvssv3, _super);
    function Cvssv3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attackComplexity" }),
        __metadata("design:type", String)
    ], Cvssv3.prototype, "attackComplexity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attackVector" }),
        __metadata("design:type", String)
    ], Cvssv3.prototype, "attackVector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityImpact" }),
        __metadata("design:type", String)
    ], Cvssv3.prototype, "availabilityImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseScore" }),
        __metadata("design:type", Number)
    ], Cvssv3.prototype, "baseScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidentialityImpact" }),
        __metadata("design:type", String)
    ], Cvssv3.prototype, "confidentialityImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrityImpact" }),
        __metadata("design:type", String)
    ], Cvssv3.prototype, "integrityImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privilegesRequired" }),
        __metadata("design:type", String)
    ], Cvssv3.prototype, "privilegesRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], Cvssv3.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInteraction" }),
        __metadata("design:type", String)
    ], Cvssv3.prototype, "userInteraction", void 0);
    return Cvssv3;
}(SpeakeasyBase));
export { Cvssv3 };
