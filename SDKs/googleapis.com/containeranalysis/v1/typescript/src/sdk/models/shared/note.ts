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


export enum NoteKindEnum {
    NoteKindUnspecified = "NOTE_KIND_UNSPECIFIED",
    Vulnerability = "VULNERABILITY",
    Build = "BUILD",
    Image = "IMAGE",
    Package = "PACKAGE",
    Deployment = "DEPLOYMENT",
    Discovery = "DISCOVERY",
    Attestation = "ATTESTATION",
    Upgrade = "UPGRADE",
    Compliance = "COMPLIANCE",
    DsseAttestation = "DSSE_ATTESTATION"
}


// Note
/** 
 * A type of analysis that can be done for a resource.
**/
export class Note extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attestation" })
  attestation?: AttestationNote;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: BuildNote;

  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance?: ComplianceNote;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: DeploymentNote;

  @SpeakeasyMetadata({ data: "json, name=discovery" })
  discovery?: DiscoveryNote;

  @SpeakeasyMetadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationNote;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageNote;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: NoteKindEnum;

  @SpeakeasyMetadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: PackageNote;

  @SpeakeasyMetadata({ data: "json, name=relatedNoteNames" })
  relatedNoteNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=relatedUrl", elemType: RelatedUrl })
  relatedUrl?: RelatedUrl[];

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeNote;

  @SpeakeasyMetadata({ data: "json, name=vulnerability" })
  vulnerability?: VulnerabilityNote;
}
