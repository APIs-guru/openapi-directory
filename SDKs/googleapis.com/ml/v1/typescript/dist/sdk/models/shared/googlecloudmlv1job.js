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
import { GoogleCloudMlV1PredictionInput } from "./googlecloudmlv1predictioninput";
import { GoogleCloudMlV1PredictionOutput } from "./googlecloudmlv1predictionoutput";
import { GoogleCloudMlV1TrainingInput } from "./googlecloudmlv1traininginput";
import { GoogleCloudMlV1TrainingOutputInput } from "./googlecloudmlv1trainingoutput";
import { GoogleCloudMlV1TrainingOutput } from "./googlecloudmlv1trainingoutput";
export var GoogleCloudMlV1JobStateEnum;
(function (GoogleCloudMlV1JobStateEnum) {
    GoogleCloudMlV1JobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudMlV1JobStateEnum["Queued"] = "QUEUED";
    GoogleCloudMlV1JobStateEnum["Preparing"] = "PREPARING";
    GoogleCloudMlV1JobStateEnum["Running"] = "RUNNING";
    GoogleCloudMlV1JobStateEnum["Succeeded"] = "SUCCEEDED";
    GoogleCloudMlV1JobStateEnum["Failed"] = "FAILED";
    GoogleCloudMlV1JobStateEnum["Cancelling"] = "CANCELLING";
    GoogleCloudMlV1JobStateEnum["Cancelled"] = "CANCELLED";
})(GoogleCloudMlV1JobStateEnum || (GoogleCloudMlV1JobStateEnum = {}));
// GoogleCloudMlV1JobInput
/**
 * Represents a training or prediction job.
**/
var GoogleCloudMlV1JobInput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1JobInput, _super);
    function GoogleCloudMlV1JobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1JobInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1JobInput.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1JobInput.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1JobInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1JobInput.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1JobInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictionInput" }),
        __metadata("design:type", GoogleCloudMlV1PredictionInput)
    ], GoogleCloudMlV1JobInput.prototype, "predictionInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictionOutput" }),
        __metadata("design:type", GoogleCloudMlV1PredictionOutput)
    ], GoogleCloudMlV1JobInput.prototype, "predictionOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1JobInput.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1JobInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingInput" }),
        __metadata("design:type", GoogleCloudMlV1TrainingInput)
    ], GoogleCloudMlV1JobInput.prototype, "trainingInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingOutput" }),
        __metadata("design:type", GoogleCloudMlV1TrainingOutputInput)
    ], GoogleCloudMlV1JobInput.prototype, "trainingOutput", void 0);
    return GoogleCloudMlV1JobInput;
}(SpeakeasyBase));
export { GoogleCloudMlV1JobInput };
// GoogleCloudMlV1Job
/**
 * Represents a training or prediction job.
**/
var GoogleCloudMlV1Job = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1Job, _super);
    function GoogleCloudMlV1Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Job.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Job.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Job.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Job.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Job.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobPosition" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Job.prototype, "jobPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1Job.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictionInput" }),
        __metadata("design:type", GoogleCloudMlV1PredictionInput)
    ], GoogleCloudMlV1Job.prototype, "predictionInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictionOutput" }),
        __metadata("design:type", GoogleCloudMlV1PredictionOutput)
    ], GoogleCloudMlV1Job.prototype, "predictionOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Job.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Job.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingInput" }),
        __metadata("design:type", GoogleCloudMlV1TrainingInput)
    ], GoogleCloudMlV1Job.prototype, "trainingInput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingOutput" }),
        __metadata("design:type", GoogleCloudMlV1TrainingOutput)
    ], GoogleCloudMlV1Job.prototype, "trainingOutput", void 0);
    return GoogleCloudMlV1Job;
}(SpeakeasyBase));
export { GoogleCloudMlV1Job };
