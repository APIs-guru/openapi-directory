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
import { GoogleCloudRunV2EnvVar } from "./googlecloudrunv2envvar";
import { GoogleCloudRunV2Probe } from "./googlecloudrunv2probe";
import { GoogleCloudRunV2ContainerPort } from "./googlecloudrunv2containerport";
import { GoogleCloudRunV2ResourceRequirements } from "./googlecloudrunv2resourcerequirements";
import { GoogleCloudRunV2VolumeMount } from "./googlecloudrunv2volumemount";
// GoogleCloudRunV2Container
/**
 * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
**/
var GoogleCloudRunV2Container = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2Container, _super);
    function GoogleCloudRunV2Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=args" }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Container.prototype, "args", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Container.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=env", elemType: GoogleCloudRunV2EnvVar }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Container.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Container.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=livenessProbe" }),
        __metadata("design:type", GoogleCloudRunV2Probe)
    ], GoogleCloudRunV2Container.prototype, "livenessProbe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Container.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ports", elemType: GoogleCloudRunV2ContainerPort }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Container.prototype, "ports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources" }),
        __metadata("design:type", GoogleCloudRunV2ResourceRequirements)
    ], GoogleCloudRunV2Container.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startupProbe" }),
        __metadata("design:type", GoogleCloudRunV2Probe)
    ], GoogleCloudRunV2Container.prototype, "startupProbe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeMounts", elemType: GoogleCloudRunV2VolumeMount }),
        __metadata("design:type", Array)
    ], GoogleCloudRunV2Container.prototype, "volumeMounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workingDir" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Container.prototype, "workingDir", void 0);
    return GoogleCloudRunV2Container;
}(SpeakeasyBase));
export { GoogleCloudRunV2Container };
