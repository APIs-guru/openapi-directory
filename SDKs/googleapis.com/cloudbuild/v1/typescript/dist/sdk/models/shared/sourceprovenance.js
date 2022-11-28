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
import { FileHashes } from "./filehashes";
import { RepoSource } from "./reposource";
import { StorageSource } from "./storagesource";
import { StorageSourceManifest } from "./storagesourcemanifest";
// SourceProvenance
/**
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
var SourceProvenance = /** @class */ (function (_super) {
    __extends(SourceProvenance, _super);
    function SourceProvenance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileHashes", elemType: FileHashes }),
        __metadata("design:type", Map)
    ], SourceProvenance.prototype, "fileHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedRepoSource" }),
        __metadata("design:type", RepoSource)
    ], SourceProvenance.prototype, "resolvedRepoSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedStorageSource" }),
        __metadata("design:type", StorageSource)
    ], SourceProvenance.prototype, "resolvedStorageSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedStorageSourceManifest" }),
        __metadata("design:type", StorageSourceManifest)
    ], SourceProvenance.prototype, "resolvedStorageSourceManifest", void 0);
    return SourceProvenance;
}(SpeakeasyBase));
export { SourceProvenance };
// SourceProvenanceInput
/**
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
var SourceProvenanceInput = /** @class */ (function (_super) {
    __extends(SourceProvenanceInput, _super);
    function SourceProvenanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedRepoSource" }),
        __metadata("design:type", RepoSource)
    ], SourceProvenanceInput.prototype, "resolvedRepoSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedStorageSource" }),
        __metadata("design:type", StorageSource)
    ], SourceProvenanceInput.prototype, "resolvedStorageSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedStorageSourceManifest" }),
        __metadata("design:type", StorageSourceManifest)
    ], SourceProvenanceInput.prototype, "resolvedStorageSourceManifest", void 0);
    return SourceProvenanceInput;
}(SpeakeasyBase));
export { SourceProvenanceInput };
