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
import { AttestationOccurrence } from "./attestationoccurrence";
import { BuildOccurrence } from "./buildoccurrence";
import { ComplianceOccurrence } from "./complianceoccurrence";
import { DeploymentOccurrence } from "./deploymentoccurrence";
import { DiscoveryOccurrence } from "./discoveryoccurrence";
import { DsseAttestationOccurrence } from "./dsseattestationoccurrence";
import { Envelope } from "./envelope";
import { ImageOccurrence } from "./imageoccurrence";
import { PackageOccurrence } from "./packageoccurrence";
import { UpgradeOccurrence } from "./upgradeoccurrence";
import { VulnerabilityOccurrence } from "./vulnerabilityoccurrence";
export var OccurrenceKindEnum;
(function (OccurrenceKindEnum) {
    OccurrenceKindEnum["NoteKindUnspecified"] = "NOTE_KIND_UNSPECIFIED";
    OccurrenceKindEnum["Vulnerability"] = "VULNERABILITY";
    OccurrenceKindEnum["Build"] = "BUILD";
    OccurrenceKindEnum["Image"] = "IMAGE";
    OccurrenceKindEnum["Package"] = "PACKAGE";
    OccurrenceKindEnum["Deployment"] = "DEPLOYMENT";
    OccurrenceKindEnum["Discovery"] = "DISCOVERY";
    OccurrenceKindEnum["Attestation"] = "ATTESTATION";
    OccurrenceKindEnum["Upgrade"] = "UPGRADE";
    OccurrenceKindEnum["Compliance"] = "COMPLIANCE";
    OccurrenceKindEnum["DsseAttestation"] = "DSSE_ATTESTATION";
})(OccurrenceKindEnum || (OccurrenceKindEnum = {}));
// Occurrence
/**
 * An instance of an analysis type that has been found on a resource.
**/
var Occurrence = /** @class */ (function (_super) {
    __extends(Occurrence, _super);
    function Occurrence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attestation" }),
        __metadata("design:type", AttestationOccurrence)
    ], Occurrence.prototype, "attestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build" }),
        __metadata("design:type", BuildOccurrence)
    ], Occurrence.prototype, "build", void 0);
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
        __metadata("design:type", DeploymentOccurrence)
    ], Occurrence.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discovery" }),
        __metadata("design:type", DiscoveryOccurrence)
    ], Occurrence.prototype, "discovery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dsseAttestation" }),
        __metadata("design:type", DsseAttestationOccurrence)
    ], Occurrence.prototype, "dsseAttestation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=envelope" }),
        __metadata("design:type", Envelope)
    ], Occurrence.prototype, "envelope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", ImageOccurrence)
    ], Occurrence.prototype, "image", void 0);
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
        SpeakeasyMetadata({ data: "json, name=package" }),
        __metadata("design:type", PackageOccurrence)
    ], Occurrence.prototype, "package", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remediation" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "remediation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUri" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "resourceUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Occurrence.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgrade" }),
        __metadata("design:type", UpgradeOccurrence)
    ], Occurrence.prototype, "upgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vulnerability" }),
        __metadata("design:type", VulnerabilityOccurrence)
    ], Occurrence.prototype, "vulnerability", void 0);
    return Occurrence;
}(SpeakeasyBase));
export { Occurrence };
