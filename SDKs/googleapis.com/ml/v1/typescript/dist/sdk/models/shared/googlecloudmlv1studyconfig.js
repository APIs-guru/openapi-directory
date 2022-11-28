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
import { GoogleCloudMlV1AutomatedStoppingConfig } from "./googlecloudmlv1automatedstoppingconfig";
import { GoogleCloudMlV1StudyConfigMetricSpec } from "./googlecloudmlv1studyconfigmetricspec";
import { GoogleCloudMlV1StudyConfigParameterSpec } from "./googlecloudmlv1studyconfigparameterspec";
export var GoogleCloudMlV1StudyConfigAlgorithmEnum;
(function (GoogleCloudMlV1StudyConfigAlgorithmEnum) {
    GoogleCloudMlV1StudyConfigAlgorithmEnum["AlgorithmUnspecified"] = "ALGORITHM_UNSPECIFIED";
    GoogleCloudMlV1StudyConfigAlgorithmEnum["GaussianProcessBandit"] = "GAUSSIAN_PROCESS_BANDIT";
    GoogleCloudMlV1StudyConfigAlgorithmEnum["GridSearch"] = "GRID_SEARCH";
    GoogleCloudMlV1StudyConfigAlgorithmEnum["RandomSearch"] = "RANDOM_SEARCH";
})(GoogleCloudMlV1StudyConfigAlgorithmEnum || (GoogleCloudMlV1StudyConfigAlgorithmEnum = {}));
// GoogleCloudMlV1StudyConfig
/**
 * Represents configuration of a study.
**/
var GoogleCloudMlV1StudyConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1StudyConfig, _super);
    function GoogleCloudMlV1StudyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1StudyConfig.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatedStoppingConfig" }),
        __metadata("design:type", GoogleCloudMlV1AutomatedStoppingConfig)
    ], GoogleCloudMlV1StudyConfig.prototype, "automatedStoppingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudMlV1StudyConfigMetricSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1StudyConfig.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudMlV1StudyConfigParameterSpec }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1StudyConfig.prototype, "parameters", void 0);
    return GoogleCloudMlV1StudyConfig;
}(SpeakeasyBase));
export { GoogleCloudMlV1StudyConfig };
