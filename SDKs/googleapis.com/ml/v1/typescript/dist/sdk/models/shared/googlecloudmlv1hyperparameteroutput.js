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
import { GoogleCloudMlV1HyperparameterOutputHyperparameterMetric } from "./googlecloudmlv1hyperparameteroutputhyperparametermetric";
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
export var GoogleCloudMlV1HyperparameterOutputStateEnum;
(function (GoogleCloudMlV1HyperparameterOutputStateEnum) {
    GoogleCloudMlV1HyperparameterOutputStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudMlV1HyperparameterOutputStateEnum["Queued"] = "QUEUED";
    GoogleCloudMlV1HyperparameterOutputStateEnum["Preparing"] = "PREPARING";
    GoogleCloudMlV1HyperparameterOutputStateEnum["Running"] = "RUNNING";
    GoogleCloudMlV1HyperparameterOutputStateEnum["Succeeded"] = "SUCCEEDED";
    GoogleCloudMlV1HyperparameterOutputStateEnum["Failed"] = "FAILED";
    GoogleCloudMlV1HyperparameterOutputStateEnum["Cancelling"] = "CANCELLING";
    GoogleCloudMlV1HyperparameterOutputStateEnum["Cancelled"] = "CANCELLED";
})(GoogleCloudMlV1HyperparameterOutputStateEnum || (GoogleCloudMlV1HyperparameterOutputStateEnum = {}));
// GoogleCloudMlV1HyperparameterOutput
/**
 * Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial.
**/
var GoogleCloudMlV1HyperparameterOutput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1HyperparameterOutput, _super);
    function GoogleCloudMlV1HyperparameterOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allMetrics", elemType: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "allMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtInAlgorithmOutput" }),
        __metadata("design:type", GoogleCloudMlV1BuiltInAlgorithmOutput)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "builtInAlgorithmOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finalMetric" }),
        __metadata("design:type", GoogleCloudMlV1HyperparameterOutputHyperparameterMetric)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "finalMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperparameters" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "hyperparameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isTrialStoppedEarly" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "isTrialStoppedEarly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialId" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "trialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAccessUris" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1HyperparameterOutput.prototype, "webAccessUris", void 0);
    return GoogleCloudMlV1HyperparameterOutput;
}(SpeakeasyBase));
export { GoogleCloudMlV1HyperparameterOutput };
