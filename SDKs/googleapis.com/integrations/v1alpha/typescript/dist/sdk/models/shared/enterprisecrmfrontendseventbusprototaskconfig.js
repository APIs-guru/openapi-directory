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
import { EnterpriseCrmEventbusProtoTaskAlertConfig } from "./enterprisecrmeventbusprototaskalertconfig";
import { EnterpriseCrmEventbusProtoFailurePolicy } from "./enterprisecrmeventbusprotofailurepolicy";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmFrontendsEventbusProtoRollbackStrategy } from "./enterprisecrmfrontendseventbusprotorollbackstrategy";
import { EnterpriseCrmEventbusProtoSuccessPolicy } from "./enterprisecrmeventbusprotosuccesspolicy";
import { EnterpriseCrmFrontendsEventbusProtoTaskEntity } from "./enterprisecrmfrontendseventbusprototaskentity";
export var EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum;
(function (EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum) {
    EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum["UnspecifiedJsonValidationOption"] = "UNSPECIFIED_JSON_VALIDATION_OPTION";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum["Skip"] = "SKIP";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum["PreExecution"] = "PRE_EXECUTION";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum["PostExecution"] = "POST_EXECUTION";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum["PrePostExecution"] = "PRE_POST_EXECUTION";
})(EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum || (EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum = {}));
export var EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;
(function (EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum) {
    EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum["Unspecified"] = "UNSPECIFIED";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum["RunAllMatch"] = "RUN_ALL_MATCH";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum["RunFirstMatch"] = "RUN_FIRST_MATCH";
})(EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum || (EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum = {}));
export var EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum;
(function (EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum) {
    EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum["WhenAllSucceed"] = "WHEN_ALL_SUCCEED";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum["WhenAnySucceed"] = "WHEN_ANY_SUCCEED";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum["WhenAllTasksAndConditionsSucceed"] = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED";
})(EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum || (EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum = {}));
export var EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum;
(function (EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum) {
    EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum["Task"] = "TASK";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum["AsisTemplate"] = "ASIS_TEMPLATE";
    EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum["IoTemplate"] = "IO_TEMPLATE";
})(EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum || (EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum = {}));
// EnterpriseCrmFrontendsEventbusProtoTaskConfig
/**
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. Next available id: 27
**/
var EnterpriseCrmFrontendsEventbusProtoTaskConfig = /** @class */ (function (_super) {
    __extends(EnterpriseCrmFrontendsEventbusProtoTaskConfig, _super);
    function EnterpriseCrmFrontendsEventbusProtoTaskConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertConfigs", elemType: EnterpriseCrmEventbusProtoTaskAlertConfig }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "alertConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creatorEmail" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "creatorEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableStrictTypeValidation" }),
        __metadata("design:type", Boolean)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "disableStrictTypeValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failurePolicy" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoFailurePolicy)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "failurePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=incomingEdgeCount" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "incomingEdgeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonValidationOption" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "jsonValidationOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextTasks", elemType: EnterpriseCrmEventbusProtoNextTask }),
        __metadata("design:type", Array)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "nextTasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextTasksExecutionPolicy" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "nextTasksExecutionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry }),
        __metadata("design:type", Map)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoCoordinate)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=precondition" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "precondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preconditionLabel" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "preconditionLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollbackStrategy" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoRollbackStrategy)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "rollbackStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successPolicy" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoSuccessPolicy)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "successPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synchronousCallFailurePolicy" }),
        __metadata("design:type", EnterpriseCrmEventbusProtoFailurePolicy)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "synchronousCallFailurePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskEntity" }),
        __metadata("design:type", EnterpriseCrmFrontendsEventbusProtoTaskEntity)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "taskEntity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskExecutionStrategy" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "taskExecutionStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "taskName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskNumber" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "taskNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskSpec" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "taskSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskTemplateName" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "taskTemplateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskType" }),
        __metadata("design:type", String)
    ], EnterpriseCrmFrontendsEventbusProtoTaskConfig.prototype, "taskType", void 0);
    return EnterpriseCrmFrontendsEventbusProtoTaskConfig;
}(SpeakeasyBase));
export { EnterpriseCrmFrontendsEventbusProtoTaskConfig };
