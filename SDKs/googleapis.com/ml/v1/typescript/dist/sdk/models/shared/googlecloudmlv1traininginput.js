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
import { GoogleCloudMlV1EncryptionConfig } from "./googlecloudmlv1encryptionconfig";
import { GoogleCloudMlV1ReplicaConfig } from "./googlecloudmlv1replicaconfig";
import { GoogleCloudMlV1HyperparameterSpec } from "./googlecloudmlv1hyperparameterspec";
import { GoogleCloudMlV1Scheduling } from "./googlecloudmlv1scheduling";
export var GoogleCloudMlV1TrainingInputScaleTierEnum;
(function (GoogleCloudMlV1TrainingInputScaleTierEnum) {
    GoogleCloudMlV1TrainingInputScaleTierEnum["Basic"] = "BASIC";
    GoogleCloudMlV1TrainingInputScaleTierEnum["Standard1"] = "STANDARD_1";
    GoogleCloudMlV1TrainingInputScaleTierEnum["Premium1"] = "PREMIUM_1";
    GoogleCloudMlV1TrainingInputScaleTierEnum["BasicGpu"] = "BASIC_GPU";
    GoogleCloudMlV1TrainingInputScaleTierEnum["BasicTpu"] = "BASIC_TPU";
    GoogleCloudMlV1TrainingInputScaleTierEnum["Custom"] = "CUSTOM";
})(GoogleCloudMlV1TrainingInputScaleTierEnum || (GoogleCloudMlV1TrainingInputScaleTierEnum = {}));
// GoogleCloudMlV1TrainingInput
/**
 * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
**/
var GoogleCloudMlV1TrainingInput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1TrainingInput, _super);
    function GoogleCloudMlV1TrainingInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=args" }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1TrainingInput.prototype, "args", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableWebAccess" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1TrainingInput.prototype, "enableWebAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", GoogleCloudMlV1EncryptionConfig)
    ], GoogleCloudMlV1TrainingInput.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatorConfig" }),
        __metadata("design:type", GoogleCloudMlV1ReplicaConfig)
    ], GoogleCloudMlV1TrainingInput.prototype, "evaluatorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatorCount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "evaluatorCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluatorType" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "evaluatorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperparameters" }),
        __metadata("design:type", GoogleCloudMlV1HyperparameterSpec)
    ], GoogleCloudMlV1TrainingInput.prototype, "hyperparameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobDir" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "jobDir", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterConfig" }),
        __metadata("design:type", GoogleCloudMlV1ReplicaConfig)
    ], GoogleCloudMlV1TrainingInput.prototype, "masterConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=masterType" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "masterType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageUris" }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1TrainingInput.prototype, "packageUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterServerConfig" }),
        __metadata("design:type", GoogleCloudMlV1ReplicaConfig)
    ], GoogleCloudMlV1TrainingInput.prototype, "parameterServerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterServerCount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "parameterServerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterServerType" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "parameterServerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pythonModule" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "pythonModule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pythonVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "pythonVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "runtimeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scaleTier" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "scaleTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduling" }),
        __metadata("design:type", GoogleCloudMlV1Scheduling)
    ], GoogleCloudMlV1TrainingInput.prototype, "scheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useChiefInTfConfig" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1TrainingInput.prototype, "useChiefInTfConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerConfig" }),
        __metadata("design:type", GoogleCloudMlV1ReplicaConfig)
    ], GoogleCloudMlV1TrainingInput.prototype, "workerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerCount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "workerCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerType" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1TrainingInput.prototype, "workerType", void 0);
    return GoogleCloudMlV1TrainingInput;
}(SpeakeasyBase));
export { GoogleCloudMlV1TrainingInput };
