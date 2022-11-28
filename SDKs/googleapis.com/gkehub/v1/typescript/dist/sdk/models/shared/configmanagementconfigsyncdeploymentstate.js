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
export var ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum;
(function (ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum) {
    ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum["DeploymentStateUnspecified"] = "DEPLOYMENT_STATE_UNSPECIFIED";
    ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum["NotInstalled"] = "NOT_INSTALLED";
    ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum["Installed"] = "INSTALLED";
    ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum["Error"] = "ERROR";
})(ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum || (ConfigManagementConfigSyncDeploymentStateAdmissionWebhookEnum = {}));
export var ConfigManagementConfigSyncDeploymentStateGitSyncEnum;
(function (ConfigManagementConfigSyncDeploymentStateGitSyncEnum) {
    ConfigManagementConfigSyncDeploymentStateGitSyncEnum["DeploymentStateUnspecified"] = "DEPLOYMENT_STATE_UNSPECIFIED";
    ConfigManagementConfigSyncDeploymentStateGitSyncEnum["NotInstalled"] = "NOT_INSTALLED";
    ConfigManagementConfigSyncDeploymentStateGitSyncEnum["Installed"] = "INSTALLED";
    ConfigManagementConfigSyncDeploymentStateGitSyncEnum["Error"] = "ERROR";
})(ConfigManagementConfigSyncDeploymentStateGitSyncEnum || (ConfigManagementConfigSyncDeploymentStateGitSyncEnum = {}));
export var ConfigManagementConfigSyncDeploymentStateImporterEnum;
(function (ConfigManagementConfigSyncDeploymentStateImporterEnum) {
    ConfigManagementConfigSyncDeploymentStateImporterEnum["DeploymentStateUnspecified"] = "DEPLOYMENT_STATE_UNSPECIFIED";
    ConfigManagementConfigSyncDeploymentStateImporterEnum["NotInstalled"] = "NOT_INSTALLED";
    ConfigManagementConfigSyncDeploymentStateImporterEnum["Installed"] = "INSTALLED";
    ConfigManagementConfigSyncDeploymentStateImporterEnum["Error"] = "ERROR";
})(ConfigManagementConfigSyncDeploymentStateImporterEnum || (ConfigManagementConfigSyncDeploymentStateImporterEnum = {}));
export var ConfigManagementConfigSyncDeploymentStateMonitorEnum;
(function (ConfigManagementConfigSyncDeploymentStateMonitorEnum) {
    ConfigManagementConfigSyncDeploymentStateMonitorEnum["DeploymentStateUnspecified"] = "DEPLOYMENT_STATE_UNSPECIFIED";
    ConfigManagementConfigSyncDeploymentStateMonitorEnum["NotInstalled"] = "NOT_INSTALLED";
    ConfigManagementConfigSyncDeploymentStateMonitorEnum["Installed"] = "INSTALLED";
    ConfigManagementConfigSyncDeploymentStateMonitorEnum["Error"] = "ERROR";
})(ConfigManagementConfigSyncDeploymentStateMonitorEnum || (ConfigManagementConfigSyncDeploymentStateMonitorEnum = {}));
export var ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum;
(function (ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum) {
    ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum["DeploymentStateUnspecified"] = "DEPLOYMENT_STATE_UNSPECIFIED";
    ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum["NotInstalled"] = "NOT_INSTALLED";
    ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum["Installed"] = "INSTALLED";
    ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum["Error"] = "ERROR";
})(ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum || (ConfigManagementConfigSyncDeploymentStateReconcilerManagerEnum = {}));
export var ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum;
(function (ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum) {
    ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum["DeploymentStateUnspecified"] = "DEPLOYMENT_STATE_UNSPECIFIED";
    ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum["NotInstalled"] = "NOT_INSTALLED";
    ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum["Installed"] = "INSTALLED";
    ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum["Error"] = "ERROR";
})(ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum || (ConfigManagementConfigSyncDeploymentStateRootReconcilerEnum = {}));
export var ConfigManagementConfigSyncDeploymentStateSyncerEnum;
(function (ConfigManagementConfigSyncDeploymentStateSyncerEnum) {
    ConfigManagementConfigSyncDeploymentStateSyncerEnum["DeploymentStateUnspecified"] = "DEPLOYMENT_STATE_UNSPECIFIED";
    ConfigManagementConfigSyncDeploymentStateSyncerEnum["NotInstalled"] = "NOT_INSTALLED";
    ConfigManagementConfigSyncDeploymentStateSyncerEnum["Installed"] = "INSTALLED";
    ConfigManagementConfigSyncDeploymentStateSyncerEnum["Error"] = "ERROR";
})(ConfigManagementConfigSyncDeploymentStateSyncerEnum || (ConfigManagementConfigSyncDeploymentStateSyncerEnum = {}));
// ConfigManagementConfigSyncDeploymentState
/**
 * The state of ConfigSync's deployment on a cluster
**/
var ConfigManagementConfigSyncDeploymentState = /** @class */ (function (_super) {
    __extends(ConfigManagementConfigSyncDeploymentState, _super);
    function ConfigManagementConfigSyncDeploymentState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admissionWebhook" }),
        __metadata("design:type", String)
    ], ConfigManagementConfigSyncDeploymentState.prototype, "admissionWebhook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitSync" }),
        __metadata("design:type", String)
    ], ConfigManagementConfigSyncDeploymentState.prototype, "gitSync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importer" }),
        __metadata("design:type", String)
    ], ConfigManagementConfigSyncDeploymentState.prototype, "importer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitor" }),
        __metadata("design:type", String)
    ], ConfigManagementConfigSyncDeploymentState.prototype, "monitor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconcilerManager" }),
        __metadata("design:type", String)
    ], ConfigManagementConfigSyncDeploymentState.prototype, "reconcilerManager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootReconciler" }),
        __metadata("design:type", String)
    ], ConfigManagementConfigSyncDeploymentState.prototype, "rootReconciler", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syncer" }),
        __metadata("design:type", String)
    ], ConfigManagementConfigSyncDeploymentState.prototype, "syncer", void 0);
    return ConfigManagementConfigSyncDeploymentState;
}(SpeakeasyBase));
export { ConfigManagementConfigSyncDeploymentState };
