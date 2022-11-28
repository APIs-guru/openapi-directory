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
import { InstanceOsPoliciesComplianceOsPolicyCompliance } from "./instanceospoliciescomplianceospolicycompliance";
export var InstanceOsPoliciesComplianceStateEnum;
(function (InstanceOsPoliciesComplianceStateEnum) {
    InstanceOsPoliciesComplianceStateEnum["OsPolicyComplianceStateUnspecified"] = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED";
    InstanceOsPoliciesComplianceStateEnum["Compliant"] = "COMPLIANT";
    InstanceOsPoliciesComplianceStateEnum["NonCompliant"] = "NON_COMPLIANT";
    InstanceOsPoliciesComplianceStateEnum["Unknown"] = "UNKNOWN";
    InstanceOsPoliciesComplianceStateEnum["NoOsPoliciesApplicable"] = "NO_OS_POLICIES_APPLICABLE";
})(InstanceOsPoliciesComplianceStateEnum || (InstanceOsPoliciesComplianceStateEnum = {}));
// InstanceOsPoliciesCompliance
/**
 * This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
**/
var InstanceOsPoliciesCompliance = /** @class */ (function (_super) {
    __extends(InstanceOsPoliciesCompliance, _super);
    function InstanceOsPoliciesCompliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailedState" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesCompliance.prototype, "detailedState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detailedStateReason" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesCompliance.prototype, "detailedStateReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesCompliance.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastComplianceCheckTime" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesCompliance.prototype, "lastComplianceCheckTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastComplianceRunId" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesCompliance.prototype, "lastComplianceRunId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesCompliance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osPolicyCompliances", elemType: InstanceOsPoliciesComplianceOsPolicyCompliance }),
        __metadata("design:type", Array)
    ], InstanceOsPoliciesCompliance.prototype, "osPolicyCompliances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], InstanceOsPoliciesCompliance.prototype, "state", void 0);
    return InstanceOsPoliciesCompliance;
}(SpeakeasyBase));
export { InstanceOsPoliciesCompliance };
