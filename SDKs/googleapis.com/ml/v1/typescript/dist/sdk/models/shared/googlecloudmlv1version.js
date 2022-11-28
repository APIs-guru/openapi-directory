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
import { GoogleCloudMlV1AcceleratorConfig } from "./googlecloudmlv1acceleratorconfig";
import { GoogleCloudMlV1AutoScaling } from "./googlecloudmlv1autoscaling";
import { GoogleCloudMlV1ContainerSpec } from "./googlecloudmlv1containerspec";
import { GoogleCloudMlV1ExplanationConfig } from "./googlecloudmlv1explanationconfig";
import { GoogleCloudMlV1ManualScaling } from "./googlecloudmlv1manualscaling";
import { GoogleCloudMlV1RequestLoggingConfig } from "./googlecloudmlv1requestloggingconfig";
import { GoogleCloudMlV1RouteMap } from "./googlecloudmlv1routemap";
export var GoogleCloudMlV1VersionFrameworkEnum;
(function (GoogleCloudMlV1VersionFrameworkEnum) {
    GoogleCloudMlV1VersionFrameworkEnum["FrameworkUnspecified"] = "FRAMEWORK_UNSPECIFIED";
    GoogleCloudMlV1VersionFrameworkEnum["Tensorflow"] = "TENSORFLOW";
    GoogleCloudMlV1VersionFrameworkEnum["ScikitLearn"] = "SCIKIT_LEARN";
    GoogleCloudMlV1VersionFrameworkEnum["Xgboost"] = "XGBOOST";
})(GoogleCloudMlV1VersionFrameworkEnum || (GoogleCloudMlV1VersionFrameworkEnum = {}));
export var GoogleCloudMlV1VersionStateEnum;
(function (GoogleCloudMlV1VersionStateEnum) {
    GoogleCloudMlV1VersionStateEnum["Unknown"] = "UNKNOWN";
    GoogleCloudMlV1VersionStateEnum["Ready"] = "READY";
    GoogleCloudMlV1VersionStateEnum["Creating"] = "CREATING";
    GoogleCloudMlV1VersionStateEnum["Failed"] = "FAILED";
    GoogleCloudMlV1VersionStateEnum["Deleting"] = "DELETING";
    GoogleCloudMlV1VersionStateEnum["Updating"] = "UPDATING";
})(GoogleCloudMlV1VersionStateEnum || (GoogleCloudMlV1VersionStateEnum = {}));
// GoogleCloudMlV1Version
/**
 * Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
**/
var GoogleCloudMlV1Version = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1Version, _super);
    function GoogleCloudMlV1Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceleratorConfig" }),
        __metadata("design:type", GoogleCloudMlV1AcceleratorConfig)
    ], GoogleCloudMlV1Version.prototype, "acceleratorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoScaling" }),
        __metadata("design:type", GoogleCloudMlV1AutoScaling)
    ], GoogleCloudMlV1Version.prototype, "autoScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container" }),
        __metadata("design:type", GoogleCloudMlV1ContainerSpec)
    ], GoogleCloudMlV1Version.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentUri" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "deploymentUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanationConfig" }),
        __metadata("design:type", GoogleCloudMlV1ExplanationConfig)
    ], GoogleCloudMlV1Version.prototype, "explanationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "framework", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefault" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1Version.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1Version.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastMigrationModelId" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "lastMigrationModelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastMigrationTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "lastMigrationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUseTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "lastUseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manualScaling" }),
        __metadata("design:type", GoogleCloudMlV1ManualScaling)
    ], GoogleCloudMlV1Version.prototype, "manualScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageUris" }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1Version.prototype, "packageUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictionClass" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "predictionClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pythonVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "pythonVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestLoggingConfig" }),
        __metadata("design:type", GoogleCloudMlV1RequestLoggingConfig)
    ], GoogleCloudMlV1Version.prototype, "requestLoggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routes" }),
        __metadata("design:type", GoogleCloudMlV1RouteMap)
    ], GoogleCloudMlV1Version.prototype, "routes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "runtimeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Version.prototype, "state", void 0);
    return GoogleCloudMlV1Version;
}(SpeakeasyBase));
export { GoogleCloudMlV1Version };
// GoogleCloudMlV1VersionInput
/**
 * Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
**/
var GoogleCloudMlV1VersionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1VersionInput, _super);
    function GoogleCloudMlV1VersionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceleratorConfig" }),
        __metadata("design:type", GoogleCloudMlV1AcceleratorConfig)
    ], GoogleCloudMlV1VersionInput.prototype, "acceleratorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoScaling" }),
        __metadata("design:type", GoogleCloudMlV1AutoScaling)
    ], GoogleCloudMlV1VersionInput.prototype, "autoScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container" }),
        __metadata("design:type", GoogleCloudMlV1ContainerSpec)
    ], GoogleCloudMlV1VersionInput.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deploymentUri" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "deploymentUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanationConfig" }),
        __metadata("design:type", GoogleCloudMlV1ExplanationConfig)
    ], GoogleCloudMlV1VersionInput.prototype, "explanationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=framework" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "framework", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDefault" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1VersionInput.prototype, "isDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1VersionInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUseTime" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "lastUseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manualScaling" }),
        __metadata("design:type", GoogleCloudMlV1ManualScaling)
    ], GoogleCloudMlV1VersionInput.prototype, "manualScaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageUris" }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1VersionInput.prototype, "packageUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predictionClass" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "predictionClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pythonVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "pythonVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestLoggingConfig" }),
        __metadata("design:type", GoogleCloudMlV1RequestLoggingConfig)
    ], GoogleCloudMlV1VersionInput.prototype, "requestLoggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routes" }),
        __metadata("design:type", GoogleCloudMlV1RouteMap)
    ], GoogleCloudMlV1VersionInput.prototype, "routes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "runtimeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1VersionInput.prototype, "state", void 0);
    return GoogleCloudMlV1VersionInput;
}(SpeakeasyBase));
export { GoogleCloudMlV1VersionInput };
