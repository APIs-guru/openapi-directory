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
import { TimeSpan } from "./timespan";
import { BuiltImage } from "./builtimage";
import { UploadedMavenArtifact } from "./uploadedmavenartifact";
import { UploadedPythonPackage } from "./uploadedpythonpackage";
// Results
/**
 * Artifacts created by the build pipeline.
**/
var Results = /** @class */ (function (_super) {
    __extends(Results, _super);
    function Results() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifactManifest" }),
        __metadata("design:type", String)
    ], Results.prototype, "artifactManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifactTiming" }),
        __metadata("design:type", TimeSpan)
    ], Results.prototype, "artifactTiming", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildStepImages" }),
        __metadata("design:type", Array)
    ], Results.prototype, "buildStepImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildStepOutputs" }),
        __metadata("design:type", Array)
    ], Results.prototype, "buildStepOutputs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: BuiltImage }),
        __metadata("design:type", Array)
    ], Results.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mavenArtifacts", elemType: UploadedMavenArtifact }),
        __metadata("design:type", Array)
    ], Results.prototype, "mavenArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numArtifacts" }),
        __metadata("design:type", String)
    ], Results.prototype, "numArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pythonPackages", elemType: UploadedPythonPackage }),
        __metadata("design:type", Array)
    ], Results.prototype, "pythonPackages", void 0);
    return Results;
}(SpeakeasyBase));
export { Results };
