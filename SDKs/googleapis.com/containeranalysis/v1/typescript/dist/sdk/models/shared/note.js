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
import { AttestationNote } from "./attestationnote";
import { BuildNote } from "./buildnote";
import { ComplianceNote } from "./compliancenote";
import { DeploymentNote } from "./deploymentnote";
import { DiscoveryNote } from "./discoverynote";
import { DsseAttestationNote } from "./dsseattestationnote";
import { ImageNote } from "./imagenote";
import { PackageNote } from "./packagenote";
import { RelatedUrl } from "./relatedurl";
import { UpgradeNote } from "./upgradenote";
import { VulnerabilityNote } from "./vulnerabilitynote";
export var NoteKindEnum;
(function (NoteKindEnum) {
    NoteKindEnum["NoteKindUnspecified"] = "NOTE_KIND_UNSPECIFIED";
    NoteKindEnum["Vulnerability"] = "VULNERABILITY";
    NoteKindEnum["Build"] = "BUILD";
    NoteKindEnum["Image"] = "IMAGE";
    NoteKindEnum["Package"] = "PACKAGE";
    NoteKindEnum["Deployment"] = "DEPLOYMENT";
    NoteKindEnum["Discovery"] = "DISCOVERY";
    NoteKindEnum["Attestation"] = "ATTESTATION";
    NoteKindEnum["Upgrade"] = "UPGRADE";
    NoteKindEnum["Compliance"] = "COMPLIANCE";
    NoteKindEnum["DsseAttestation"] = "DSSE_ATTESTATION";
})(NoteKindEnum || (NoteKindEnum = {}));
// Note
/**
 * A type of analysis that can be done for a resource.
**/
var Note = /** @class */ (function (_super) {
    __extends(Note, _super);
    function Note() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestation" }),
        __metadata("design:type", AttestationNote)
    ], Note.prototype, "attestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build" }),
        __metadata("design:type", BuildNote)
    ], Note.prototype, "build", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliance" }),
        __metadata("design:type", ComplianceNote)
    ], Note.prototype, "compliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Note.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployment" }),
        __metadata("design:type", DeploymentNote)
    ], Note.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discovery" }),
        __metadata("design:type", DiscoveryNote)
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
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", ImageNote)
    ], Note.prototype, "image", void 0);
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
        __metadata("design:type", PackageNote)
    ], Note.prototype, "package", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedNoteNames" }),
        __metadata("design:type", Array)
    ], Note.prototype, "relatedNoteNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedUrl", elemType: RelatedUrl }),
        __metadata("design:type", Array)
    ], Note.prototype, "relatedUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortDescription" }),
        __metadata("design:type", String)
    ], Note.prototype, "shortDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Note.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgrade" }),
        __metadata("design:type", UpgradeNote)
    ], Note.prototype, "upgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerability" }),
        __metadata("design:type", VulnerabilityNote)
    ], Note.prototype, "vulnerability", void 0);
    return Note;
}(SpeakeasyBase));
export { Note };
