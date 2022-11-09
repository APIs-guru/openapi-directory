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
import { EventTrigger } from "./eventtrigger";
import { HttpsTrigger } from "./httpstrigger";
import { SourceRepository } from "./sourcerepository";
export var CloudFunctionDockerRegistryEnum;
(function (CloudFunctionDockerRegistryEnum) {
    CloudFunctionDockerRegistryEnum["DockerRegistryUnspecified"] = "DOCKER_REGISTRY_UNSPECIFIED";
    CloudFunctionDockerRegistryEnum["ContainerRegistry"] = "CONTAINER_REGISTRY";
    CloudFunctionDockerRegistryEnum["ArtifactRegistry"] = "ARTIFACT_REGISTRY";
})(CloudFunctionDockerRegistryEnum || (CloudFunctionDockerRegistryEnum = {}));
export var CloudFunctionIngressSettingsEnum;
(function (CloudFunctionIngressSettingsEnum) {
    CloudFunctionIngressSettingsEnum["IngressSettingsUnspecified"] = "INGRESS_SETTINGS_UNSPECIFIED";
    CloudFunctionIngressSettingsEnum["AllowAll"] = "ALLOW_ALL";
    CloudFunctionIngressSettingsEnum["AllowInternalOnly"] = "ALLOW_INTERNAL_ONLY";
    CloudFunctionIngressSettingsEnum["AllowInternalAndGclb"] = "ALLOW_INTERNAL_AND_GCLB";
})(CloudFunctionIngressSettingsEnum || (CloudFunctionIngressSettingsEnum = {}));
export var CloudFunctionStatusEnum;
(function (CloudFunctionStatusEnum) {
    CloudFunctionStatusEnum["CloudFunctionStatusUnspecified"] = "CLOUD_FUNCTION_STATUS_UNSPECIFIED";
    CloudFunctionStatusEnum["Active"] = "ACTIVE";
    CloudFunctionStatusEnum["Offline"] = "OFFLINE";
    CloudFunctionStatusEnum["DeployInProgress"] = "DEPLOY_IN_PROGRESS";
    CloudFunctionStatusEnum["DeleteInProgress"] = "DELETE_IN_PROGRESS";
    CloudFunctionStatusEnum["Unknown"] = "UNKNOWN";
})(CloudFunctionStatusEnum || (CloudFunctionStatusEnum = {}));
export var CloudFunctionVpcConnectorEgressSettingsEnum;
(function (CloudFunctionVpcConnectorEgressSettingsEnum) {
    CloudFunctionVpcConnectorEgressSettingsEnum["VpcConnectorEgressSettingsUnspecified"] = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED";
    CloudFunctionVpcConnectorEgressSettingsEnum["PrivateRangesOnly"] = "PRIVATE_RANGES_ONLY";
    CloudFunctionVpcConnectorEgressSettingsEnum["AllTraffic"] = "ALL_TRAFFIC";
})(CloudFunctionVpcConnectorEgressSettingsEnum || (CloudFunctionVpcConnectorEgressSettingsEnum = {}));
// CloudFunction
/**
 * Describes a Cloud Function that contains user computation executed in response to an event. It encapsulate function and triggers configurations.
**/
var CloudFunction = /** @class */ (function (_super) {
    __extends(CloudFunction, _super);
    function CloudFunction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=availableMemoryMb" }),
        __metadata("design:type", Number)
    ], CloudFunction.prototype, "availableMemoryMb", void 0);
    __decorate([
        Metadata({ data: "json, name=buildEnvironmentVariables" }),
        __metadata("design:type", Map)
    ], CloudFunction.prototype, "buildEnvironmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=buildId" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "buildId", void 0);
    __decorate([
        Metadata({ data: "json, name=buildName" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "buildName", void 0);
    __decorate([
        Metadata({ data: "json, name=buildWorkerPool" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "buildWorkerPool", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=dockerRegistry" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "dockerRegistry", void 0);
    __decorate([
        Metadata({ data: "json, name=dockerRepository" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "dockerRepository", void 0);
    __decorate([
        Metadata({ data: "json, name=entryPoint" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "entryPoint", void 0);
    __decorate([
        Metadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], CloudFunction.prototype, "environmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=eventTrigger" }),
        __metadata("design:type", EventTrigger)
    ], CloudFunction.prototype, "eventTrigger", void 0);
    __decorate([
        Metadata({ data: "json, name=httpsTrigger" }),
        __metadata("design:type", HttpsTrigger)
    ], CloudFunction.prototype, "httpsTrigger", void 0);
    __decorate([
        Metadata({ data: "json, name=ingressSettings" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "ingressSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "kmsKeyName", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], CloudFunction.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=maxInstances" }),
        __metadata("design:type", Number)
    ], CloudFunction.prototype, "maxInstances", void 0);
    __decorate([
        Metadata({ data: "json, name=minInstances" }),
        __metadata("design:type", Number)
    ], CloudFunction.prototype, "minInstances", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "network", void 0);
    __decorate([
        Metadata({ data: "json, name=runtime" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "runtime", void 0);
    __decorate([
        Metadata({ data: "json, name=secretEnvironmentVariables", elemType: shared.SecretEnvVar }),
        __metadata("design:type", Array)
    ], CloudFunction.prototype, "secretEnvironmentVariables", void 0);
    __decorate([
        Metadata({ data: "json, name=secretVolumes", elemType: shared.SecretVolume }),
        __metadata("design:type", Array)
    ], CloudFunction.prototype, "secretVolumes", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "serviceAccountEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceArchiveUrl" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "sourceArchiveUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceRepository" }),
        __metadata("design:type", SourceRepository)
    ], CloudFunction.prototype, "sourceRepository", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceToken" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "sourceToken", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceUploadUrl" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "sourceUploadUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=timeout" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "timeout", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=versionId" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "versionId", void 0);
    __decorate([
        Metadata({ data: "json, name=vpcConnector" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "vpcConnector", void 0);
    __decorate([
        Metadata({ data: "json, name=vpcConnectorEgressSettings" }),
        __metadata("design:type", String)
    ], CloudFunction.prototype, "vpcConnectorEgressSettings", void 0);
    return CloudFunction;
}(SpeakeasyBase));
export { CloudFunction };
