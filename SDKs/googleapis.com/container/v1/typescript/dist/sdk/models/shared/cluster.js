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
import { AddonsConfig } from "./addonsconfig";
import { AuthenticatorGroupsConfig } from "./authenticatorgroupsconfig";
import { Autopilot } from "./autopilot";
import { ClusterAutoscaling } from "./clusterautoscaling";
import { BinaryAuthorization } from "./binaryauthorization";
import { StatusCondition } from "./statuscondition";
import { ConfidentialNodes } from "./confidentialnodes";
import { CostManagementConfig } from "./costmanagementconfig";
import { DatabaseEncryption } from "./databaseencryption";
import { MaxPodsConstraint } from "./maxpodsconstraint";
import { IdentityServiceConfig } from "./identityserviceconfig";
import { IpAllocationPolicy } from "./ipallocationpolicy";
import { LegacyAbac } from "./legacyabac";
import { LoggingConfig } from "./loggingconfig";
import { MaintenancePolicy } from "./maintenancepolicy";
import { MasterAuth } from "./masterauth";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { MeshCertificates } from "./meshcertificates";
import { MonitoringConfig } from "./monitoringconfig";
import { NetworkConfig } from "./networkconfig";
import { NetworkPolicy } from "./networkpolicy";
import { NodeConfig } from "./nodeconfig";
import { NodePoolAutoConfig } from "./nodepoolautoconfig";
import { NodePoolDefaults } from "./nodepooldefaults";
import { NodePool } from "./nodepool";
import { NotificationConfig } from "./notificationconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";
import { ReleaseChannel } from "./releasechannel";
import { ResourceUsageExportConfig } from "./resourceusageexportconfig";
import { ShieldedNodes } from "./shieldednodes";
import { VerticalPodAutoscaling } from "./verticalpodautoscaling";
import { WorkloadIdentityConfig } from "./workloadidentityconfig";
export var ClusterStatusEnum;
(function (ClusterStatusEnum) {
    ClusterStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    ClusterStatusEnum["Provisioning"] = "PROVISIONING";
    ClusterStatusEnum["Running"] = "RUNNING";
    ClusterStatusEnum["Reconciling"] = "RECONCILING";
    ClusterStatusEnum["Stopping"] = "STOPPING";
    ClusterStatusEnum["Error"] = "ERROR";
    ClusterStatusEnum["Degraded"] = "DEGRADED";
})(ClusterStatusEnum || (ClusterStatusEnum = {}));
// ClusterInput
/**
 * A Google Kubernetes Engine cluster.
**/
var ClusterInput = /** @class */ (function (_super) {
    __extends(ClusterInput, _super);
    function ClusterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addonsConfig" }),
        __metadata("design:type", AddonsConfig)
    ], ClusterInput.prototype, "addonsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticatorGroupsConfig" }),
        __metadata("design:type", AuthenticatorGroupsConfig)
    ], ClusterInput.prototype, "authenticatorGroupsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autopilot" }),
        __metadata("design:type", Autopilot)
    ], ClusterInput.prototype, "autopilot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoscaling" }),
        __metadata("design:type", ClusterAutoscaling)
    ], ClusterInput.prototype, "autoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binaryAuthorization" }),
        __metadata("design:type", BinaryAuthorization)
    ], ClusterInput.prototype, "binaryAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterIpv4Cidr" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "clusterIpv4Cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: StatusCondition }),
        __metadata("design:type", Array)
    ], ClusterInput.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidentialNodes" }),
        __metadata("design:type", ConfidentialNodes)
    ], ClusterInput.prototype, "confidentialNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costManagementConfig" }),
        __metadata("design:type", CostManagementConfig)
    ], ClusterInput.prototype, "costManagementConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentMasterVersion" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "currentMasterVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentNodeCount" }),
        __metadata("design:type", Number)
    ], ClusterInput.prototype, "currentNodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentNodeVersion" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "currentNodeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseEncryption" }),
        __metadata("design:type", DatabaseEncryption)
    ], ClusterInput.prototype, "databaseEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultMaxPodsConstraint" }),
        __metadata("design:type", MaxPodsConstraint)
    ], ClusterInput.prototype, "defaultMaxPodsConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableKubernetesAlpha" }),
        __metadata("design:type", Boolean)
    ], ClusterInput.prototype, "enableKubernetesAlpha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableTpu" }),
        __metadata("design:type", Boolean)
    ], ClusterInput.prototype, "enableTpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityServiceConfig" }),
        __metadata("design:type", IdentityServiceConfig)
    ], ClusterInput.prototype, "identityServiceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialClusterVersion" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "initialClusterVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialNodeCount" }),
        __metadata("design:type", Number)
    ], ClusterInput.prototype, "initialNodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceGroupUrls" }),
        __metadata("design:type", Array)
    ], ClusterInput.prototype, "instanceGroupUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAllocationPolicy" }),
        __metadata("design:type", IpAllocationPolicy)
    ], ClusterInput.prototype, "ipAllocationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelFingerprint" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "labelFingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyAbac" }),
        __metadata("design:type", LegacyAbac)
    ], ClusterInput.prototype, "legacyAbac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Array)
    ], ClusterInput.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", LoggingConfig)
    ], ClusterInput.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingService" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "loggingService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenancePolicy" }),
        __metadata("design:type", MaintenancePolicy)
    ], ClusterInput.prototype, "maintenancePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterAuth" }),
        __metadata("design:type", MasterAuth)
    ], ClusterInput.prototype, "masterAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterAuthorizedNetworksConfig" }),
        __metadata("design:type", MasterAuthorizedNetworksConfig)
    ], ClusterInput.prototype, "masterAuthorizedNetworksConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshCertificates" }),
        __metadata("design:type", MeshCertificates)
    ], ClusterInput.prototype, "meshCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoringConfig" }),
        __metadata("design:type", MonitoringConfig)
    ], ClusterInput.prototype, "monitoringConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoringService" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "monitoringService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], ClusterInput.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkPolicy" }),
        __metadata("design:type", NetworkPolicy)
    ], ClusterInput.prototype, "networkPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", NodeConfig)
    ], ClusterInput.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeIpv4CidrSize" }),
        __metadata("design:type", Number)
    ], ClusterInput.prototype, "nodeIpv4CidrSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePoolAutoConfig" }),
        __metadata("design:type", NodePoolAutoConfig)
    ], ClusterInput.prototype, "nodePoolAutoConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePoolDefaults" }),
        __metadata("design:type", NodePoolDefaults)
    ], ClusterInput.prototype, "nodePoolDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePools", elemType: NodePool }),
        __metadata("design:type", Array)
    ], ClusterInput.prototype, "nodePools", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], ClusterInput.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateClusterConfig" }),
        __metadata("design:type", PrivateClusterConfig)
    ], ClusterInput.prototype, "privateClusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseChannel" }),
        __metadata("design:type", ReleaseChannel)
    ], ClusterInput.prototype, "releaseChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceLabels" }),
        __metadata("design:type", Map)
    ], ClusterInput.prototype, "resourceLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUsageExportConfig" }),
        __metadata("design:type", ResourceUsageExportConfig)
    ], ClusterInput.prototype, "resourceUsageExportConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicesIpv4Cidr" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "servicesIpv4Cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shieldedNodes" }),
        __metadata("design:type", ShieldedNodes)
    ], ClusterInput.prototype, "shieldedNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "subnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tpuIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "tpuIpv4CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticalPodAutoscaling" }),
        __metadata("design:type", VerticalPodAutoscaling)
    ], ClusterInput.prototype, "verticalPodAutoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workloadIdentityConfig" }),
        __metadata("design:type", WorkloadIdentityConfig)
    ], ClusterInput.prototype, "workloadIdentityConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "zone", void 0);
    return ClusterInput;
}(SpeakeasyBase));
export { ClusterInput };
// Cluster
/**
 * A Google Kubernetes Engine cluster.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addonsConfig" }),
        __metadata("design:type", AddonsConfig)
    ], Cluster.prototype, "addonsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticatorGroupsConfig" }),
        __metadata("design:type", AuthenticatorGroupsConfig)
    ], Cluster.prototype, "authenticatorGroupsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autopilot" }),
        __metadata("design:type", Autopilot)
    ], Cluster.prototype, "autopilot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoscaling" }),
        __metadata("design:type", ClusterAutoscaling)
    ], Cluster.prototype, "autoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binaryAuthorization" }),
        __metadata("design:type", BinaryAuthorization)
    ], Cluster.prototype, "binaryAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterIpv4Cidr" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterIpv4Cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: StatusCondition }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidentialNodes" }),
        __metadata("design:type", ConfidentialNodes)
    ], Cluster.prototype, "confidentialNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costManagementConfig" }),
        __metadata("design:type", CostManagementConfig)
    ], Cluster.prototype, "costManagementConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentMasterVersion" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "currentMasterVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentNodeCount" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "currentNodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentNodeVersion" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "currentNodeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseEncryption" }),
        __metadata("design:type", DatabaseEncryption)
    ], Cluster.prototype, "databaseEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultMaxPodsConstraint" }),
        __metadata("design:type", MaxPodsConstraint)
    ], Cluster.prototype, "defaultMaxPodsConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableKubernetesAlpha" }),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "enableKubernetesAlpha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableTpu" }),
        __metadata("design:type", Boolean)
    ], Cluster.prototype, "enableTpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityServiceConfig" }),
        __metadata("design:type", IdentityServiceConfig)
    ], Cluster.prototype, "identityServiceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialClusterVersion" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "initialClusterVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialNodeCount" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "initialNodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceGroupUrls" }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "instanceGroupUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAllocationPolicy" }),
        __metadata("design:type", IpAllocationPolicy)
    ], Cluster.prototype, "ipAllocationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelFingerprint" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "labelFingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legacyAbac" }),
        __metadata("design:type", LegacyAbac)
    ], Cluster.prototype, "legacyAbac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", LoggingConfig)
    ], Cluster.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingService" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "loggingService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenancePolicy" }),
        __metadata("design:type", MaintenancePolicy)
    ], Cluster.prototype, "maintenancePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterAuth" }),
        __metadata("design:type", MasterAuth)
    ], Cluster.prototype, "masterAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterAuthorizedNetworksConfig" }),
        __metadata("design:type", MasterAuthorizedNetworksConfig)
    ], Cluster.prototype, "masterAuthorizedNetworksConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshCertificates" }),
        __metadata("design:type", MeshCertificates)
    ], Cluster.prototype, "meshCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoringConfig" }),
        __metadata("design:type", MonitoringConfig)
    ], Cluster.prototype, "monitoringConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoringService" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "monitoringService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NetworkConfig)
    ], Cluster.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkPolicy" }),
        __metadata("design:type", NetworkPolicy)
    ], Cluster.prototype, "networkPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", NodeConfig)
    ], Cluster.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeIpv4CidrSize" }),
        __metadata("design:type", Number)
    ], Cluster.prototype, "nodeIpv4CidrSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePoolAutoConfig" }),
        __metadata("design:type", NodePoolAutoConfig)
    ], Cluster.prototype, "nodePoolAutoConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePoolDefaults" }),
        __metadata("design:type", NodePoolDefaults)
    ], Cluster.prototype, "nodePoolDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePools", elemType: NodePool }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "nodePools", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], Cluster.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateClusterConfig" }),
        __metadata("design:type", PrivateClusterConfig)
    ], Cluster.prototype, "privateClusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseChannel" }),
        __metadata("design:type", ReleaseChannel)
    ], Cluster.prototype, "releaseChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceLabels" }),
        __metadata("design:type", Map)
    ], Cluster.prototype, "resourceLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUsageExportConfig" }),
        __metadata("design:type", ResourceUsageExportConfig)
    ], Cluster.prototype, "resourceUsageExportConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicesIpv4Cidr" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "servicesIpv4Cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shieldedNodes" }),
        __metadata("design:type", ShieldedNodes)
    ], Cluster.prototype, "shieldedNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "subnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tpuIpv4CidrBlock" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "tpuIpv4CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticalPodAutoscaling" }),
        __metadata("design:type", VerticalPodAutoscaling)
    ], Cluster.prototype, "verticalPodAutoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workloadIdentityConfig" }),
        __metadata("design:type", WorkloadIdentityConfig)
    ], Cluster.prototype, "workloadIdentityConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "zone", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
