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
import { GoogleCloudMlV1ParameterSpec } from "./googlecloudmlv1parameterspec";
export var GoogleCloudMlV1HyperparameterSpecAlgorithmEnum;
(function (GoogleCloudMlV1HyperparameterSpecAlgorithmEnum) {
    GoogleCloudMlV1HyperparameterSpecAlgorithmEnum["AlgorithmUnspecified"] = "ALGORITHM_UNSPECIFIED";
    GoogleCloudMlV1HyperparameterSpecAlgorithmEnum["GridSearch"] = "GRID_SEARCH";
    GoogleCloudMlV1HyperparameterSpecAlgorithmEnum["RandomSearch"] = "RANDOM_SEARCH";
})(GoogleCloudMlV1HyperparameterSpecAlgorithmEnum || (GoogleCloudMlV1HyperparameterSpecAlgorithmEnum = {}));
export var GoogleCloudMlV1HyperparameterSpecGoalEnum;
(function (GoogleCloudMlV1HyperparameterSpecGoalEnum) {
    GoogleCloudMlV1HyperparameterSpecGoalEnum["GoalTypeUnspecified"] = "GOAL_TYPE_UNSPECIFIED";
    GoogleCloudMlV1HyperparameterSpecGoalEnum["Maximize"] = "MAXIMIZE";
    GoogleCloudMlV1HyperparameterSpecGoalEnum["Minimize"] = "MINIMIZE";
})(GoogleCloudMlV1HyperparameterSpecGoalEnum || (GoogleCloudMlV1HyperparameterSpecGoalEnum = {}));
// GoogleCloudMlV1HyperparameterSpec
/**
 * Represents a set of hyperparameters to optimize.
**/
var GoogleCloudMlV1HyperparameterSpec = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1HyperparameterSpec, _super);
    function GoogleCloudMlV1HyperparameterSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableTrialEarlyStopping" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "enableTrialEarlyStopping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=goal" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "goal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperparameterMetricTag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "hyperparameterMetricTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxFailedTrials" }),
        __metadata("design:type", Number)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "maxFailedTrials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxParallelTrials" }),
        __metadata("design:type", Number)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "maxParallelTrials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTrials" }),
        __metadata("design:type", Number)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "maxTrials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params", elemType: GoogleCloudMlV1ParameterSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resumePreviousJobId" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1HyperparameterSpec.prototype, "resumePreviousJobId", void 0);
    return GoogleCloudMlV1HyperparameterSpec;
}(SpeakeasyBase));
export { GoogleCloudMlV1HyperparameterSpec };
