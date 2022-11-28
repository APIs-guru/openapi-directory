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
import { DebugOptions } from "./debugoptions";
import { WorkerPool } from "./workerpool";
export var EnvironmentFlexResourceSchedulingGoalEnum;
(function (EnvironmentFlexResourceSchedulingGoalEnum) {
    EnvironmentFlexResourceSchedulingGoalEnum["FlexrsUnspecified"] = "FLEXRS_UNSPECIFIED";
    EnvironmentFlexResourceSchedulingGoalEnum["FlexrsSpeedOptimized"] = "FLEXRS_SPEED_OPTIMIZED";
    EnvironmentFlexResourceSchedulingGoalEnum["FlexrsCostOptimized"] = "FLEXRS_COST_OPTIMIZED";
})(EnvironmentFlexResourceSchedulingGoalEnum || (EnvironmentFlexResourceSchedulingGoalEnum = {}));
export var EnvironmentShuffleModeEnum;
(function (EnvironmentShuffleModeEnum) {
    EnvironmentShuffleModeEnum["ShuffleModeUnspecified"] = "SHUFFLE_MODE_UNSPECIFIED";
    EnvironmentShuffleModeEnum["VmBased"] = "VM_BASED";
    EnvironmentShuffleModeEnum["ServiceBased"] = "SERVICE_BASED";
})(EnvironmentShuffleModeEnum || (EnvironmentShuffleModeEnum = {}));
// Environment
/**
 * Describes the environment in which a Dataflow Job runs.
**/
var Environment = /** @class */ (function (_super) {
    __extends(Environment, _super);
    function Environment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterManagerApiService" }),
        __metadata("design:type", String)
    ], Environment.prototype, "clusterManagerApiService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataset" }),
        __metadata("design:type", String)
    ], Environment.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugOptions" }),
        __metadata("design:type", DebugOptions)
    ], Environment.prototype, "debugOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experiments" }),
        __metadata("design:type", Array)
    ], Environment.prototype, "experiments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flexResourceSchedulingGoal" }),
        __metadata("design:type", String)
    ], Environment.prototype, "flexResourceSchedulingGoal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalExperiments" }),
        __metadata("design:type", Map)
    ], Environment.prototype, "internalExperiments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sdkPipelineOptions" }),
        __metadata("design:type", Map)
    ], Environment.prototype, "sdkPipelineOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], Environment.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceKmsKeyName" }),
        __metadata("design:type", String)
    ], Environment.prototype, "serviceKmsKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceOptions" }),
        __metadata("design:type", Array)
    ], Environment.prototype, "serviceOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shuffleMode" }),
        __metadata("design:type", String)
    ], Environment.prototype, "shuffleMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempStoragePrefix" }),
        __metadata("design:type", String)
    ], Environment.prototype, "tempStoragePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgent" }),
        __metadata("design:type", Map)
    ], Environment.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Map)
    ], Environment.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerPools", elemType: WorkerPool }),
        __metadata("design:type", Array)
    ], Environment.prototype, "workerPools", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerRegion" }),
        __metadata("design:type", String)
    ], Environment.prototype, "workerRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerZone" }),
        __metadata("design:type", String)
    ], Environment.prototype, "workerZone", void 0);
    return Environment;
}(SpeakeasyBase));
export { Environment };
// EnvironmentInput
/**
 * Describes the environment in which a Dataflow Job runs.
**/
var EnvironmentInput = /** @class */ (function (_super) {
    __extends(EnvironmentInput, _super);
    function EnvironmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterManagerApiService" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "clusterManagerApiService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataset" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "dataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=debugOptions" }),
        __metadata("design:type", DebugOptions)
    ], EnvironmentInput.prototype, "debugOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experiments" }),
        __metadata("design:type", Array)
    ], EnvironmentInput.prototype, "experiments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flexResourceSchedulingGoal" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "flexResourceSchedulingGoal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internalExperiments" }),
        __metadata("design:type", Map)
    ], EnvironmentInput.prototype, "internalExperiments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sdkPipelineOptions" }),
        __metadata("design:type", Map)
    ], EnvironmentInput.prototype, "sdkPipelineOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "serviceAccountEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceKmsKeyName" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "serviceKmsKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceOptions" }),
        __metadata("design:type", Array)
    ], EnvironmentInput.prototype, "serviceOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempStoragePrefix" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "tempStoragePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgent" }),
        __metadata("design:type", Map)
    ], EnvironmentInput.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Map)
    ], EnvironmentInput.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerPools", elemType: WorkerPool }),
        __metadata("design:type", Array)
    ], EnvironmentInput.prototype, "workerPools", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerRegion" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "workerRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerZone" }),
        __metadata("design:type", String)
    ], EnvironmentInput.prototype, "workerZone", void 0);
    return EnvironmentInput;
}(SpeakeasyBase));
export { EnvironmentInput };
