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
import { EnterpriseCrmEventbusProtoWorkflowAlertConfig } from "./enterprisecrmeventbusprotoworkflowalertconfig";
import { EnterpriseCrmEventbusProtoCloudSchedulerConfig } from "./enterprisecrmeventbusprotocloudschedulerconfig";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmEventbusProtoTriggerCriteria } from "./enterprisecrmeventbusprototriggercriteria";
export var EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;
(function (EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum) {
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum["Unspecified"] = "UNSPECIFIED";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum["RunAllMatch"] = "RUN_ALL_MATCH";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum["RunFirstMatch"] = "RUN_FIRST_MATCH";
})(EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum || (EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum = {}));
export var EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
(function (EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum) {
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["Unknown"] = "UNKNOWN";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["CloudPubsub"] = "CLOUD_PUBSUB";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["Goops"] = "GOOPS";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["SfdcSync"] = "SFDC_SYNC";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["Cron"] = "CRON";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["Api"] = "API";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["ManifoldTrigger"] = "MANIFOLD_TRIGGER";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["DatalayerDataChange"] = "DATALAYER_DATA_CHANGE";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["SfdcChannel"] = "SFDC_CHANNEL";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["CloudPubsubExternal"] = "CLOUD_PUBSUB_EXTERNAL";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["SfdcCdcChannel"] = "SFDC_CDC_CHANNEL";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["SfdcPlatformEventsChannel"] = "SFDC_PLATFORM_EVENTS_CHANNEL";
    EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum["CloudScheduler"] = "CLOUD_SCHEDULER";
})(EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum || (EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum = {}));
// EnterpriseCrmFrontendsEventbusProtoTriggerConfig
/**
 * Configuration detail of a trigger. Next available id: 17
**/
var EnterpriseCrmFrontendsEventbusProtoTriggerConfig = /** @class */ (function (_super) {
    __extends(EnterpriseCrmFrontendsEventbusProtoTriggerConfig, _super);
    function EnterpriseCrmFrontendsEventbusProtoTriggerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertConfig", elemType: EnterpriseCrmEventbusProtoWorkflowAlertConfig }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "alertConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudSchedulerConfig" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoCloudSchedulerConfig)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "cloudSchedulerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledClients" }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "enabledClients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextTasksExecutionPolicy" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "nextTasksExecutionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pauseWorkflowExecutions" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "pauseWorkflowExecutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoCoordinate)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTasks", elemType: EnterpriseCrmEventbusProtoNextTask }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "startTasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerCriteria" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoTriggerCriteria)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "triggerCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerId" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "triggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerNumber" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "triggerNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTriggerConfig.prototype, "triggerType", void 0);
    return EnterpriseCrmFrontendsEventbusProtoTriggerConfig;
}(SpeakeasyBase));
export { EnterpriseCrmFrontendsEventbusProtoTriggerConfig };
