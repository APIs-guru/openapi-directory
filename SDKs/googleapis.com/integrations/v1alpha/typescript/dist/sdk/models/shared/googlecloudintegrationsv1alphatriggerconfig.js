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
import { GoogleCloudIntegrationsV1alphaIntegrationAlertConfig } from "./googlecloudintegrationsv1alphaintegrationalertconfig";
import { GoogleCloudIntegrationsV1alphaCloudSchedulerConfig } from "./googlecloudintegrationsv1alphacloudschedulerconfig";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
export var GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum;
(function (GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum) {
    GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum["NextTasksExecutionPolicyUnspecified"] = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum["RunAllMatch"] = "RUN_ALL_MATCH";
    GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum["RunFirstMatch"] = "RUN_FIRST_MATCH";
})(GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum || (GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum = {}));
export var GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum;
(function (GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum) {
    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum["TriggerTypeUnspecified"] = "TRIGGER_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum["Cron"] = "CRON";
    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum["Api"] = "API";
    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum["SfdcChannel"] = "SFDC_CHANNEL";
    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum["CloudPubsubExternal"] = "CLOUD_PUBSUB_EXTERNAL";
    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum["SfdcCdcChannel"] = "SFDC_CDC_CHANNEL";
    GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum["CloudScheduler"] = "CLOUD_SCHEDULER";
})(GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum || (GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum = {}));
// GoogleCloudIntegrationsV1alphaTriggerConfig
/**
 * Configuration detail of a trigger.
**/
var GoogleCloudIntegrationsV1alphaTriggerConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaTriggerConfig, _super);
    function GoogleCloudIntegrationsV1alphaTriggerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertConfig", elemType: GoogleCloudIntegrationsV1alphaIntegrationAlertConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "alertConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudSchedulerConfig" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaCloudSchedulerConfig)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "cloudSchedulerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextTasksExecutionPolicy" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "nextTasksExecutionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTasks", elemType: GoogleCloudIntegrationsV1alphaNextTask }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "startTasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "triggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "triggerNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTriggerConfig.prototype, "triggerType", void 0);
    return GoogleCloudIntegrationsV1alphaTriggerConfig;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaTriggerConfig };
