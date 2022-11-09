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
import { ConfigManagementBinauthzState } from "./configmanagementbinauthzstate";
import { ConfigManagementConfigSyncState } from "./configmanagementconfigsyncstate";
import { ConfigManagementHierarchyControllerState } from "./configmanagementhierarchycontrollerstate";
import { ConfigManagementMembershipSpec } from "./configmanagementmembershipspec";
import { ConfigManagementOperatorState } from "./configmanagementoperatorstate";
import { ConfigManagementPolicyControllerState } from "./configmanagementpolicycontrollerstate";
// ConfigManagementMembershipState
/**
 * **Anthos Config Management**: State for a single cluster.
**/
var ConfigManagementMembershipState = /** @class */ (function (_super) {
    __extends(ConfigManagementMembershipState, _super);
    function ConfigManagementMembershipState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=binauthzState" }),
        __metadata("design:type", ConfigManagementBinauthzState)
    ], ConfigManagementMembershipState.prototype, "binauthzState", void 0);
    __decorate([
        Metadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], ConfigManagementMembershipState.prototype, "clusterName", void 0);
    __decorate([
        Metadata({ data: "json, name=configSyncState" }),
        __metadata("design:type", ConfigManagementConfigSyncState)
    ], ConfigManagementMembershipState.prototype, "configSyncState", void 0);
    __decorate([
        Metadata({ data: "json, name=hierarchyControllerState" }),
        __metadata("design:type", ConfigManagementHierarchyControllerState)
    ], ConfigManagementMembershipState.prototype, "hierarchyControllerState", void 0);
    __decorate([
        Metadata({ data: "json, name=membershipSpec" }),
        __metadata("design:type", ConfigManagementMembershipSpec)
    ], ConfigManagementMembershipState.prototype, "membershipSpec", void 0);
    __decorate([
        Metadata({ data: "json, name=operatorState" }),
        __metadata("design:type", ConfigManagementOperatorState)
    ], ConfigManagementMembershipState.prototype, "operatorState", void 0);
    __decorate([
        Metadata({ data: "json, name=policyControllerState" }),
        __metadata("design:type", ConfigManagementPolicyControllerState)
    ], ConfigManagementMembershipState.prototype, "policyControllerState", void 0);
    return ConfigManagementMembershipState;
}(SpeakeasyBase));
export { ConfigManagementMembershipState };
