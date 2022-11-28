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
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";
// GoogleCloudDataplexV1TaskSparkTaskConfig
/**
 * User-specified config for running a Spark task.
**/
var GoogleCloudDataplexV1TaskSparkTaskConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1TaskSparkTaskConfig, _super);
    function GoogleCloudDataplexV1TaskSparkTaskConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archiveUris" }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1TaskSparkTaskConfig.prototype, "archiveUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileUris" }),
        __metadata("design:type", Array)
    ], GoogleCloudDataplexV1TaskSparkTaskConfig.prototype, "fileUris", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infrastructureSpec" }),
        __metadata("design:type", GoogleCloudDataplexV1TaskInfrastructureSpec)
    ], GoogleCloudDataplexV1TaskSparkTaskConfig.prototype, "infrastructureSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainClass" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1TaskSparkTaskConfig.prototype, "mainClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainJarFileUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1TaskSparkTaskConfig.prototype, "mainJarFileUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pythonScriptFile" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1TaskSparkTaskConfig.prototype, "pythonScriptFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlScript" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1TaskSparkTaskConfig.prototype, "sqlScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlScriptFile" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1TaskSparkTaskConfig.prototype, "sqlScriptFile", void 0);
    return GoogleCloudDataplexV1TaskSparkTaskConfig;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1TaskSparkTaskConfig };
