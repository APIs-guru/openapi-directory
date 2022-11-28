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
import { AcceleratorConfig } from "./acceleratorconfig";
import { AdvancedMachineFeatures } from "./advancedmachinefeatures";
import { ConfidentialNodes } from "./confidentialnodes";
import { FastSocket } from "./fastsocket";
import { GcfsConfig } from "./gcfsconfig";
import { VirtualNic } from "./virtualnic";
import { NodeKubeletConfig } from "./nodekubeletconfig";
import { LinuxNodeConfig } from "./linuxnodeconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { ReservationAffinity } from "./reservationaffinity";
import { SandboxConfig } from "./sandboxconfig";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { NodeTaint } from "./nodetaint";
import { WorkloadMetadataConfig } from "./workloadmetadataconfig";
// NodeConfig
/**
 * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
**/
var NodeConfig = /** @class */ (function (_super) {
    __extends(NodeConfig, _super);
    function NodeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accelerators", elemType: AcceleratorConfig }),
        __metadata("design:type", Array)
    ], NodeConfig.prototype, "accelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advancedMachineFeatures" }),
        __metadata("design:type", AdvancedMachineFeatures)
    ], NodeConfig.prototype, "advancedMachineFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootDiskKmsKey" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "bootDiskKmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidentialNodes" }),
        __metadata("design:type", ConfidentialNodes)
    ], NodeConfig.prototype, "confidentialNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSizeGb" }),
        __metadata("design:type", Number)
    ], NodeConfig.prototype, "diskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskType" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "diskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fastSocket" }),
        __metadata("design:type", FastSocket)
    ], NodeConfig.prototype, "fastSocket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcfsConfig" }),
        __metadata("design:type", GcfsConfig)
    ], NodeConfig.prototype, "gcfsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gvnic" }),
        __metadata("design:type", VirtualNic)
    ], NodeConfig.prototype, "gvnic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageType" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubeletConfig" }),
        __metadata("design:type", NodeKubeletConfig)
    ], NodeConfig.prototype, "kubeletConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], NodeConfig.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linuxNodeConfig" }),
        __metadata("design:type", LinuxNodeConfig)
    ], NodeConfig.prototype, "linuxNodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localSsdCount" }),
        __metadata("design:type", Number)
    ], NodeConfig.prototype, "localSsdCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", NodePoolLoggingConfig)
    ], NodeConfig.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], NodeConfig.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minCpuPlatform" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "minCpuPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeGroup" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "nodeGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthScopes" }),
        __metadata("design:type", Array)
    ], NodeConfig.prototype, "oauthScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preemptible" }),
        __metadata("design:type", Boolean)
    ], NodeConfig.prototype, "preemptible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservationAffinity" }),
        __metadata("design:type", ReservationAffinity)
    ], NodeConfig.prototype, "reservationAffinity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceLabels" }),
        __metadata("design:type", Map)
    ], NodeConfig.prototype, "resourceLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sandboxConfig" }),
        __metadata("design:type", SandboxConfig)
    ], NodeConfig.prototype, "sandboxConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" }),
        __metadata("design:type", ShieldedInstanceConfig)
    ], NodeConfig.prototype, "shieldedInstanceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spot" }),
        __metadata("design:type", Boolean)
    ], NodeConfig.prototype, "spot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NodeConfig.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taints", elemType: NodeTaint }),
        __metadata("design:type", Array)
    ], NodeConfig.prototype, "taints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workloadMetadataConfig" }),
        __metadata("design:type", WorkloadMetadataConfig)
    ], NodeConfig.prototype, "workloadMetadataConfig", void 0);
    return NodeConfig;
}(SpeakeasyBase));
export { NodeConfig };
