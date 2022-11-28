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
import { Source } from "./source";
import { SourceProvenance } from "./sourceprovenance";
export var BuildConfigDockerRegistryEnum;
(function (BuildConfigDockerRegistryEnum) {
    BuildConfigDockerRegistryEnum["DockerRegistryUnspecified"] = "DOCKER_REGISTRY_UNSPECIFIED";
    BuildConfigDockerRegistryEnum["ContainerRegistry"] = "CONTAINER_REGISTRY";
    BuildConfigDockerRegistryEnum["ArtifactRegistry"] = "ARTIFACT_REGISTRY";
})(BuildConfigDockerRegistryEnum || (BuildConfigDockerRegistryEnum = {}));
// BuildConfigInput
/**
 * Describes the Build step of the function that builds a container from the given source.
**/
var BuildConfigInput = /** @class */ (function (_super) {
    __extends(BuildConfigInput, _super);
    function BuildConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildpackStack" }),
        __metadata("design:type", String)
    ], BuildConfigInput.prototype, "buildpackStack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerRegistry" }),
        __metadata("design:type", String)
    ], BuildConfigInput.prototype, "dockerRegistry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerRepository" }),
        __metadata("design:type", String)
    ], BuildConfigInput.prototype, "dockerRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryPoint" }),
        __metadata("design:type", String)
    ], BuildConfigInput.prototype, "entryPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], BuildConfigInput.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtime" }),
        __metadata("design:type", String)
    ], BuildConfigInput.prototype, "runtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Source)
    ], BuildConfigInput.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceProvenance" }),
        __metadata("design:type", SourceProvenance)
    ], BuildConfigInput.prototype, "sourceProvenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerPool" }),
        __metadata("design:type", String)
    ], BuildConfigInput.prototype, "workerPool", void 0);
    return BuildConfigInput;
}(SpeakeasyBase));
export { BuildConfigInput };
// BuildConfig
/**
 * Describes the Build step of the function that builds a container from the given source.
**/
var BuildConfig = /** @class */ (function (_super) {
    __extends(BuildConfig, _super);
    function BuildConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build" }),
        __metadata("design:type", String)
    ], BuildConfig.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildpackStack" }),
        __metadata("design:type", String)
    ], BuildConfig.prototype, "buildpackStack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerRegistry" }),
        __metadata("design:type", String)
    ], BuildConfig.prototype, "dockerRegistry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerRepository" }),
        __metadata("design:type", String)
    ], BuildConfig.prototype, "dockerRepository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryPoint" }),
        __metadata("design:type", String)
    ], BuildConfig.prototype, "entryPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables" }),
        __metadata("design:type", Map)
    ], BuildConfig.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtime" }),
        __metadata("design:type", String)
    ], BuildConfig.prototype, "runtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Source)
    ], BuildConfig.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceProvenance" }),
        __metadata("design:type", SourceProvenance)
    ], BuildConfig.prototype, "sourceProvenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerPool" }),
        __metadata("design:type", String)
    ], BuildConfig.prototype, "workerPool", void 0);
    return BuildConfig;
}(SpeakeasyBase));
export { BuildConfig };
