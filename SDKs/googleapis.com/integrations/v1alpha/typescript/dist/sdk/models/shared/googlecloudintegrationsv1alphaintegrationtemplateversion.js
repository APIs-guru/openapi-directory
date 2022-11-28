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
import { EnterpriseCrmFrontendsEventbusProtoTaskConfig } from "./enterprisecrmfrontendseventbusprototaskconfig";
import { EnterpriseCrmEventbusProtoTeardown } from "./enterprisecrmeventbusprototeardown";
import { EnterpriseCrmFrontendsEventbusProtoWorkflowParameters } from "./enterprisecrmfrontendseventbusprotoworkflowparameters";
import { EnterpriseCrmFrontendsEventbusProtoTriggerConfig } from "./enterprisecrmfrontendseventbusprototriggerconfig";
export var GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum["DatabasePersistencePolicyUnspecified"] = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum["DatabasePersistenceDisabled"] = "DATABASE_PERSISTENCE_DISABLED";
})(GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum || (GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum = {}));
export var GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum;
(function (GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum) {
    GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum["Unknown"] = "UNKNOWN";
    GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum["Draft"] = "DRAFT";
    GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum["Active"] = "ACTIVE";
    GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum["Archived"] = "ARCHIVED";
    GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum["Snapshot"] = "SNAPSHOT";
})(GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum || (GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum = {}));
// GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion
/**
 * IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
**/
var GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion, _super);
    function GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databasePersistencePolicy" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "databasePersistencePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifierEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "lastModifierEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentIntegrationVersionId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "parentIntegrationVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "snapshotNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskConfigs", elemType: EnterpriseCrmFrontendsEventbusProtoTaskConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "taskConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teardown" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoTeardown)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "teardown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateParameters" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoWorkflowParameters)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "templateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerConfigs", elemType: EnterpriseCrmFrontendsEventbusProtoTriggerConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "triggerConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabel" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion.prototype, "userLabel", void 0);
    return GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion };
// GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput
/**
 * IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects.
**/
var GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput, _super);
    function GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databasePersistencePolicy" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "databasePersistencePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifierEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "lastModifierEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentIntegrationVersionId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "parentIntegrationVersionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskConfigs", elemType: EnterpriseCrmFrontendsEventbusProtoTaskConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "taskConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teardown" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoTeardown)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "teardown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateParameters" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoWorkflowParameters)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "templateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerConfigs", elemType: EnterpriseCrmFrontendsEventbusProtoTriggerConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "triggerConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabel" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput.prototype, "userLabel", void 0);
    return GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput };
