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
import { OsPolicyResourceCompliance } from "./ospolicyresourcecompliance";
export var InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum;
(function (InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum) {
    InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum["OsPolicyComplianceStateUnspecified"] = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED";
    InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum["Compliant"] = "COMPLIANT";
    InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum["NonCompliant"] = "NON_COMPLIANT";
    InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum["Unknown"] = "UNKNOWN";
    InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum["NoOsPoliciesApplicable"] = "NO_OS_POLICIES_APPLICABLE";
})(InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum || (InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum = {}));
// InstanceOsPoliciesComplianceOsPolicyCompliance
/**
 * Compliance data for an OS policy
**/
var InstanceOsPoliciesComplianceOsPolicyCompliance = /** @class */ (function (_super) {
    __extends(InstanceOsPoliciesComplianceOsPolicyCompliance, _super);
    function InstanceOsPoliciesComplianceOsPolicyCompliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osPolicyAssignment" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesComplianceOsPolicyCompliance.prototype, "osPolicyAssignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osPolicyId" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesComplianceOsPolicyCompliance.prototype, "osPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osPolicyResourceCompliances", elemType: OsPolicyResourceCompliance }),
        __metadata("design:type", Array)
    ], InstanceOsPoliciesComplianceOsPolicyCompliance.prototype, "osPolicyResourceCompliances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesComplianceOsPolicyCompliance.prototype, "state", void 0);
    return InstanceOsPoliciesComplianceOsPolicyCompliance;
}(SpeakeasyBase));
export { InstanceOsPoliciesComplianceOsPolicyCompliance };
