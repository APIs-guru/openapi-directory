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
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";
export var ServiceConfigIngressSettingsEnum;
(function (ServiceConfigIngressSettingsEnum) {
    ServiceConfigIngressSettingsEnum["IngressSettingsUnspecified"] = "INGRESS_SETTINGS_UNSPECIFIED";
    ServiceConfigIngressSettingsEnum["AllowAll"] = "ALLOW_ALL";
    ServiceConfigIngressSettingsEnum["AllowInternalOnly"] = "ALLOW_INTERNAL_ONLY";
    ServiceConfigIngressSettingsEnum["AllowInternalAndGclb"] = "ALLOW_INTERNAL_AND_GCLB";
})(ServiceConfigIngressSettingsEnum || (ServiceConfigIngressSettingsEnum = {}));
export var ServiceConfigSecurityLevelEnum;
(function (ServiceConfigSecurityLevelEnum) {
    ServiceConfigSecurityLevelEnum["SecurityLevelUnspecified"] = "SECURITY_LEVEL_UNSPECIFIED";
    ServiceConfigSecurityLevelEnum["SecureAlways"] = "SECURE_ALWAYS";
    ServiceConfigSecurityLevelEnum["SecureOptional"] = "SECURE_OPTIONAL";
})(ServiceConfigSecurityLevelEnum || (ServiceConfigSecurityLevelEnum = {}));
export var ServiceConfigVpcConnectorEgressSettingsEnum;
(function (ServiceConfigVpcConnectorEgressSettingsEnum) {
    ServiceConfigVpcConnectorEgressSettingsEnum["VpcConnectorEgressSettingsUnspecified"] = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED";
    ServiceConfigVpcConnectorEgressSettingsEnum["PrivateRangesOnly"] = "PRIVATE_RANGES_ONLY";
    ServiceConfigVpcConnectorEgressSettingsEnum["AllTraffic"] = "ALL_TRAFFIC";
})(ServiceConfigVpcConnectorEgressSettingsEnum || (ServiceConfigVpcConnectorEgressSettingsEnum = {}));
// ServiceConfig
/**
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
**/
var ServiceConfig = /** @class */ (function (_super) {
    __extends(ServiceConfig, _super);
    function ServiceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allTrafficOnLatestRevision" }),
        __metadata("design:type", Boolean)
    ], ServiceConfig.prototype, "allTrafficOnLatestRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableMemory" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "availableMemory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], ServiceConfig.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingressSettings" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "ingressSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxInstanceCount" }),
        __metadata("design:type", Number)
    ], ServiceConfig.prototype, "maxInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minInstanceCount" }),
        __metadata("design:type", Number)
    ], ServiceConfig.prototype, "minInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretEnvironmentVariables", elemType: SecretEnvVar }),
        __metadata("design:type", Array)
    ], ServiceConfig.prototype, "secretEnvironmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretVolumes", elemType: SecretVolume }),
        __metadata("design:type", Array)
    ], ServiceConfig.prototype, "secretVolumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityLevel" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "securityLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutSeconds" }),
        __metadata("design:type", Number)
    ], ServiceConfig.prototype, "timeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConnector" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "vpcConnector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConnectorEgressSettings" }),
        __metadata("design:type", String)
    ], ServiceConfig.prototype, "vpcConnectorEgressSettings", void 0);
    return ServiceConfig;
}(SpeakeasyBase));
export { ServiceConfig };
// ServiceConfigInput
/**
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
**/
var ServiceConfigInput = /** @class */ (function (_super) {
    __extends(ServiceConfigInput, _super);
    function ServiceConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allTrafficOnLatestRevision" }),
        __metadata("design:type", Boolean)
    ], ServiceConfigInput.prototype, "allTrafficOnLatestRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableMemory" }),
        __metadata("design:type", String)
    ], ServiceConfigInput.prototype, "availableMemory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], ServiceConfigInput.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingressSettings" }),
        __metadata("design:type", String)
    ], ServiceConfigInput.prototype, "ingressSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxInstanceCount" }),
        __metadata("design:type", Number)
    ], ServiceConfigInput.prototype, "maxInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minInstanceCount" }),
        __metadata("design:type", Number)
    ], ServiceConfigInput.prototype, "minInstanceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretEnvironmentVariables", elemType: SecretEnvVar }),
        __metadata("design:type", Array)
    ], ServiceConfigInput.prototype, "secretEnvironmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretVolumes", elemType: SecretVolume }),
        __metadata("design:type", Array)
    ], ServiceConfigInput.prototype, "secretVolumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityLevel" }),
        __metadata("design:type", String)
    ], ServiceConfigInput.prototype, "securityLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], ServiceConfigInput.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutSeconds" }),
        __metadata("design:type", Number)
    ], ServiceConfigInput.prototype, "timeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConnector" }),
        __metadata("design:type", String)
    ], ServiceConfigInput.prototype, "vpcConnector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConnectorEgressSettings" }),
        __metadata("design:type", String)
    ], ServiceConfigInput.prototype, "vpcConnectorEgressSettings", void 0);
    return ServiceConfigInput;
}(SpeakeasyBase));
export { ServiceConfigInput };
