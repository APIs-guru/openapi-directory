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
import { AnthosVmMembershipState } from "./anthosvmmembershipstate";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { ConfigManagementMembershipState } from "./configmanagementmembershipstate";
import { IdentityServiceMembershipState } from "./identityservicemembershipstate";
import { MeteringMembershipState } from "./meteringmembershipstate";
import { PolicyControllerMembershipState } from "./policycontrollermembershipstate";
import { ServiceMeshMembershipState } from "./servicemeshmembershipstate";
import { FeatureState } from "./featurestate";
// MembershipFeatureState
/**
 * MembershipFeatureState contains Feature status information for a single Membership.
**/
var MembershipFeatureState = /** @class */ (function (_super) {
    __extends(MembershipFeatureState, _super);
    function MembershipFeatureState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=anthosvm" }),
        __metadata("design:type", AnthosVmMembershipState)
    ], MembershipFeatureState.prototype, "anthosvm", void 0);
    __decorate([
        Metadata({ data: "json, name=appdevexperience" }),
        __metadata("design:type", AppDevExperienceFeatureState)
    ], MembershipFeatureState.prototype, "appdevexperience", void 0);
    __decorate([
        Metadata({ data: "json, name=configmanagement" }),
        __metadata("design:type", ConfigManagementMembershipState)
    ], MembershipFeatureState.prototype, "configmanagement", void 0);
    __decorate([
        Metadata({ data: "json, name=identityservice" }),
        __metadata("design:type", IdentityServiceMembershipState)
    ], MembershipFeatureState.prototype, "identityservice", void 0);
    __decorate([
        Metadata({ data: "json, name=metering" }),
        __metadata("design:type", MeteringMembershipState)
    ], MembershipFeatureState.prototype, "metering", void 0);
    __decorate([
        Metadata({ data: "json, name=policycontroller" }),
        __metadata("design:type", PolicyControllerMembershipState)
    ], MembershipFeatureState.prototype, "policycontroller", void 0);
    __decorate([
        Metadata({ data: "json, name=servicemesh" }),
        __metadata("design:type", ServiceMeshMembershipState)
    ], MembershipFeatureState.prototype, "servicemesh", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", FeatureState)
    ], MembershipFeatureState.prototype, "state", void 0);
    return MembershipFeatureState;
}(SpeakeasyBase));
export { MembershipFeatureState };
