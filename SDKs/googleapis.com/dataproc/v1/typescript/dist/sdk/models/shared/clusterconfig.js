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
import { AutoscalingConfig } from "./autoscalingconfig";
import { DataprocMetricConfig } from "./dataprocmetricconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { EndpointConfig } from "./endpointconfig";
import { GceClusterConfig } from "./gceclusterconfig";
import { GkeClusterConfig } from "./gkeclusterconfig";
import { NodeInitializationAction } from "./nodeinitializationaction";
import { LifecycleConfig } from "./lifecycleconfig";
import { InstanceGroupConfig } from "./instancegroupconfig";
import { MetastoreConfig } from "./metastoreconfig";
import { SecurityConfig } from "./securityconfig";
import { SoftwareConfig } from "./softwareconfig";
import { EndpointConfigInput } from "./endpointconfig";
import { LifecycleConfigInput } from "./lifecycleconfig";
import { InstanceGroupConfigInput } from "./instancegroupconfig";
// ClusterConfig
/**
 * The cluster config.
**/
var ClusterConfig = /** @class */ (function (_super) {
    __extends(ClusterConfig, _super);
    function ClusterConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoscalingConfig" }),
        __metadata("design:type", AutoscalingConfig)
    ], ClusterConfig.prototype, "autoscalingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configBucket" }),
        __metadata("design:type", String)
    ], ClusterConfig.prototype, "configBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataprocMetricConfig" }),
        __metadata("design:type", DataprocMetricConfig)
    ], ClusterConfig.prototype, "dataprocMetricConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], ClusterConfig.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointConfig" }),
        __metadata("design:type", EndpointConfig)
    ], ClusterConfig.prototype, "endpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gceClusterConfig" }),
        __metadata("design:type", GceClusterConfig)
    ], ClusterConfig.prototype, "gceClusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeClusterConfig" }),
        __metadata("design:type", GkeClusterConfig)
    ], ClusterConfig.prototype, "gkeClusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initializationActions", elemType: NodeInitializationAction }),
        __metadata("design:type", Array)
    ], ClusterConfig.prototype, "initializationActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycleConfig" }),
        __metadata("design:type", LifecycleConfig)
    ], ClusterConfig.prototype, "lifecycleConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterConfig" }),
        __metadata("design:type", InstanceGroupConfig)
    ], ClusterConfig.prototype, "masterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metastoreConfig" }),
        __metadata("design:type", MetastoreConfig)
    ], ClusterConfig.prototype, "metastoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryWorkerConfig" }),
        __metadata("design:type", InstanceGroupConfig)
    ], ClusterConfig.prototype, "secondaryWorkerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityConfig" }),
        __metadata("design:type", SecurityConfig)
    ], ClusterConfig.prototype, "securityConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareConfig" }),
        __metadata("design:type", SoftwareConfig)
    ], ClusterConfig.prototype, "softwareConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempBucket" }),
        __metadata("design:type", String)
    ], ClusterConfig.prototype, "tempBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfig" }),
        __metadata("design:type", InstanceGroupConfig)
    ], ClusterConfig.prototype, "workerConfig", void 0);
    return ClusterConfig;
}(SpeakeasyBase));
export { ClusterConfig };
// ClusterConfigInput
/**
 * The cluster config.
**/
var ClusterConfigInput = /** @class */ (function (_super) {
    __extends(ClusterConfigInput, _super);
    function ClusterConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoscalingConfig" }),
        __metadata("design:type", AutoscalingConfig)
    ], ClusterConfigInput.prototype, "autoscalingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configBucket" }),
        __metadata("design:type", String)
    ], ClusterConfigInput.prototype, "configBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataprocMetricConfig" }),
        __metadata("design:type", DataprocMetricConfig)
    ], ClusterConfigInput.prototype, "dataprocMetricConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], ClusterConfigInput.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointConfig" }),
        __metadata("design:type", EndpointConfigInput)
    ], ClusterConfigInput.prototype, "endpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gceClusterConfig" }),
        __metadata("design:type", GceClusterConfig)
    ], ClusterConfigInput.prototype, "gceClusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeClusterConfig" }),
        __metadata("design:type", GkeClusterConfig)
    ], ClusterConfigInput.prototype, "gkeClusterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initializationActions", elemType: NodeInitializationAction }),
        __metadata("design:type", Array)
    ], ClusterConfigInput.prototype, "initializationActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycleConfig" }),
        __metadata("design:type", LifecycleConfigInput)
    ], ClusterConfigInput.prototype, "lifecycleConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterConfig" }),
        __metadata("design:type", InstanceGroupConfigInput)
    ], ClusterConfigInput.prototype, "masterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metastoreConfig" }),
        __metadata("design:type", MetastoreConfig)
    ], ClusterConfigInput.prototype, "metastoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryWorkerConfig" }),
        __metadata("design:type", InstanceGroupConfigInput)
    ], ClusterConfigInput.prototype, "secondaryWorkerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityConfig" }),
        __metadata("design:type", SecurityConfig)
    ], ClusterConfigInput.prototype, "securityConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareConfig" }),
        __metadata("design:type", SoftwareConfig)
    ], ClusterConfigInput.prototype, "softwareConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempBucket" }),
        __metadata("design:type", String)
    ], ClusterConfigInput.prototype, "tempBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfig" }),
        __metadata("design:type", InstanceGroupConfigInput)
    ], ClusterConfigInput.prototype, "workerConfig", void 0);
    return ClusterConfigInput;
}(SpeakeasyBase));
export { ClusterConfigInput };
