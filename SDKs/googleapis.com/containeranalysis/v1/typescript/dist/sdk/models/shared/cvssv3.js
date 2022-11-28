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
export var CvsSv3AttackComplexityEnum;
(function (CvsSv3AttackComplexityEnum) {
    CvsSv3AttackComplexityEnum["AttackComplexityUnspecified"] = "ATTACK_COMPLEXITY_UNSPECIFIED";
    CvsSv3AttackComplexityEnum["AttackComplexityLow"] = "ATTACK_COMPLEXITY_LOW";
    CvsSv3AttackComplexityEnum["AttackComplexityHigh"] = "ATTACK_COMPLEXITY_HIGH";
})(CvsSv3AttackComplexityEnum || (CvsSv3AttackComplexityEnum = {}));
export var CvsSv3AttackVectorEnum;
(function (CvsSv3AttackVectorEnum) {
    CvsSv3AttackVectorEnum["AttackVectorUnspecified"] = "ATTACK_VECTOR_UNSPECIFIED";
    CvsSv3AttackVectorEnum["AttackVectorNetwork"] = "ATTACK_VECTOR_NETWORK";
    CvsSv3AttackVectorEnum["AttackVectorAdjacent"] = "ATTACK_VECTOR_ADJACENT";
    CvsSv3AttackVectorEnum["AttackVectorLocal"] = "ATTACK_VECTOR_LOCAL";
    CvsSv3AttackVectorEnum["AttackVectorPhysical"] = "ATTACK_VECTOR_PHYSICAL";
})(CvsSv3AttackVectorEnum || (CvsSv3AttackVectorEnum = {}));
export var CvsSv3AvailabilityImpactEnum;
(function (CvsSv3AvailabilityImpactEnum) {
    CvsSv3AvailabilityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    CvsSv3AvailabilityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    CvsSv3AvailabilityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    CvsSv3AvailabilityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(CvsSv3AvailabilityImpactEnum || (CvsSv3AvailabilityImpactEnum = {}));
export var CvsSv3ConfidentialityImpactEnum;
(function (CvsSv3ConfidentialityImpactEnum) {
    CvsSv3ConfidentialityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    CvsSv3ConfidentialityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    CvsSv3ConfidentialityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    CvsSv3ConfidentialityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(CvsSv3ConfidentialityImpactEnum || (CvsSv3ConfidentialityImpactEnum = {}));
export var CvsSv3IntegrityImpactEnum;
(function (CvsSv3IntegrityImpactEnum) {
    CvsSv3IntegrityImpactEnum["ImpactUnspecified"] = "IMPACT_UNSPECIFIED";
    CvsSv3IntegrityImpactEnum["ImpactHigh"] = "IMPACT_HIGH";
    CvsSv3IntegrityImpactEnum["ImpactLow"] = "IMPACT_LOW";
    CvsSv3IntegrityImpactEnum["ImpactNone"] = "IMPACT_NONE";
})(CvsSv3IntegrityImpactEnum || (CvsSv3IntegrityImpactEnum = {}));
export var CvsSv3PrivilegesRequiredEnum;
(function (CvsSv3PrivilegesRequiredEnum) {
    CvsSv3PrivilegesRequiredEnum["PrivilegesRequiredUnspecified"] = "PRIVILEGES_REQUIRED_UNSPECIFIED";
    CvsSv3PrivilegesRequiredEnum["PrivilegesRequiredNone"] = "PRIVILEGES_REQUIRED_NONE";
    CvsSv3PrivilegesRequiredEnum["PrivilegesRequiredLow"] = "PRIVILEGES_REQUIRED_LOW";
    CvsSv3PrivilegesRequiredEnum["PrivilegesRequiredHigh"] = "PRIVILEGES_REQUIRED_HIGH";
})(CvsSv3PrivilegesRequiredEnum || (CvsSv3PrivilegesRequiredEnum = {}));
export var CvsSv3ScopeEnum;
(function (CvsSv3ScopeEnum) {
    CvsSv3ScopeEnum["ScopeUnspecified"] = "SCOPE_UNSPECIFIED";
    CvsSv3ScopeEnum["ScopeUnchanged"] = "SCOPE_UNCHANGED";
    CvsSv3ScopeEnum["ScopeChanged"] = "SCOPE_CHANGED";
})(CvsSv3ScopeEnum || (CvsSv3ScopeEnum = {}));
export var CvsSv3UserInteractionEnum;
(function (CvsSv3UserInteractionEnum) {
    CvsSv3UserInteractionEnum["UserInteractionUnspecified"] = "USER_INTERACTION_UNSPECIFIED";
    CvsSv3UserInteractionEnum["UserInteractionNone"] = "USER_INTERACTION_NONE";
    CvsSv3UserInteractionEnum["UserInteractionRequired"] = "USER_INTERACTION_REQUIRED";
})(CvsSv3UserInteractionEnum || (CvsSv3UserInteractionEnum = {}));
// CvsSv3
/**
 * Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
**/
var CvsSv3 = /** @class */ (function (_super) {
    __extends(CvsSv3, _super);
    function CvsSv3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attackComplexity" }),
        __metadata("design:type", String)
    ], CvsSv3.prototype, "attackComplexity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attackVector" }),
        __metadata("design:type", String)
    ], CvsSv3.prototype, "attackVector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityImpact" }),
        __metadata("design:type", String)
    ], CvsSv3.prototype, "availabilityImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseScore" }),
        __metadata("design:type", Number)
    ], CvsSv3.prototype, "baseScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidentialityImpact" }),
        __metadata("design:type", String)
    ], CvsSv3.prototype, "confidentialityImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exploitabilityScore" }),
        __metadata("design:type", Number)
    ], CvsSv3.prototype, "exploitabilityScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impactScore" }),
        __metadata("design:type", Number)
    ], CvsSv3.prototype, "impactScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrityImpact" }),
        __metadata("design:type", String)
    ], CvsSv3.prototype, "integrityImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privilegesRequired" }),
        __metadata("design:type", String)
    ], CvsSv3.prototype, "privilegesRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], CvsSv3.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInteraction" }),
        __metadata("design:type", String)
    ], CvsSv3.prototype, "userInteraction", void 0);
    return CvsSv3;
}(SpeakeasyBase));
export { CvsSv3 };
