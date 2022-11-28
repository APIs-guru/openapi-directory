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
export var FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum;
(function (FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum) {
    FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum["AutoscalingAlgorithmUnknown"] = "AUTOSCALING_ALGORITHM_UNKNOWN";
    FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum["AutoscalingAlgorithmNone"] = "AUTOSCALING_ALGORITHM_NONE";
    FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum["AutoscalingAlgorithmBasic"] = "AUTOSCALING_ALGORITHM_BASIC";
})(FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum || (FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum = {}));
export var FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
(function (FlexTemplateRuntimeEnvironmentFlexrsGoalEnum) {
    FlexTemplateRuntimeEnvironmentFlexrsGoalEnum["FlexrsUnspecified"] = "FLEXRS_UNSPECIFIED";
    FlexTemplateRuntimeEnvironmentFlexrsGoalEnum["FlexrsSpeedOptimized"] = "FLEXRS_SPEED_OPTIMIZED";
    FlexTemplateRuntimeEnvironmentFlexrsGoalEnum["FlexrsCostOptimized"] = "FLEXRS_COST_OPTIMIZED";
})(FlexTemplateRuntimeEnvironmentFlexrsGoalEnum || (FlexTemplateRuntimeEnvironmentFlexrsGoalEnum = {}));
export var FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
(function (FlexTemplateRuntimeEnvironmentIpConfigurationEnum) {
    FlexTemplateRuntimeEnvironmentIpConfigurationEnum["WorkerIpUnspecified"] = "WORKER_IP_UNSPECIFIED";
    FlexTemplateRuntimeEnvironmentIpConfigurationEnum["WorkerIpPublic"] = "WORKER_IP_PUBLIC";
    FlexTemplateRuntimeEnvironmentIpConfigurationEnum["WorkerIpPrivate"] = "WORKER_IP_PRIVATE";
})(FlexTemplateRuntimeEnvironmentIpConfigurationEnum || (FlexTemplateRuntimeEnvironmentIpConfigurationEnum = {}));
// FlexTemplateRuntimeEnvironment
/**
 * The environment values to be set at runtime for flex template.
**/
var FlexTemplateRuntimeEnvironment = /** @class */ (function (_super) {
    __extends(FlexTemplateRuntimeEnvironment, _super);
    function FlexTemplateRuntimeEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalExperiments" }),
        __metadata("design:type", Array)
    ], FlexTemplateRuntimeEnvironment.prototype, "additionalExperiments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalUserLabels" }),
        __metadata("design:type", Map)
    ], FlexTemplateRuntimeEnvironment.prototype, "additionalUserLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoscalingAlgorithm" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "autoscalingAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSizeGb" }),
        __metadata("design:type", Number)
    ], FlexTemplateRuntimeEnvironment.prototype, "diskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dumpHeapOnOom" }),
        __metadata("design:type", Boolean)
    ], FlexTemplateRuntimeEnvironment.prototype, "dumpHeapOnOom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableLauncherVmSerialPortLogging" }),
        __metadata("design:type", Boolean)
    ], FlexTemplateRuntimeEnvironment.prototype, "enableLauncherVmSerialPortLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableStreamingEngine" }),
        __metadata("design:type", Boolean)
    ], FlexTemplateRuntimeEnvironment.prototype, "enableStreamingEngine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flexrsGoal" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "flexrsGoal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipConfiguration" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "ipConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "kmsKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launcherMachineType" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "launcherMachineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxWorkers" }),
        __metadata("design:type", Number)
    ], FlexTemplateRuntimeEnvironment.prototype, "maxWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numWorkers" }),
        __metadata("design:type", Number)
    ], FlexTemplateRuntimeEnvironment.prototype, "numWorkers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saveHeapDumpsToGcsPath" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "saveHeapDumpsToGcsPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sdkContainerImage" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "sdkContainerImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stagingLocation" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "stagingLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "subnetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempLocation" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "tempLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerRegion" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "workerRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerZone" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "workerZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], FlexTemplateRuntimeEnvironment.prototype, "zone", void 0);
    return FlexTemplateRuntimeEnvironment;
}(SpeakeasyBase));
export { FlexTemplateRuntimeEnvironment };
