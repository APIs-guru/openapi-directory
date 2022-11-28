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
import { OsPolicyResourceConfigStep } from "./ospolicyresourceconfigstep";
import { OsPolicyResourceComplianceExecResourceOutput } from "./ospolicyresourcecomplianceexecresourceoutput";
export var OsPolicyResourceComplianceStateEnum;
(function (OsPolicyResourceComplianceStateEnum) {
    OsPolicyResourceComplianceStateEnum["OsPolicyComplianceStateUnspecified"] = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED";
    OsPolicyResourceComplianceStateEnum["Compliant"] = "COMPLIANT";
    OsPolicyResourceComplianceStateEnum["NonCompliant"] = "NON_COMPLIANT";
    OsPolicyResourceComplianceStateEnum["Unknown"] = "UNKNOWN";
    OsPolicyResourceComplianceStateEnum["NoOsPoliciesApplicable"] = "NO_OS_POLICIES_APPLICABLE";
})(OsPolicyResourceComplianceStateEnum || (OsPolicyResourceComplianceStateEnum = {}));
// OsPolicyResourceCompliance
/**
 * Compliance data for an OS policy resource.
**/
var OsPolicyResourceCompliance = /** @class */ (function (_super) {
    __extends(OsPolicyResourceCompliance, _super);
    function OsPolicyResourceCompliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configSteps", elemType: OsPolicyResourceConfigStep }),
        __metadata("design:type", Array)
    ], OsPolicyResourceCompliance.prototype, "configSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=execResourceOutput" }),
        __metadata("design:type", OsPolicyResourceComplianceExecResourceOutput)
    ], OsPolicyResourceCompliance.prototype, "execResourceOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osPolicyResourceId" }),
        __metadata("design:type", String)
    ], OsPolicyResourceCompliance.prototype, "osPolicyResourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], OsPolicyResourceCompliance.prototype, "state", void 0);
    return OsPolicyResourceCompliance;
}(SpeakeasyBase));
export { OsPolicyResourceCompliance };
