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
import { BinaryAuthorization } from "./binaryauthorization";
import { ClusterAutoscaling } from "./clusterautoscaling";
import { CostManagementConfig } from "./costmanagementconfig";
import { DatabaseEncryption } from "./databaseencryption";
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DnsConfig } from "./dnsconfig";
import { GatewayApiConfig } from "./gatewayapiconfig";
import { GcfsConfig } from "./gcfsconfig";
import { IdentityServiceConfig } from "./identityserviceconfig";
import { IntraNodeVisibilityConfig } from "./intranodevisibilityconfig";
import { IlbSubsettingConfig } from "./ilbsubsettingconfig";
import { LoggingConfig } from "./loggingconfig";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { MeshCertificates } from "./meshcertificates";
import { MonitoringConfig } from "./monitoringconfig";
import { NetworkTags } from "./networktags";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { NotificationConfig } from "./notificationconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";
import { ReleaseChannel } from "./releasechannel";
import { ResourceUsageExportConfig } from "./resourceusageexportconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";
import { ShieldedNodes } from "./shieldednodes";
import { VerticalPodAutoscaling } from "./verticalpodautoscaling";
import { WorkloadIdentityConfig } from "./workloadidentityconfig";
export var ClusterUpdateDesiredDatapathProviderEnum;
(function (ClusterUpdateDesiredDatapathProviderEnum) {
    ClusterUpdateDesiredDatapathProviderEnum["DatapathProviderUnspecified"] = "DATAPATH_PROVIDER_UNSPECIFIED";
    ClusterUpdateDesiredDatapathProviderEnum["LegacyDatapath"] = "LEGACY_DATAPATH";
    ClusterUpdateDesiredDatapathProviderEnum["AdvancedDatapath"] = "ADVANCED_DATAPATH";
})(ClusterUpdateDesiredDatapathProviderEnum || (ClusterUpdateDesiredDatapathProviderEnum = {}));
export var ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum;
(function (ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum) {
    ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum["PrivateIpv6GoogleAccessUnspecified"] = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED";
    ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum["PrivateIpv6GoogleAccessDisabled"] = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED";
    ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum["PrivateIpv6GoogleAccessToGoogle"] = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE";
    ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum["PrivateIpv6GoogleAccessBidirectional"] = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL";
})(ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum || (ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = {}));
// ClusterUpdate
/**
 * ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
**/
var ClusterUpdate = /** @class */ (function (_super) {
    __extends(ClusterUpdate, _super);
    function ClusterUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredAddonsConfig" }),
        __metadata("design:type", AddonsConfig)
    ], ClusterUpdate.prototype, "desiredAddonsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredAuthenticatorGroupsConfig" }),
        __metadata("design:type", AuthenticatorGroupsConfig)
    ], ClusterUpdate.prototype, "desiredAuthenticatorGroupsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredBinaryAuthorization" }),
        __metadata("design:type", BinaryAuthorization)
    ], ClusterUpdate.prototype, "desiredBinaryAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredClusterAutoscaling" }),
        __metadata("design:type", ClusterAutoscaling)
    ], ClusterUpdate.prototype, "desiredClusterAutoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredCostManagementConfig" }),
        __metadata("design:type", CostManagementConfig)
    ], ClusterUpdate.prototype, "desiredCostManagementConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredDatabaseEncryption" }),
        __metadata("design:type", DatabaseEncryption)
    ], ClusterUpdate.prototype, "desiredDatabaseEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredDatapathProvider" }),
        __metadata("design:type", String)
    ], ClusterUpdate.prototype, "desiredDatapathProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredDefaultSnatStatus" }),
        __metadata("design:type", DefaultSnatStatus)
    ], ClusterUpdate.prototype, "desiredDefaultSnatStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredDnsConfig" }),
        __metadata("design:type", DnsConfig)
    ], ClusterUpdate.prototype, "desiredDnsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredEnablePrivateEndpoint" }),
        __metadata("design:type", Boolean)
    ], ClusterUpdate.prototype, "desiredEnablePrivateEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredGatewayApiConfig" }),
        __metadata("design:type", GatewayApiConfig)
    ], ClusterUpdate.prototype, "desiredGatewayApiConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredGcfsConfig" }),
        __metadata("design:type", GcfsConfig)
    ], ClusterUpdate.prototype, "desiredGcfsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredIdentityServiceConfig" }),
        __metadata("design:type", IdentityServiceConfig)
    ], ClusterUpdate.prototype, "desiredIdentityServiceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredImageType" }),
        __metadata("design:type", String)
    ], ClusterUpdate.prototype, "desiredImageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredIntraNodeVisibilityConfig" }),
        __metadata("design:type", IntraNodeVisibilityConfig)
    ], ClusterUpdate.prototype, "desiredIntraNodeVisibilityConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredL4ilbSubsettingConfig" }),
        __metadata("design:type", IlbSubsettingConfig)
    ], ClusterUpdate.prototype, "desiredL4ilbSubsettingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredLocations" }),
        __metadata("design:type", Array)
    ], ClusterUpdate.prototype, "desiredLocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredLoggingConfig" }),
        __metadata("design:type", LoggingConfig)
    ], ClusterUpdate.prototype, "desiredLoggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredLoggingService" }),
        __metadata("design:type", String)
    ], ClusterUpdate.prototype, "desiredLoggingService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredMasterAuthorizedNetworksConfig" }),
        __metadata("design:type", MasterAuthorizedNetworksConfig)
    ], ClusterUpdate.prototype, "desiredMasterAuthorizedNetworksConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredMasterVersion" }),
        __metadata("design:type", String)
    ], ClusterUpdate.prototype, "desiredMasterVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredMeshCertificates" }),
        __metadata("design:type", MeshCertificates)
    ], ClusterUpdate.prototype, "desiredMeshCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredMonitoringConfig" }),
        __metadata("design:type", MonitoringConfig)
    ], ClusterUpdate.prototype, "desiredMonitoringConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredMonitoringService" }),
        __metadata("design:type", String)
    ], ClusterUpdate.prototype, "desiredMonitoringService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredNodePoolAutoConfigNetworkTags" }),
        __metadata("design:type", NetworkTags)
    ], ClusterUpdate.prototype, "desiredNodePoolAutoConfigNetworkTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredNodePoolAutoscaling" }),
        __metadata("design:type", NodePoolAutoscaling)
    ], ClusterUpdate.prototype, "desiredNodePoolAutoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredNodePoolId" }),
        __metadata("design:type", String)
    ], ClusterUpdate.prototype, "desiredNodePoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredNodePoolLoggingConfig" }),
        __metadata("design:type", NodePoolLoggingConfig)
    ], ClusterUpdate.prototype, "desiredNodePoolLoggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredNodeVersion" }),
        __metadata("design:type", String)
    ], ClusterUpdate.prototype, "desiredNodeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredNotificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], ClusterUpdate.prototype, "desiredNotificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredPrivateClusterConfig" }),
        __metadata("design:type", PrivateClusterConfig)
    ], ClusterUpdate.prototype, "desiredPrivateClusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredPrivateIpv6GoogleAccess" }),
        __metadata("design:type", String)
    ], ClusterUpdate.prototype, "desiredPrivateIpv6GoogleAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredReleaseChannel" }),
        __metadata("design:type", ReleaseChannel)
    ], ClusterUpdate.prototype, "desiredReleaseChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredResourceUsageExportConfig" }),
        __metadata("design:type", ResourceUsageExportConfig)
    ], ClusterUpdate.prototype, "desiredResourceUsageExportConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredServiceExternalIpsConfig" }),
        __metadata("design:type", ServiceExternalIPsConfig)
    ], ClusterUpdate.prototype, "desiredServiceExternalIpsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredShieldedNodes" }),
        __metadata("design:type", ShieldedNodes)
    ], ClusterUpdate.prototype, "desiredShieldedNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredVerticalPodAutoscaling" }),
        __metadata("design:type", VerticalPodAutoscaling)
    ], ClusterUpdate.prototype, "desiredVerticalPodAutoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredWorkloadIdentityConfig" }),
        __metadata("design:type", WorkloadIdentityConfig)
    ], ClusterUpdate.prototype, "desiredWorkloadIdentityConfig", void 0);
    return ClusterUpdate;
}(SpeakeasyBase));
export { ClusterUpdate };
