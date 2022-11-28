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
import { GoogleCloudIntegrationsV1alphaIntegrationParameter } from "./googlecloudintegrationsv1alphaintegrationparameter";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameters } from "./enterprisecrmfrontendseventbusprotoworkflowparameters";
import { GoogleCloudIntegrationsV1alphaTaskConfig } from "./googlecloudintegrationsv1alphataskconfig";
import { EnterpriseCrmFrontendsEventbusProtoTaskConfig } from "./enterprisecrmfrontendseventbusprototaskconfig";
import { EnterpriseCrmEventbusProtoTeardown } from "./enterprisecrmeventbusprototeardown";
import { GoogleCloudIntegrationsV1alphaTriggerConfig } from "./googlecloudintegrationsv1alphatriggerconfig";
import { EnterpriseCrmFrontendsEventbusProtoTriggerConfig } from "./enterprisecrmfrontendseventbusprototriggerconfig";
export var GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum["DatabasePersistencePolicyUnspecified"] = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum["DatabasePersistenceDisabled"] = "DATABASE_PERSISTENCE_DISABLED";
})(GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum || (GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum = {}));
export var GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum["Unspecified"] = "UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum["Ui"] = "UI";
    GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum["PiperV2"] = "PIPER_V2";
    GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum["PiperV3"] = "PIPER_V3";
    GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum["ApplicationIpProvisioning"] = "APPLICATION_IP_PROVISIONING";
})(GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum || (GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum = {}));
export var GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum["IntegrationStateUnspecified"] = "INTEGRATION_STATE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum["Draft"] = "DRAFT";
    GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum["Active"] = "ACTIVE";
    GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum["Archived"] = "ARCHIVED";
    GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum["Snapshot"] = "SNAPSHOT";
})(GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum || (GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum = {}));
export var GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum["Unknown"] = "UNKNOWN";
    GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum["Draft"] = "DRAFT";
    GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum["Active"] = "ACTIVE";
    GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum["Archived"] = "ARCHIVED";
    GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum["Snapshot"] = "SNAPSHOT";
})(GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum || (GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum = {}));
// GoogleCloudIntegrationsV1alphaIntegrationVersion
/**
 * The integration version definition.
**/
var GoogleCloudIntegrationsV1alphaIntegrationVersion = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaIntegrationVersion, _super);
    function GoogleCloudIntegrationsV1alphaIntegrationVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databasePersistencePolicy" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "databasePersistencePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationParameters", elemType: GoogleCloudIntegrationsV1alphaIntegrationParameter }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "integrationParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=integrationParametersInternal" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoWorkflowParameters)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "integrationParametersInternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifierEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "lastModifierEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockHolder" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "lockHolder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentTemplateId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "parentTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "snapshotNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskConfigs", elemType: GoogleCloudIntegrationsV1alphaTaskConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "taskConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskConfigsInternal", elemType: EnterpriseCrmFrontendsEventbusProtoTaskConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "taskConfigsInternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teardown" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoTeardown)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "teardown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerConfigs", elemType: GoogleCloudIntegrationsV1alphaTriggerConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "triggerConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerConfigsInternal", elemType: EnterpriseCrmFrontendsEventbusProtoTriggerConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "triggerConfigsInternal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabel" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationVersion.prototype, "userLabel", void 0);
    return GoogleCloudIntegrationsV1alphaIntegrationVersion;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaIntegrationVersion };
