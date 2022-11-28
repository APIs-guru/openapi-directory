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
import { GoogleCloudIntegrationsV1alphaFailurePolicy } from "./googlecloudintegrationsv1alphafailurepolicy";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
import { GoogleCloudIntegrationsV1alphaEventParameter } from "./googlecloudintegrationsv1alphaeventparameter";
import { GoogleCloudIntegrationsV1alphaSuccessPolicy } from "./googlecloudintegrationsv1alphasuccesspolicy";
export var GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum;
(function (GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum) {
    GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum["JsonValidationOptionUnspecified"] = "JSON_VALIDATION_OPTION_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum["Skip"] = "SKIP";
    GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum["PreExecution"] = "PRE_EXECUTION";
    GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum["PostExecution"] = "POST_EXECUTION";
    GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum["PrePostExecution"] = "PRE_POST_EXECUTION";
})(GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum || (GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum = {}));
export var GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum;
(function (GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum) {
    GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum["NextTasksExecutionPolicyUnspecified"] = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum["RunAllMatch"] = "RUN_ALL_MATCH";
    GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum["RunFirstMatch"] = "RUN_FIRST_MATCH";
})(GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum || (GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum = {}));
export var GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum;
(function (GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum) {
    GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum["TaskExecutionStrategyUnspecified"] = "TASK_EXECUTION_STRATEGY_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum["WhenAllSucceed"] = "WHEN_ALL_SUCCEED";
    GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum["WhenAnySucceed"] = "WHEN_ANY_SUCCEED";
    GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum["WhenAllTasksAndConditionsSucceed"] = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED";
})(GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum || (GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum = {}));
// GoogleCloudIntegrationsV1alphaTaskConfig
/**
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task.
**/
var GoogleCloudIntegrationsV1alphaTaskConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaTaskConfig, _super);
    function GoogleCloudIntegrationsV1alphaTaskConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failurePolicy" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaFailurePolicy)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "failurePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonValidationOption" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "jsonValidationOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextTasks", elemType: GoogleCloudIntegrationsV1alphaNextTask }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "nextTasks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextTasksExecutionPolicy" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "nextTasksExecutionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudIntegrationsV1alphaEventParameter }),
        __metadata("design:type", Map)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successPolicy" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaSuccessPolicy)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "successPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=synchronousCallFailurePolicy" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaFailurePolicy)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "synchronousCallFailurePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "task", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskExecutionStrategy" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "taskExecutionStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskTemplate" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskConfig.prototype, "taskTemplate", void 0);
    return GoogleCloudIntegrationsV1alphaTaskConfig;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaTaskConfig };
