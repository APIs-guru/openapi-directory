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
import { CloudRunConfig } from "./cloudrunconfig";
import { ConfigConnectorConfig } from "./configconnectorconfig";
import { DnsCacheConfig } from "./dnscacheconfig";
import { GcePersistentDiskCsiDriverConfig } from "./gcepersistentdiskcsidriverconfig";
import { GcpFilestoreCsiDriverConfig } from "./gcpfilestorecsidriverconfig";
import { GkeBackupAgentConfig } from "./gkebackupagentconfig";
import { HorizontalPodAutoscaling } from "./horizontalpodautoscaling";
import { HttpLoadBalancing } from "./httploadbalancing";
import { KubernetesDashboard } from "./kubernetesdashboard";
import { NetworkPolicyConfig } from "./networkpolicyconfig";
// AddonsConfig
/**
 * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
**/
var AddonsConfig = /** @class */ (function (_super) {
    __extends(AddonsConfig, _super);
    function AddonsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudRunConfig" }),
        __metadata("design:type", CloudRunConfig)
    ], AddonsConfig.prototype, "cloudRunConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configConnectorConfig" }),
        __metadata("design:type", ConfigConnectorConfig)
    ], AddonsConfig.prototype, "configConnectorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsCacheConfig" }),
        __metadata("design:type", DnsCacheConfig)
    ], AddonsConfig.prototype, "dnsCacheConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcePersistentDiskCsiDriverConfig" }),
        __metadata("design:type", GcePersistentDiskCsiDriverConfig)
    ], AddonsConfig.prototype, "gcePersistentDiskCsiDriverConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcpFilestoreCsiDriverConfig" }),
        __metadata("design:type", GcpFilestoreCsiDriverConfig)
    ], AddonsConfig.prototype, "gcpFilestoreCsiDriverConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeBackupAgentConfig" }),
        __metadata("design:type", GkeBackupAgentConfig)
    ], AddonsConfig.prototype, "gkeBackupAgentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalPodAutoscaling" }),
        __metadata("design:type", HorizontalPodAutoscaling)
    ], AddonsConfig.prototype, "horizontalPodAutoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpLoadBalancing" }),
        __metadata("design:type", HttpLoadBalancing)
    ], AddonsConfig.prototype, "httpLoadBalancing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubernetesDashboard" }),
        __metadata("design:type", KubernetesDashboard)
    ], AddonsConfig.prototype, "kubernetesDashboard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkPolicyConfig" }),
        __metadata("design:type", NetworkPolicyConfig)
    ], AddonsConfig.prototype, "networkPolicyConfig", void 0);
    return AddonsConfig;
}(SpeakeasyBase));
export { AddonsConfig };
