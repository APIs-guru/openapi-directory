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
import { DatabaseConfig } from "./databaseconfig";
import { EncryptionConfig } from "./encryptionconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { NodeConfig } from "./nodeconfig";
import { PrivateEnvironmentConfig } from "./privateenvironmentconfig";
import { SoftwareConfig } from "./softwareconfig";
import { WebServerConfig } from "./webserverconfig";
import { WebServerNetworkAccessControl } from "./webservernetworkaccesscontrol";
import { WorkloadsConfig } from "./workloadsconfig";
import { PrivateEnvironmentConfigInput } from "./privateenvironmentconfig";
export var EnvironmentConfigEnvironmentSizeEnum;
(function (EnvironmentConfigEnvironmentSizeEnum) {
    EnvironmentConfigEnvironmentSizeEnum["EnvironmentSizeUnspecified"] = "ENVIRONMENT_SIZE_UNSPECIFIED";
    EnvironmentConfigEnvironmentSizeEnum["EnvironmentSizeSmall"] = "ENVIRONMENT_SIZE_SMALL";
    EnvironmentConfigEnvironmentSizeEnum["EnvironmentSizeMedium"] = "ENVIRONMENT_SIZE_MEDIUM";
    EnvironmentConfigEnvironmentSizeEnum["EnvironmentSizeLarge"] = "ENVIRONMENT_SIZE_LARGE";
})(EnvironmentConfigEnvironmentSizeEnum || (EnvironmentConfigEnvironmentSizeEnum = {}));
// EnvironmentConfig
/**
 * Configuration information for an environment.
**/
var EnvironmentConfig = /** @class */ (function (_super) {
    __extends(EnvironmentConfig, _super);
    function EnvironmentConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=airflowUri" }),
        __metadata("design:type", String)
    ], EnvironmentConfig.prototype, "airflowUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dagGcsPrefix" }),
        __metadata("design:type", String)
    ], EnvironmentConfig.prototype, "dagGcsPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseConfig" }),
        __metadata("design:type", DatabaseConfig)
    ], EnvironmentConfig.prototype, "databaseConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], EnvironmentConfig.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentSize" }),
        __metadata("design:type", String)
    ], EnvironmentConfig.prototype, "environmentSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeCluster" }),
        __metadata("design:type", String)
    ], EnvironmentConfig.prototype, "gkeCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", MaintenanceWindow)
    ], EnvironmentConfig.prototype, "maintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterAuthorizedNetworksConfig" }),
        __metadata("design:type", MasterAuthorizedNetworksConfig)
    ], EnvironmentConfig.prototype, "masterAuthorizedNetworksConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", NodeConfig)
    ], EnvironmentConfig.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCount" }),
        __metadata("design:type", Number)
    ], EnvironmentConfig.prototype, "nodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateEnvironmentConfig" }),
        __metadata("design:type", PrivateEnvironmentConfig)
    ], EnvironmentConfig.prototype, "privateEnvironmentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareConfig" }),
        __metadata("design:type", SoftwareConfig)
    ], EnvironmentConfig.prototype, "softwareConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webServerConfig" }),
        __metadata("design:type", WebServerConfig)
    ], EnvironmentConfig.prototype, "webServerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webServerNetworkAccessControl" }),
        __metadata("design:type", WebServerNetworkAccessControl)
    ], EnvironmentConfig.prototype, "webServerNetworkAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workloadsConfig" }),
        __metadata("design:type", WorkloadsConfig)
    ], EnvironmentConfig.prototype, "workloadsConfig", void 0);
    return EnvironmentConfig;
}(SpeakeasyBase));
export { EnvironmentConfig };
// EnvironmentConfigInput
/**
 * Configuration information for an environment.
**/
var EnvironmentConfigInput = /** @class */ (function (_super) {
    __extends(EnvironmentConfigInput, _super);
    function EnvironmentConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=airflowUri" }),
        __metadata("design:type", String)
    ], EnvironmentConfigInput.prototype, "airflowUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dagGcsPrefix" }),
        __metadata("design:type", String)
    ], EnvironmentConfigInput.prototype, "dagGcsPrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseConfig" }),
        __metadata("design:type", DatabaseConfig)
    ], EnvironmentConfigInput.prototype, "databaseConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], EnvironmentConfigInput.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentSize" }),
        __metadata("design:type", String)
    ], EnvironmentConfigInput.prototype, "environmentSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeCluster" }),
        __metadata("design:type", String)
    ], EnvironmentConfigInput.prototype, "gkeCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", MaintenanceWindow)
    ], EnvironmentConfigInput.prototype, "maintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterAuthorizedNetworksConfig" }),
        __metadata("design:type", MasterAuthorizedNetworksConfig)
    ], EnvironmentConfigInput.prototype, "masterAuthorizedNetworksConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", NodeConfig)
    ], EnvironmentConfigInput.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeCount" }),
        __metadata("design:type", Number)
    ], EnvironmentConfigInput.prototype, "nodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateEnvironmentConfig" }),
        __metadata("design:type", PrivateEnvironmentConfigInput)
    ], EnvironmentConfigInput.prototype, "privateEnvironmentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareConfig" }),
        __metadata("design:type", SoftwareConfig)
    ], EnvironmentConfigInput.prototype, "softwareConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webServerConfig" }),
        __metadata("design:type", WebServerConfig)
    ], EnvironmentConfigInput.prototype, "webServerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webServerNetworkAccessControl" }),
        __metadata("design:type", WebServerNetworkAccessControl)
    ], EnvironmentConfigInput.prototype, "webServerNetworkAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workloadsConfig" }),
        __metadata("design:type", WorkloadsConfig)
    ], EnvironmentConfigInput.prototype, "workloadsConfig", void 0);
    return EnvironmentConfigInput;
}(SpeakeasyBase));
export { EnvironmentConfigInput };
