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
import { GoogleCloudMlV1BuiltInAlgorithmOutput } from "./googlecloudmlv1builtinalgorithmoutput";
import { GoogleCloudMlV1HyperparameterOutput } from "./googlecloudmlv1hyperparameteroutput";
// GoogleCloudMlV1TrainingOutputInput
/**
 * Represents results of a training job. Output only.
**/
var GoogleCloudMlV1TrainingOutputInput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1TrainingOutputInput, _super);
    function GoogleCloudMlV1TrainingOutputInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtInAlgorithmOutput" }),
        __metadata("design:type", GoogleCloudMlV1BuiltInAlgorithmOutput)
    ], GoogleCloudMlV1TrainingOutputInput.prototype, "builtInAlgorithmOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completedTrialCount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingOutputInput.prototype, "completedTrialCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumedMLUnits" }),
        __metadata("design:type", Number)
    ], GoogleCloudMlV1TrainingOutputInput.prototype, "consumedMlUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperparameterMetricTag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingOutputInput.prototype, "hyperparameterMetricTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isBuiltInAlgorithmJob" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1TrainingOutputInput.prototype, "isBuiltInAlgorithmJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isHyperparameterTuningJob" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1TrainingOutputInput.prototype, "isHyperparameterTuningJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trials", elemType: GoogleCloudMlV1HyperparameterOutput }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1TrainingOutputInput.prototype, "trials", void 0);
    return GoogleCloudMlV1TrainingOutputInput;
}(SpeakeasyBase));
export { GoogleCloudMlV1TrainingOutputInput };
// GoogleCloudMlV1TrainingOutput
/**
 * Represents results of a training job. Output only.
**/
var GoogleCloudMlV1TrainingOutput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1TrainingOutput, _super);
    function GoogleCloudMlV1TrainingOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtInAlgorithmOutput" }),
        __metadata("design:type", GoogleCloudMlV1BuiltInAlgorithmOutput)
    ], GoogleCloudMlV1TrainingOutput.prototype, "builtInAlgorithmOutput", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completedTrialCount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingOutput.prototype, "completedTrialCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumedMLUnits" }),
        __metadata("design:type", Number)
    ], GoogleCloudMlV1TrainingOutput.prototype, "consumedMlUnits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperparameterMetricTag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingOutput.prototype, "hyperparameterMetricTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isBuiltInAlgorithmJob" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1TrainingOutput.prototype, "isBuiltInAlgorithmJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isHyperparameterTuningJob" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1TrainingOutput.prototype, "isHyperparameterTuningJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trials", elemType: GoogleCloudMlV1HyperparameterOutput }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1TrainingOutput.prototype, "trials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAccessUris" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1TrainingOutput.prototype, "webAccessUris", void 0);
    return GoogleCloudMlV1TrainingOutput;
}(SpeakeasyBase));
export { GoogleCloudMlV1TrainingOutput };
