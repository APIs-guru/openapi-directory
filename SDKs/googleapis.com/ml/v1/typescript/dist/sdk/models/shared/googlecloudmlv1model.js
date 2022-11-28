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
import { GoogleCloudMlV1VersionInput } from "./googlecloudmlv1version";
import { GoogleCloudMlV1Version } from "./googlecloudmlv1version";
// GoogleCloudMlV1ModelInput
/**
 * Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
**/
var GoogleCloudMlV1ModelInput = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1ModelInput, _super);
    function GoogleCloudMlV1ModelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultVersion" }),
        __metadata("design:type", GoogleCloudMlV1VersionInput)
    ], GoogleCloudMlV1ModelInput.prototype, "defaultVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1ModelInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1ModelInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1ModelInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1ModelInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlinePredictionConsoleLogging" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1ModelInput.prototype, "onlinePredictionConsoleLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlinePredictionLogging" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1ModelInput.prototype, "onlinePredictionLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regions" }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1ModelInput.prototype, "regions", void 0);
    return GoogleCloudMlV1ModelInput;
}(SpeakeasyBase));
export { GoogleCloudMlV1ModelInput };
// GoogleCloudMlV1Model
/**
 * Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
**/
var GoogleCloudMlV1Model = /** @class */ (function (_super) {
    __extends(GoogleCloudMlV1Model, _super);
    function GoogleCloudMlV1Model() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultVersion" }),
        __metadata("design:type", GoogleCloudMlV1Version)
    ], GoogleCloudMlV1Model.prototype, "defaultVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Model.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Model.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudMlV1Model.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudMlV1Model.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlinePredictionConsoleLogging" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1Model.prototype, "onlinePredictionConsoleLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onlinePredictionLogging" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudMlV1Model.prototype, "onlinePredictionLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regions" }),
        __metadata("design:type", Array)
    ], GoogleCloudMlV1Model.prototype, "regions", void 0);
    return GoogleCloudMlV1Model;
}(SpeakeasyBase));
export { GoogleCloudMlV1Model };
