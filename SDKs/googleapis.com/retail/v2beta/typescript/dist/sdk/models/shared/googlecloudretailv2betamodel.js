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
import { GoogleCloudRetailV2betaModelServingConfigList } from "./googlecloudretailv2betamodelservingconfiglist";
export var GoogleCloudRetailV2betaModelDataStateEnum;
(function (GoogleCloudRetailV2betaModelDataStateEnum) {
    GoogleCloudRetailV2betaModelDataStateEnum["DataStateUnspecified"] = "DATA_STATE_UNSPECIFIED";
    GoogleCloudRetailV2betaModelDataStateEnum["DataOk"] = "DATA_OK";
    GoogleCloudRetailV2betaModelDataStateEnum["DataError"] = "DATA_ERROR";
})(GoogleCloudRetailV2betaModelDataStateEnum || (GoogleCloudRetailV2betaModelDataStateEnum = {}));
export var GoogleCloudRetailV2betaModelFilteringOptionEnum;
(function (GoogleCloudRetailV2betaModelFilteringOptionEnum) {
    GoogleCloudRetailV2betaModelFilteringOptionEnum["RecommendationsFilteringOptionUnspecified"] = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED";
    GoogleCloudRetailV2betaModelFilteringOptionEnum["RecommendationsFilteringDisabled"] = "RECOMMENDATIONS_FILTERING_DISABLED";
    GoogleCloudRetailV2betaModelFilteringOptionEnum["RecommendationsFilteringEnabled"] = "RECOMMENDATIONS_FILTERING_ENABLED";
})(GoogleCloudRetailV2betaModelFilteringOptionEnum || (GoogleCloudRetailV2betaModelFilteringOptionEnum = {}));
export var GoogleCloudRetailV2betaModelPeriodicTuningStateEnum;
(function (GoogleCloudRetailV2betaModelPeriodicTuningStateEnum) {
    GoogleCloudRetailV2betaModelPeriodicTuningStateEnum["PeriodicTuningStateUnspecified"] = "PERIODIC_TUNING_STATE_UNSPECIFIED";
    GoogleCloudRetailV2betaModelPeriodicTuningStateEnum["PeriodicTuningDisabled"] = "PERIODIC_TUNING_DISABLED";
    GoogleCloudRetailV2betaModelPeriodicTuningStateEnum["AllTuningDisabled"] = "ALL_TUNING_DISABLED";
    GoogleCloudRetailV2betaModelPeriodicTuningStateEnum["PeriodicTuningEnabled"] = "PERIODIC_TUNING_ENABLED";
})(GoogleCloudRetailV2betaModelPeriodicTuningStateEnum || (GoogleCloudRetailV2betaModelPeriodicTuningStateEnum = {}));
export var GoogleCloudRetailV2betaModelServingStateEnum;
(function (GoogleCloudRetailV2betaModelServingStateEnum) {
    GoogleCloudRetailV2betaModelServingStateEnum["ServingStateUnspecified"] = "SERVING_STATE_UNSPECIFIED";
    GoogleCloudRetailV2betaModelServingStateEnum["Inactive"] = "INACTIVE";
    GoogleCloudRetailV2betaModelServingStateEnum["Active"] = "ACTIVE";
    GoogleCloudRetailV2betaModelServingStateEnum["Tuned"] = "TUNED";
})(GoogleCloudRetailV2betaModelServingStateEnum || (GoogleCloudRetailV2betaModelServingStateEnum = {}));
export var GoogleCloudRetailV2betaModelTrainingStateEnum;
(function (GoogleCloudRetailV2betaModelTrainingStateEnum) {
    GoogleCloudRetailV2betaModelTrainingStateEnum["TrainingStateUnspecified"] = "TRAINING_STATE_UNSPECIFIED";
    GoogleCloudRetailV2betaModelTrainingStateEnum["Paused"] = "PAUSED";
    GoogleCloudRetailV2betaModelTrainingStateEnum["Training"] = "TRAINING";
})(GoogleCloudRetailV2betaModelTrainingStateEnum || (GoogleCloudRetailV2betaModelTrainingStateEnum = {}));
// GoogleCloudRetailV2betaModelInput
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
var GoogleCloudRetailV2betaModelInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaModelInput, _super);
    function GoogleCloudRetailV2betaModelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModelInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModelInput.prototype, "filteringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModelInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationObjective" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModelInput.prototype, "optimizationObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodicTuningState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModelInput.prototype, "periodicTuningState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModelInput.prototype, "trainingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModelInput.prototype, "type", void 0);
    return GoogleCloudRetailV2betaModelInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaModelInput };
// GoogleCloudRetailV2betaModel
/**
 * Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.
**/
var GoogleCloudRetailV2betaModel = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaModel, _super);
    function GoogleCloudRetailV2betaModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "dataState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filteringOption" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "filteringOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastTuneTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "lastTuneTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optimizationObjective" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "optimizationObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=periodicTuningState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "periodicTuningState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingConfigLists", elemType: GoogleCloudRetailV2betaModelServingConfigList }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaModel.prototype, "servingConfigLists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "servingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingState" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "trainingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tuningOperation" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "tuningOperation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaModel.prototype, "updateTime", void 0);
    return GoogleCloudRetailV2betaModel;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaModel };
