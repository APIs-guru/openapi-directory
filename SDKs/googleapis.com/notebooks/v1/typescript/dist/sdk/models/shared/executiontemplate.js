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
import { SchedulerAcceleratorConfig } from "./scheduleracceleratorconfig";
import { DataprocParameters } from "./dataprocparameters";
import { VertexAiParameters } from "./vertexaiparameters";
export var ExecutionTemplateJobTypeEnum;
(function (ExecutionTemplateJobTypeEnum) {
    ExecutionTemplateJobTypeEnum["JobTypeUnspecified"] = "JOB_TYPE_UNSPECIFIED";
    ExecutionTemplateJobTypeEnum["VertexAi"] = "VERTEX_AI";
    ExecutionTemplateJobTypeEnum["Dataproc"] = "DATAPROC";
})(ExecutionTemplateJobTypeEnum || (ExecutionTemplateJobTypeEnum = {}));
export var ExecutionTemplateScaleTierEnum;
(function (ExecutionTemplateScaleTierEnum) {
    ExecutionTemplateScaleTierEnum["ScaleTierUnspecified"] = "SCALE_TIER_UNSPECIFIED";
    ExecutionTemplateScaleTierEnum["Basic"] = "BASIC";
    ExecutionTemplateScaleTierEnum["Standard1"] = "STANDARD_1";
    ExecutionTemplateScaleTierEnum["Premium1"] = "PREMIUM_1";
    ExecutionTemplateScaleTierEnum["BasicGpu"] = "BASIC_GPU";
    ExecutionTemplateScaleTierEnum["BasicTpu"] = "BASIC_TPU";
    ExecutionTemplateScaleTierEnum["Custom"] = "CUSTOM";
})(ExecutionTemplateScaleTierEnum || (ExecutionTemplateScaleTierEnum = {}));
// ExecutionTemplate
/**
 * The description a notebook execution workload.
**/
var ExecutionTemplate = /** @class */ (function (_super) {
    __extends(ExecutionTemplate, _super);
    function ExecutionTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=acceleratorConfig" }),
        __metadata("design:type", SchedulerAcceleratorConfig)
    ], ExecutionTemplate.prototype, "acceleratorConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=containerImageUri" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "containerImageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=dataprocParameters" }),
        __metadata("design:type", DataprocParameters)
    ], ExecutionTemplate.prototype, "dataprocParameters", void 0);
    __decorate([
        Metadata({ data: "json, name=inputNotebookFile" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "inputNotebookFile", void 0);
    __decorate([
        Metadata({ data: "json, name=jobType" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "jobType", void 0);
    __decorate([
        Metadata({ data: "json, name=kernelSpec" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "kernelSpec", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ExecutionTemplate.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=masterType" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "masterType", void 0);
    __decorate([
        Metadata({ data: "json, name=outputNotebookFolder" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "outputNotebookFolder", void 0);
    __decorate([
        Metadata({ data: "json, name=parameters" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "json, name=paramsYamlFile" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "paramsYamlFile", void 0);
    __decorate([
        Metadata({ data: "json, name=scaleTier" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "scaleTier", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "serviceAccount", void 0);
    __decorate([
        Metadata({ data: "json, name=tensorboard" }),
        __metadata("design:type", String)
    ], ExecutionTemplate.prototype, "tensorboard", void 0);
    __decorate([
        Metadata({ data: "json, name=vertexAiParameters" }),
        __metadata("design:type", VertexAiParameters)
    ], ExecutionTemplate.prototype, "vertexAiParameters", void 0);
    return ExecutionTemplate;
}(SpeakeasyBase));
export { ExecutionTemplate };
