import { SpeakeasyBase } from "../../../internal/utils";
import { Authority } from "./authority";
import { Basis } from "./basis";
import { Build } from "./build";
import { Deployable } from "./deployable";
import { Discovery } from "./discovery";
import { InToto } from "./intoto";
import { Package } from "./package";
import { RelatedUrl } from "./relatedurl";
import { DocumentNote } from "./documentnote";
import { FileNote } from "./filenote";
import { PackageInfoNote } from "./packageinfonote";
import { RelationshipNote } from "./relationshipnote";
import { Vulnerability } from "./vulnerability";
export declare enum NoteKindEnum {
    NoteKindUnspecified = "NOTE_KIND_UNSPECIFIED",
    Vulnerability = "VULNERABILITY",
    Build = "BUILD",
    Image = "IMAGE",
    Package = "PACKAGE",
    Deployment = "DEPLOYMENT",
    Discovery = "DISCOVERY",
    Attestation = "ATTESTATION",
    Intoto = "INTOTO",
    Sbom = "SBOM",
    SpdxPackage = "SPDX_PACKAGE",
    SpdxFile = "SPDX_FILE",
    SpdxRelationship = "SPDX_RELATIONSHIP"
}
/**
 * A type of analysis that can be done for a resource.
**/
export declare class Note extends SpeakeasyBase {
    attestationAuthority?: Authority;
    baseImage?: Basis;
    build?: Build;
    createTime?: string;
    deployable?: Deployable;
    discovery?: Discovery;
    expirationTime?: string;
    intoto?: InToto;
    kind?: NoteKindEnum;
    longDescription?: string;
    name?: string;
    package?: Package;
    relatedNoteNames?: string[];
    relatedUrl?: RelatedUrl[];
    sbom?: DocumentNote;
    shortDescription?: string;
    spdxFile?: FileNote;
    spdxPackage?: PackageInfoNote;
    spdxRelationship?: RelationshipNote;
    updateTime?: string;
    vulnerability?: Vulnerability;
}
