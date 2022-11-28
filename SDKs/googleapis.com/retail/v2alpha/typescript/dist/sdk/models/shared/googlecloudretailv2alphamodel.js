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
import { GoogleCloudRetailV2alphaModelPageOptimizationConfig } from "./googlecloudretailv2alphamodelpageoptimizationconfig";
import { GoogleCloudRetailV2alphaModelServingConfigList } from "./googlecloudretailv2alphamodelservingconfiglist";
export var GoogleCloudRetailV2alphaModelDataStateEnum;
(function (GoogleCloudRetailV2alphaModelDataStateEnum) {
    GoogleCloudRetailV2alphaModelDataStateEnum["DataStateUnspecified"] = "DATA_STATE_UNSPECIFIED";
    GoogleCloudRetailV2alphaModelDataStateEnum["DataOk"] = "DATA_OK";
    GoogleCloudRetailV2alphaModelDataStateEnum["DataError"] = "DATA_ERROR";
})(GoogleCloudRetailV2alphaModelDataStateEnum || (GoogleCloudRetailV2alphaModelDataStateEnum = {}));
export var GoogleCloudRetailV2alphaModelFilteringOptionEnum;
(function (GoogleCloudRetailV2alphaModelFilteringOptionEnum) {
    GoogleCloudRetailV2alphaModelFilteringOptionEnum["RecommendationsFilteringOptionUnspecified"] = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2alphaModelFilteringOptionEnum["RecommendationsFilteringDisabled"] = "RECOMMENDATIONS_FILTERING_DISABLED";
    GoogleCloudRetailV2alphaModelFilteringOptionEnum["RecommendationsFilteringEnabled"] = "RECOMMENDATIONS_FILTERING_ENABLED";
})(GoogleCloudRetailV2alphaModelFilteringOptionEnum || (GoogleCloudRetailV2alphaModelFilteringOptionEnum = {}));
export var GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum;
(function (GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum) {
    GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum["PeriodicTuningStateUnspecified"] = "PERIODIC_TUNING_STATE_UNSPECIFIED";
    GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum["PeriodicTuningDisabled"] = "PERIODIC_TUNING_DISABLED";
    GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum["AllTuningDisabled"] = "ALL_TUNING_DISABLED";
    GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum["PeriodicTuningEnabled"] = "PERIODIC_TUNING_ENABLED";
})(GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum || (GoogleCloudRetailV2alphaModelPeriodicTuningStateEnum = {}));
export var GoogleCloudRetailV2alphaModelServingStateEnum;
(function (GoogleCloudRetailV2alphaModelServingStateEnum) {
    GoogleCloudRetailV2alphaModelServingStateEnum["ServingStateUnspecified"] = "SERVING_STATE_UNSPECIFIED";
    GoogleCloudRetailV2alphaModelServingStateEnum["Inactive"] = "INACTIVE";
    GoogleCloudRetailV2alphaModelServingStateEnum["Active"] = "ACTIVE";
    GoogleCloudRetailV2alphaModelServingStateEnum["Tuned"] = "TUNED";
})(GoogleCloudRetailV2alphaModelServingStateEnum || (GoogleCloudRetailV2alphaModelServingStateEnum = {}));
export var GoogleCloudRetailV2alphaModelTrainingStateEnum;
(function (GoogleCloudRetailV2alphaModelTrainingStateEnum) {
    GoogleCloudRetailV2alphaModelTrainingStateEnum["TrainingStateUnspecified"] = "TRAINING_STATE_UNSPECIFIED";
    GoogleCloudRetailV2alphaModelTrainingStateEnum["Paused"] = "PAUSED";
    GoogleCloudRetailV2alphaModelTrainingStateEnum["Training"] = "TRAINING";
})(GoogleCloudRetailV2alphaModelTrainingStateEnum || (GoogleCloudRetailV2alphaModelTrainingStateEnum = {}));
// GoogleCloudRetailV2alphaModel
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
var GoogleCloudRetailV2alphaModel = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaModel, _super);
    function GoogleCloudRetailV2alphaModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "dataState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "filteringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastTuneTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "lastTuneTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationObjective" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "optimizationObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageOptimizationConfig" }),
        __metadata("design:type", GoogleCloudRetailV2alphaModelPageOptimizationConfig)
    ], GoogleCloudRetailV2alphaModel.prototype, "pageOptimizationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodicTuningState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "periodicTuningState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingConfigLists", elemType: GoogleCloudRetailV2alphaModelServingConfigList }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaModel.prototype, "servingConfigLists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "servingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "trainingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tuningOperation" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "tuningOperation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModel.prototype, "updateTime", void 0);
    return GoogleCloudRetailV2alphaModel;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaModel };
// GoogleCloudRetailV2alphaModelInput
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
var GoogleCloudRetailV2alphaModelInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaModelInput, _super);
    function GoogleCloudRetailV2alphaModelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelInput.prototype, "filteringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationObjective" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelInput.prototype, "optimizationObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageOptimizationConfig" }),
        __metadata("design:type", GoogleCloudRetailV2alphaModelPageOptimizationConfig)
    ], GoogleCloudRetailV2alphaModelInput.prototype, "pageOptimizationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodicTuningState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelInput.prototype, "periodicTuningState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelInput.prototype, "trainingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaModelInput.prototype, "type", void 0);
    return GoogleCloudRetailV2alphaModelInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaModelInput };
