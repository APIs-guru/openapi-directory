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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnthosObservabilityMembershipSpec } from "./anthosobservabilitymembershipspec";
import { AnthosVmMembershipSpec } from "./anthosvmmembershipspec";
import { MembershipSpec } from "./membershipspec";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { IdentityServiceMembershipSpec } from "./identityservicemembershipspec";
import { ServiceMeshMembershipSpec } from "./servicemeshmembershipspec";
import { PolicyControllerMembershipSpec } from "./policycontrollermembershipspec";
// MembershipFeatureSpec
/**
 * MembershipFeatureSpec contains configuration information for a single Membership.
**/
var MembershipFeatureSpec = /** @class */ (function (_super) {
    __extends(MembershipFeatureSpec, _super);
    function MembershipFeatureSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=anthosobservability" }),
        __metadata("design:type", AnthosObservabilityMembershipSpec)
    ], MembershipFeatureSpec.prototype, "anthosobservability", void 0);
    __decorate([
        Metadata({ data: "json, name=anthosvm" }),
        __metadata("design:type", AnthosVmMembershipSpec)
    ], MembershipFeatureSpec.prototype, "anthosvm", void 0);
    __decorate([
        Metadata({ data: "json, name=cloudbuild" }),
        __metadata("design:type", MembershipSpec)
    ], MembershipFeatureSpec.prototype, "cloudbuild", void 0);
    __decorate([
        Metadata({ data: "json, name=configmanagement" }),
        __metadata("design:type", ConfigManagementMembershipSpec)
    ], MembershipFeatureSpec.prototype, "configmanagement", void 0);
    __decorate([
        Metadata({ data: "json, name=identityservice" }),
        __metadata("design:type", IdentityServiceMembershipSpec)
    ], MembershipFeatureSpec.prototype, "identityservice", void 0);
    __decorate([
        Metadata({ data: "json, name=mesh" }),
        __metadata("design:type", ServiceMeshMembershipSpec)
    ], MembershipFeatureSpec.prototype, "mesh", void 0);
    __decorate([
        Metadata({ data: "json, name=policycontroller" }),
        __metadata("design:type", PolicyControllerMembershipSpec)
    ], MembershipFeatureSpec.prototype, "policycontroller", void 0);
    return MembershipFeatureSpec;
}(SpeakeasyBase));
export { MembershipFeatureSpec };
