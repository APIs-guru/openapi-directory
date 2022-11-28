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
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";
export var GoogleCloudRunV2ExecutionLaunchStageEnum;
(function (GoogleCloudRunV2ExecutionLaunchStageEnum) {
    GoogleCloudRunV2ExecutionLaunchStageEnum["LaunchStageUnspecified"] = "LAUNCH_STAGE_UNSPECIFIED";
    GoogleCloudRunV2ExecutionLaunchStageEnum["Unimplemented"] = "UNIMPLEMENTED";
    GoogleCloudRunV2ExecutionLaunchStageEnum["Prelaunch"] = "PRELAUNCH";
    GoogleCloudRunV2ExecutionLaunchStageEnum["EarlyAccess"] = "EARLY_ACCESS";
    GoogleCloudRunV2ExecutionLaunchStageEnum["Alpha"] = "ALPHA";
    GoogleCloudRunV2ExecutionLaunchStageEnum["Beta"] = "BETA";
    GoogleCloudRunV2ExecutionLaunchStageEnum["Ga"] = "GA";
    GoogleCloudRunV2ExecutionLaunchStageEnum["Deprecated"] = "DEPRECATED";
})(GoogleCloudRunV2ExecutionLaunchStageEnum || (GoogleCloudRunV2ExecutionLaunchStageEnum = {}));
// GoogleCloudRunV2Execution
/**
 * Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.
**/
var GoogleCloudRunV2Execution = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2Execution, _super);
    function GoogleCloudRunV2Execution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Execution.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completionTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "completionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Execution.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failedCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Execution.prototype, "failedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generation" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=job" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "job", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Execution.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "launchStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observedGeneration" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "observedGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallelism" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Execution.prototype, "parallelism", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciling" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRunV2Execution.prototype, "reconciling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runningCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Execution.prototype, "runningCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=succeededCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Execution.prototype, "succeededCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Execution.prototype, "taskCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", GoogleCloudRunV2TaskTemplate)
    ], GoogleCloudRunV2Execution.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Execution.prototype, "updateTime", void 0);
    return GoogleCloudRunV2Execution;
}(SpeakeasyBase));
export { GoogleCloudRunV2Execution };
