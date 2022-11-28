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
import { GoogleCloudDatalabelingV1beta1Attempt } from "./googleclouddatalabelingv1beta1attempt";
import { GoogleCloudDatalabelingV1beta1EvaluationJobConfig } from "./googleclouddatalabelingv1beta1evaluationjobconfig";
export var GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
(function (GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum) {
    GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum["Scheduled"] = "SCHEDULED";
    GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum["Running"] = "RUNNING";
    GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum["Paused"] = "PAUSED";
    GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum["Stopped"] = "STOPPED";
})(GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum || (GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum = {}));
// GoogleCloudDatalabelingV1beta1EvaluationJob
/**
 * Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
**/
var GoogleCloudDatalabelingV1beta1EvaluationJob = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1EvaluationJob, _super);
    function GoogleCloudDatalabelingV1beta1EvaluationJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSpecSet" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "annotationSpecSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attempts", elemType: GoogleCloudDatalabelingV1beta1Attempt }),
        __metadata("design:type", Array)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "attempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationJobConfig" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1EvaluationJobConfig)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "evaluationJobConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelMissingGroundTruth" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "labelMissingGroundTruth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "modelVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1EvaluationJob.prototype, "state", void 0);
    return GoogleCloudDatalabelingV1beta1EvaluationJob;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1EvaluationJob };
