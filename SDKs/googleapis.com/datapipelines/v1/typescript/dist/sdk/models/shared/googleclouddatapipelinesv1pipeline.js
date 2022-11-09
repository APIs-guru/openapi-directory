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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1ScheduleSpec } from "./googleclouddatapipelinesv1schedulespec";
import { GoogleCloudDatapipelinesV1Workload } from "./googleclouddatapipelinesv1workload";
export var GoogleCloudDatapipelinesV1PipelineStateEnum;
(function (GoogleCloudDatapipelinesV1PipelineStateEnum) {
    GoogleCloudDatapipelinesV1PipelineStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDatapipelinesV1PipelineStateEnum["StateResuming"] = "STATE_RESUMING";
    GoogleCloudDatapipelinesV1PipelineStateEnum["StateActive"] = "STATE_ACTIVE";
    GoogleCloudDatapipelinesV1PipelineStateEnum["StateStopping"] = "STATE_STOPPING";
    GoogleCloudDatapipelinesV1PipelineStateEnum["StateArchived"] = "STATE_ARCHIVED";
    GoogleCloudDatapipelinesV1PipelineStateEnum["StatePaused"] = "STATE_PAUSED";
})(GoogleCloudDatapipelinesV1PipelineStateEnum || (GoogleCloudDatapipelinesV1PipelineStateEnum = {}));
export var GoogleCloudDatapipelinesV1PipelineTypeEnum;
(function (GoogleCloudDatapipelinesV1PipelineTypeEnum) {
    GoogleCloudDatapipelinesV1PipelineTypeEnum["PipelineTypeUnspecified"] = "PIPELINE_TYPE_UNSPECIFIED";
    GoogleCloudDatapipelinesV1PipelineTypeEnum["PipelineTypeBatch"] = "PIPELINE_TYPE_BATCH";
    GoogleCloudDatapipelinesV1PipelineTypeEnum["PipelineTypeStreaming"] = "PIPELINE_TYPE_STREAMING";
})(GoogleCloudDatapipelinesV1PipelineTypeEnum || (GoogleCloudDatapipelinesV1PipelineTypeEnum = {}));
// GoogleCloudDatapipelinesV1Pipeline
/**
 * The main pipeline entity and all the necessary metadata for launching and managing linked jobs.
**/
var GoogleCloudDatapipelinesV1Pipeline = /** @class */ (function (_super) {
    __extends(GoogleCloudDatapipelinesV1Pipeline, _super);
    function GoogleCloudDatapipelinesV1Pipeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=jobCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "jobCount", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "lastUpdateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=pipelineSources" }),
        __metadata("design:type", Map)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "pipelineSources", void 0);
    __decorate([
        Metadata({ data: "json, name=scheduleInfo" }),
        __metadata("design:type", GoogleCloudDatapipelinesV1ScheduleSpec)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "scheduleInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=schedulerServiceAccountEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "schedulerServiceAccountEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=workload" }),
        __metadata("design:type", GoogleCloudDatapipelinesV1Workload)
    ], GoogleCloudDatapipelinesV1Pipeline.prototype, "workload", void 0);
    return GoogleCloudDatapipelinesV1Pipeline;
}(SpeakeasyBase));
export { GoogleCloudDatapipelinesV1Pipeline };
