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
import { AttestationAuthority } from "./attestationauthority";
import { Basis } from "./basis";
import { BuildType } from "./buildtype";
import { ComplianceNote } from "./compliancenote";
import { Deployable } from "./deployable";
import { Discovery } from "./discovery";
import { DsseAttestationNote } from "./dsseattestationnote";
import { Package } from "./package";
import { RelatedUrl } from "./relatedurl";
import { DocumentNote } from "./documentnote";
import { FileNote } from "./filenote";
import { PackageInfoNote } from "./packageinfonote";
import { RelationshipNote } from "./relationshipnote";
import { UpgradeNote } from "./upgradenote";
import { VulnerabilityType } from "./vulnerabilitytype";
export var NoteKindEnum;
(function (NoteKindEnum) {
    NoteKindEnum["KindUnspecified"] = "KIND_UNSPECIFIED";
    NoteKindEnum["PackageVulnerability"] = "PACKAGE_VULNERABILITY";
    NoteKindEnum["BuildDetails"] = "BUILD_DETAILS";
    NoteKindEnum["ImageBasis"] = "IMAGE_BASIS";
    NoteKindEnum["PackageManager"] = "PACKAGE_MANAGER";
    NoteKindEnum["Deployable"] = "DEPLOYABLE";
    NoteKindEnum["Discovery"] = "DISCOVERY";
    NoteKindEnum["AttestationAuthority"] = "ATTESTATION_AUTHORITY";
    NoteKindEnum["Upgrade"] = "UPGRADE";
    NoteKindEnum["Compliance"] = "COMPLIANCE";
    NoteKindEnum["Sbom"] = "SBOM";
    NoteKindEnum["SpdxPackage"] = "SPDX_PACKAGE";
    NoteKindEnum["SpdxFile"] = "SPDX_FILE";
    NoteKindEnum["SpdxRelationship"] = "SPDX_RELATIONSHIP";
    NoteKindEnum["DsseAttestation"] = "DSSE_ATTESTATION";
})(NoteKindEnum || (NoteKindEnum = {}));
// Note
/**
 * Provides a detailed description of a `Note`.
**/
var Note = /** @class */ (function (_super) {
    __extends(Note, _super);
    function Note() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestationAuthority" }),
        __metadata("design:type", AttestationAuthority)
    ], Note.prototype, "attestationAuthority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseImage" }),
        __metadata("design:type", Basis)
    ], Note.prototype, "baseImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildType" }),
        __metadata("design:type", BuildType)
    ], Note.prototype, "buildType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliance" }),
        __metadata("design:type", ComplianceNote)
    ], Note.prototype, "compliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Note.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployable" }),
        __metadata("design:type", Deployable)
    ], Note.prototype, "deployable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discovery" }),
        __metadata("design:type", Discovery)
    ], Note.prototype, "discovery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dsseAttestation" }),
        __metadata("design:type", DsseAttestationNote)
    ], Note.prototype, "dsseAttestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", String)
    ], Note.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Note.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longDescription" }),
        __metadata("design:type", String)
    ], Note.prototype, "longDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Note.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=package" }),
        __metadata("design:type", Package)
    ], Note.prototype, "package", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedUrl", elemType: RelatedUrl }),
        __metadata("design:type", Array)
    ], Note.prototype, "relatedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sbom" }),
        __metadata("design:type", DocumentNote)
    ], Note.prototype, "sbom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], Note.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxFile" }),
        __metadata("design:type", FileNote)
    ], Note.prototype, "spdxFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxPackage" }),
        __metadata("design:type", PackageInfoNote)
    ], Note.prototype, "spdxPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxRelationship" }),
        __metadata("design:type", RelationshipNote)
    ], Note.prototype, "spdxRelationship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Note.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgrade" }),
        __metadata("design:type", UpgradeNote)
    ], Note.prototype, "upgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerabilityType" }),
        __metadata("design:type", VulnerabilityType)
    ], Note.prototype, "vulnerabilityType", void 0);
    return Note;
}(SpeakeasyBase));
export { Note };
