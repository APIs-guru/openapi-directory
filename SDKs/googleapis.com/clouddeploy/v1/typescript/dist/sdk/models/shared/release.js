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
import { BuildArtifact } from "./buildartifact";
import { DeliveryPipeline } from "./deliverypipeline";
import { TargetArtifact } from "./targetartifact";
import { TargetRender } from "./targetrender";
import { Target } from "./target";
import { DeliveryPipelineInput } from "./deliverypipeline";
export var ReleaseRenderStateEnum;
(function (ReleaseRenderStateEnum) {
    ReleaseRenderStateEnum["RenderStateUnspecified"] = "RENDER_STATE_UNSPECIFIED";
    ReleaseRenderStateEnum["Succeeded"] = "SUCCEEDED";
    ReleaseRenderStateEnum["Failed"] = "FAILED";
    ReleaseRenderStateEnum["InProgress"] = "IN_PROGRESS";
})(ReleaseRenderStateEnum || (ReleaseRenderStateEnum = {}));
// Release
/**
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
var Release = /** @class */ (function (_super) {
    __extends(Release, _super);
    function Release() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abandoned" }),
        __metadata("design:type", Boolean)
    ], Release.prototype, "abandoned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], Release.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildArtifacts", elemType: BuildArtifact }),
        __metadata("design:type", Array)
    ], Release.prototype, "buildArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Release.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryPipelineSnapshot" }),
        __metadata("design:type", DeliveryPipeline)
    ], Release.prototype, "deliveryPipelineSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Release.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Release.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Release.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Release.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renderEndTime" }),
        __metadata("design:type", String)
    ], Release.prototype, "renderEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renderStartTime" }),
        __metadata("design:type", String)
    ], Release.prototype, "renderStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renderState" }),
        __metadata("design:type", String)
    ], Release.prototype, "renderState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skaffoldConfigPath" }),
        __metadata("design:type", String)
    ], Release.prototype, "skaffoldConfigPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skaffoldConfigUri" }),
        __metadata("design:type", String)
    ], Release.prototype, "skaffoldConfigUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skaffoldVersion" }),
        __metadata("design:type", String)
    ], Release.prototype, "skaffoldVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetArtifacts", elemType: TargetArtifact }),
        __metadata("design:type", Map)
    ], Release.prototype, "targetArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetRenders", elemType: TargetRender }),
        __metadata("design:type", Map)
    ], Release.prototype, "targetRenders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetSnapshots", elemType: Target }),
        __metadata("design:type", Array)
    ], Release.prototype, "targetSnapshots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Release.prototype, "uid", void 0);
    return Release;
}(SpeakeasyBase));
export { Release };
// ReleaseInput
/**
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
var ReleaseInput = /** @class */ (function (_super) {
    __extends(ReleaseInput, _super);
    function ReleaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], ReleaseInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildArtifacts", elemType: BuildArtifact }),
        __metadata("design:type", Array)
    ], ReleaseInput.prototype, "buildArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryPipelineSnapshot" }),
        __metadata("design:type", DeliveryPipelineInput)
    ], ReleaseInput.prototype, "deliveryPipelineSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ReleaseInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skaffoldConfigPath" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "skaffoldConfigPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skaffoldConfigUri" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "skaffoldConfigUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skaffoldVersion" }),
        __metadata("design:type", String)
    ], ReleaseInput.prototype, "skaffoldVersion", void 0);
    return ReleaseInput;
}(SpeakeasyBase));
export { ReleaseInput };
