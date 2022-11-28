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
import { Attestation } from "./attestation";
import { BuildDetails } from "./builddetails";
import { ComplianceOccurrence } from "./complianceoccurrence";
import { Deployment } from "./deployment";
import { Derived } from "./derived";
import { Discovered } from "./discovered";
import { DsseAttestationOccurrence } from "./dsseattestationoccurrence";
import { Envelope } from "./envelope";
import { Installation } from "./installation";
import { Resource } from "./resource";
import { DocumentOccurrence } from "./documentoccurrence";
import { FileOccurrence } from "./fileoccurrence";
import { PackageInfoOccurrence } from "./packageinfooccurrence";
import { RelationshipOccurrence } from "./relationshipoccurrence";
import { UpgradeOccurrence } from "./upgradeoccurrence";
import { VulnerabilityDetails } from "./vulnerabilitydetails";
import { InstallationInput } from "./installation";
import { PackageInfoOccurrenceInput } from "./packageinfooccurrence";
import { RelationshipOccurrenceInput } from "./relationshipoccurrence";
import { VulnerabilityDetailsInput } from "./vulnerabilitydetails";
export var OccurrenceKindEnum;
(function (OccurrenceKindEnum) {
    OccurrenceKindEnum["KindUnspecified"] = "KIND_UNSPECIFIED";
    OccurrenceKindEnum["PackageVulnerability"] = "PACKAGE_VULNERABILITY";
    OccurrenceKindEnum["BuildDetails"] = "BUILD_DETAILS";
    OccurrenceKindEnum["ImageBasis"] = "IMAGE_BASIS";
    OccurrenceKindEnum["PackageManager"] = "PACKAGE_MANAGER";
    OccurrenceKindEnum["Deployable"] = "DEPLOYABLE";
    OccurrenceKindEnum["Discovery"] = "DISCOVERY";
    OccurrenceKindEnum["AttestationAuthority"] = "ATTESTATION_AUTHORITY";
    OccurrenceKindEnum["Upgrade"] = "UPGRADE";
    OccurrenceKindEnum["Compliance"] = "COMPLIANCE";
    OccurrenceKindEnum["Sbom"] = "SBOM";
    OccurrenceKindEnum["SpdxPackage"] = "SPDX_PACKAGE";
    OccurrenceKindEnum["SpdxFile"] = "SPDX_FILE";
    OccurrenceKindEnum["SpdxRelationship"] = "SPDX_RELATIONSHIP";
    OccurrenceKindEnum["DsseAttestation"] = "DSSE_ATTESTATION";
})(OccurrenceKindEnum || (OccurrenceKindEnum = {}));
// Occurrence
/**
 * `Occurrence` includes information about analysis occurrences for an image.
**/
var Occurrence = /** @class */ (function (_super) {
    __extends(Occurrence, _super);
    function Occurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestation" }),
        __metadata("design:type", Attestation)
    ], Occurrence.prototype, "attestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildDetails" }),
        __metadata("design:type", BuildDetails)
    ], Occurrence.prototype, "buildDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliance" }),
        __metadata("design:type", ComplianceOccurrence)
    ], Occurrence.prototype, "compliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployment" }),
        __metadata("design:type", Deployment)
    ], Occurrence.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=derivedImage" }),
        __metadata("design:type", Derived)
    ], Occurrence.prototype, "derivedImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discovered" }),
        __metadata("design:type", Discovered)
    ], Occurrence.prototype, "discovered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dsseAttestation" }),
        __metadata("design:type", DsseAttestationOccurrence)
    ], Occurrence.prototype, "dsseAttestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=envelope" }),
        __metadata("design:type", Envelope)
    ], Occurrence.prototype, "envelope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installation" }),
        __metadata("design:type", Installation)
    ], Occurrence.prototype, "installation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noteName" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "noteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remediation" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "remediation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Resource)
    ], Occurrence.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUrl" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "resourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sbom" }),
        __metadata("design:type", DocumentOccurrence)
    ], Occurrence.prototype, "sbom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxFile" }),
        __metadata("design:type", FileOccurrence)
    ], Occurrence.prototype, "spdxFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxPackage" }),
        __metadata("design:type", PackageInfoOccurrence)
    ], Occurrence.prototype, "spdxPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxRelationship" }),
        __metadata("design:type", RelationshipOccurrence)
    ], Occurrence.prototype, "spdxRelationship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgrade" }),
        __metadata("design:type", UpgradeOccurrence)
    ], Occurrence.prototype, "upgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerabilityDetails" }),
        __metadata("design:type", VulnerabilityDetails)
    ], Occurrence.prototype, "vulnerabilityDetails", void 0);
    return Occurrence;
}(SpeakeasyBase));
export { Occurrence };
// OccurrenceInput
/**
 * `Occurrence` includes information about analysis occurrences for an image.
**/
var OccurrenceInput = /** @class */ (function (_super) {
    __extends(OccurrenceInput, _super);
    function OccurrenceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestation" }),
        __metadata("design:type", Attestation)
    ], OccurrenceInput.prototype, "attestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildDetails" }),
        __metadata("design:type", BuildDetails)
    ], OccurrenceInput.prototype, "buildDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliance" }),
        __metadata("design:type", ComplianceOccurrence)
    ], OccurrenceInput.prototype, "compliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], OccurrenceInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployment" }),
        __metadata("design:type", Deployment)
    ], OccurrenceInput.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=derivedImage" }),
        __metadata("design:type", Derived)
    ], OccurrenceInput.prototype, "derivedImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discovered" }),
        __metadata("design:type", Discovered)
    ], OccurrenceInput.prototype, "discovered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dsseAttestation" }),
        __metadata("design:type", DsseAttestationOccurrence)
    ], OccurrenceInput.prototype, "dsseAttestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=envelope" }),
        __metadata("design:type", Envelope)
    ], OccurrenceInput.prototype, "envelope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installation" }),
        __metadata("design:type", InstallationInput)
    ], OccurrenceInput.prototype, "installation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], OccurrenceInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OccurrenceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noteName" }),
        __metadata("design:type", String)
    ], OccurrenceInput.prototype, "noteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remediation" }),
        __metadata("design:type", String)
    ], OccurrenceInput.prototype, "remediation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", Resource)
    ], OccurrenceInput.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUrl" }),
        __metadata("design:type", String)
    ], OccurrenceInput.prototype, "resourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sbom" }),
        __metadata("design:type", DocumentOccurrence)
    ], OccurrenceInput.prototype, "sbom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxFile" }),
        __metadata("design:type", FileOccurrence)
    ], OccurrenceInput.prototype, "spdxFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxPackage" }),
        __metadata("design:type", PackageInfoOccurrenceInput)
    ], OccurrenceInput.prototype, "spdxPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdxRelationship" }),
        __metadata("design:type", RelationshipOccurrenceInput)
    ], OccurrenceInput.prototype, "spdxRelationship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], OccurrenceInput.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgrade" }),
        __metadata("design:type", UpgradeOccurrence)
    ], OccurrenceInput.prototype, "upgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerabilityDetails" }),
        __metadata("design:type", VulnerabilityDetailsInput)
    ], OccurrenceInput.prototype, "vulnerabilityDetails", void 0);
    return OccurrenceInput;
}(SpeakeasyBase));
export { OccurrenceInput };
