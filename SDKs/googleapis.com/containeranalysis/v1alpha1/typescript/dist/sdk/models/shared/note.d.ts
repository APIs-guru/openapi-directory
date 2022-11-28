import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum NoteKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    PackageVulnerability = "PACKAGE_VULNERABILITY",
    BuildDetails = "BUILD_DETAILS",
    ImageBasis = "IMAGE_BASIS",
    PackageManager = "PACKAGE_MANAGER",
    Deployable = "DEPLOYABLE",
    Discovery = "DISCOVERY",
    AttestationAuthority = "ATTESTATION_AUTHORITY",
    Upgrade = "UPGRADE",
    Compliance = "COMPLIANCE",
    Sbom = "SBOM",
    SpdxPackage = "SPDX_PACKAGE",
    SpdxFile = "SPDX_FILE",
    SpdxRelationship = "SPDX_RELATIONSHIP",
    DsseAttestation = "DSSE_ATTESTATION"
}
/**
 * Provides a detailed description of a `Note`.
**/
export declare class Note extends SpeakeasyBase {
    attestationAuthority?: AttestationAuthority;
    baseImage?: Basis;
    buildType?: BuildType;
    compliance?: ComplianceNote;
    createTime?: string;
    deployable?: Deployable;
    discovery?: Discovery;
    dsseAttestation?: DsseAttestationNote;
    expirationTime?: string;
    kind?: NoteKindEnum;
    longDescription?: string;
    name?: string;
    package?: Package;
    relatedUrl?: RelatedUrl[];
    sbom?: DocumentNote;
    shortDescription?: string;
    spdxFile?: FileNote;
    spdxPackage?: PackageInfoNote;
    spdxRelationship?: RelationshipNote;
    updateTime?: string;
    upgrade?: UpgradeNote;
    vulnerabilityType?: VulnerabilityType;
}
