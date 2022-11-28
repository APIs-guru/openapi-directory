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
import { Artifact } from "./artifact";
import { Command } from "./command";
import { Source } from "./source";
// BuildProvenance
/**
 * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
**/
var BuildProvenance = /** @class */ (function (_super) {
    __extends(BuildProvenance, _super);
    function BuildProvenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildOptions" }),
        __metadata("design:type", Map)
    ], BuildProvenance.prototype, "buildOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builderVersion" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "builderVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtArtifacts", elemType: Artifact }),
        __metadata("design:type", Array)
    ], BuildProvenance.prototype, "builtArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commands", elemType: Command }),
        __metadata("design:type", Array)
    ], BuildProvenance.prototype, "commands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "creator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finishTime" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "finishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logsBucket" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "logsBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceProvenance" }),
        __metadata("design:type", Source)
    ], BuildProvenance.prototype, "sourceProvenance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerId" }),
        __metadata("design:type", String)
    ], BuildProvenance.prototype, "triggerId", void 0);
    return BuildProvenance;
}(SpeakeasyBase));
export { BuildProvenance };
