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
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2ExecutionReference } from "./googlecloudrunv2executionreference";
import { GoogleCloudRunV2ExecutionTemplate } from "./googlecloudrunv2executiontemplate";
export var GoogleCloudRunV2JobLaunchStageEnum;
(function (GoogleCloudRunV2JobLaunchStageEnum) {
    GoogleCloudRunV2JobLaunchStageEnum["LaunchStageUnspecified"] = "LAUNCH_STAGE_UNSPECIFIED";
    GoogleCloudRunV2JobLaunchStageEnum["Unimplemented"] = "UNIMPLEMENTED";
    GoogleCloudRunV2JobLaunchStageEnum["Prelaunch"] = "PRELAUNCH";
    GoogleCloudRunV2JobLaunchStageEnum["EarlyAccess"] = "EARLY_ACCESS";
    GoogleCloudRunV2JobLaunchStageEnum["Alpha"] = "ALPHA";
    GoogleCloudRunV2JobLaunchStageEnum["Beta"] = "BETA";
    GoogleCloudRunV2JobLaunchStageEnum["Ga"] = "GA";
    GoogleCloudRunV2JobLaunchStageEnum["Deprecated"] = "DEPRECATED";
})(GoogleCloudRunV2JobLaunchStageEnum || (GoogleCloudRunV2JobLaunchStageEnum = {}));
// GoogleCloudRunV2Job
/**
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
var GoogleCloudRunV2Job = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2Job, _super);
    function GoogleCloudRunV2Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Job.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binaryAuthorization" }),
        __metadata("design:type", GoogleCloudRunV2BinaryAuthorization)
    ], GoogleCloudRunV2Job.prototype, "binaryAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Job.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudRunV2Job.prototype, "executionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=generation" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2Job.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifier" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "lastModifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestCreatedExecution" }),
        __metadata("design:type", GoogleCloudRunV2ExecutionReference)
    ], GoogleCloudRunV2Job.prototype, "latestCreatedExecution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "launchStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observedGeneration" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "observedGeneration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciling" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRunV2Job.prototype, "reconciling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", GoogleCloudRunV2ExecutionTemplate)
    ], GoogleCloudRunV2Job.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terminalCondition" }),
        __metadata("design:type", GoogleCloudRunV2Condition)
    ], GoogleCloudRunV2Job.prototype, "terminalCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Job.prototype, "updateTime", void 0);
    return GoogleCloudRunV2Job;
}(SpeakeasyBase));
export { GoogleCloudRunV2Job };
// GoogleCloudRunV2JobInput
/**
 * Job represents the configuration of a single job. A job an immutable resource that references a container image which is run to completion.
**/
var GoogleCloudRunV2JobInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2JobInput, _super);
    function GoogleCloudRunV2JobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2JobInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=binaryAuthorization" }),
        __metadata("design:type", GoogleCloudRunV2BinaryAuthorization)
    ], GoogleCloudRunV2JobInput.prototype, "binaryAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2JobInput.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2JobInput.prototype, "clientVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRunV2JobInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestCreatedExecution" }),
        __metadata("design:type", GoogleCloudRunV2ExecutionReference)
    ], GoogleCloudRunV2JobInput.prototype, "latestCreatedExecution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchStage" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2JobInput.prototype, "launchStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2JobInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", GoogleCloudRunV2ExecutionTemplate)
    ], GoogleCloudRunV2JobInput.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terminalCondition" }),
        __metadata("design:type", GoogleCloudRunV2Condition)
    ], GoogleCloudRunV2JobInput.prototype, "terminalCondition", void 0);
    return GoogleCloudRunV2JobInput;
}(SpeakeasyBase));
export { GoogleCloudRunV2JobInput };
