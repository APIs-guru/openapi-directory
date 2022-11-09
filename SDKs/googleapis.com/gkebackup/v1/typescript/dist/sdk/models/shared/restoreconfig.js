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
import * as shared from "../shared";
import { ClusterResourceRestoreScope } from "./clusterresourcerestorescope";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";
export var RestoreConfigClusterResourceConflictPolicyEnum;
(function (RestoreConfigClusterResourceConflictPolicyEnum) {
    RestoreConfigClusterResourceConflictPolicyEnum["ClusterResourceConflictPolicyUnspecified"] = "CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED";
    RestoreConfigClusterResourceConflictPolicyEnum["UseExistingVersion"] = "USE_EXISTING_VERSION";
    RestoreConfigClusterResourceConflictPolicyEnum["UseBackupVersion"] = "USE_BACKUP_VERSION";
})(RestoreConfigClusterResourceConflictPolicyEnum || (RestoreConfigClusterResourceConflictPolicyEnum = {}));
export var RestoreConfigNamespacedResourceRestoreModeEnum;
(function (RestoreConfigNamespacedResourceRestoreModeEnum) {
    RestoreConfigNamespacedResourceRestoreModeEnum["NamespacedResourceRestoreModeUnspecified"] = "NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED";
    RestoreConfigNamespacedResourceRestoreModeEnum["DeleteAndRestore"] = "DELETE_AND_RESTORE";
    RestoreConfigNamespacedResourceRestoreModeEnum["FailOnConflict"] = "FAIL_ON_CONFLICT";
})(RestoreConfigNamespacedResourceRestoreModeEnum || (RestoreConfigNamespacedResourceRestoreModeEnum = {}));
export var RestoreConfigVolumeDataRestorePolicyEnum;
(function (RestoreConfigVolumeDataRestorePolicyEnum) {
    RestoreConfigVolumeDataRestorePolicyEnum["VolumeDataRestorePolicyUnspecified"] = "VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED";
    RestoreConfigVolumeDataRestorePolicyEnum["RestoreVolumeDataFromBackup"] = "RESTORE_VOLUME_DATA_FROM_BACKUP";
    RestoreConfigVolumeDataRestorePolicyEnum["ReuseVolumeHandleFromBackup"] = "REUSE_VOLUME_HANDLE_FROM_BACKUP";
    RestoreConfigVolumeDataRestorePolicyEnum["NoVolumeDataRestoration"] = "NO_VOLUME_DATA_RESTORATION";
})(RestoreConfigVolumeDataRestorePolicyEnum || (RestoreConfigVolumeDataRestorePolicyEnum = {}));
// RestoreConfig
/**
 * Configuration of a restore. Next id: 9
**/
var RestoreConfig = /** @class */ (function (_super) {
    __extends(RestoreConfig, _super);
    function RestoreConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allNamespaces" }),
        __metadata("design:type", Boolean)
    ], RestoreConfig.prototype, "allNamespaces", void 0);
    __decorate([
        Metadata({ data: "json, name=clusterResourceConflictPolicy" }),
        __metadata("design:type", String)
    ], RestoreConfig.prototype, "clusterResourceConflictPolicy", void 0);
    __decorate([
        Metadata({ data: "json, name=clusterResourceRestoreScope" }),
        __metadata("design:type", ClusterResourceRestoreScope)
    ], RestoreConfig.prototype, "clusterResourceRestoreScope", void 0);
    __decorate([
        Metadata({ data: "json, name=namespacedResourceRestoreMode" }),
        __metadata("design:type", String)
    ], RestoreConfig.prototype, "namespacedResourceRestoreMode", void 0);
    __decorate([
        Metadata({ data: "json, name=selectedApplications" }),
        __metadata("design:type", NamespacedNames)
    ], RestoreConfig.prototype, "selectedApplications", void 0);
    __decorate([
        Metadata({ data: "json, name=selectedNamespaces" }),
        __metadata("design:type", Namespaces)
    ], RestoreConfig.prototype, "selectedNamespaces", void 0);
    __decorate([
        Metadata({ data: "json, name=substitutionRules", elemType: shared.SubstitutionRule }),
        __metadata("design:type", Array)
    ], RestoreConfig.prototype, "substitutionRules", void 0);
    __decorate([
        Metadata({ data: "json, name=volumeDataRestorePolicy" }),
        __metadata("design:type", String)
    ], RestoreConfig.prototype, "volumeDataRestorePolicy", void 0);
    return RestoreConfig;
}(SpeakeasyBase));
export { RestoreConfig };
