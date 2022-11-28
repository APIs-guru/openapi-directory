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
export var GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum;
(function (GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum) {
    GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum["ModelTrainingModeUnspecified"] = "MODEL_TRAINING_MODE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum["ModelTrainingModeAutomatic"] = "MODEL_TRAINING_MODE_AUTOMATIC";
    GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum["ModelTrainingModeManual"] = "MODEL_TRAINING_MODE_MANUAL";
})(GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum || (GoogleCloudDialogflowCxV3beta1NluSettingsModelTrainingModeEnum = {}));
export var GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum;
(function (GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum) {
    GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum["ModelTypeUnspecified"] = "MODEL_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum["ModelTypeStandard"] = "MODEL_TYPE_STANDARD";
    GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum["ModelTypeAdvanced"] = "MODEL_TYPE_ADVANCED";
})(GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum || (GoogleCloudDialogflowCxV3beta1NluSettingsModelTypeEnum = {}));
// GoogleCloudDialogflowCxV3beta1NluSettings
/**
 * Settings related to NLU.
**/
var GoogleCloudDialogflowCxV3beta1NluSettings = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1NluSettings, _super);
    function GoogleCloudDialogflowCxV3beta1NluSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classificationThreshold" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowCxV3beta1NluSettings.prototype, "classificationThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelTrainingMode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1NluSettings.prototype, "modelTrainingMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modelType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1NluSettings.prototype, "modelType", void 0);
    return GoogleCloudDialogflowCxV3beta1NluSettings;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1NluSettings };
