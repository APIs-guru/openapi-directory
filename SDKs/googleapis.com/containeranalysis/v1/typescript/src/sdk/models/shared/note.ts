import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
    NoteKindUnspecified = "NOTE_KIND_UNSPECIFIED"
,    Vulnerability = "VULNERABILITY"
,    Build = "BUILD"
,    Image = "IMAGE"
,    Package = "PACKAGE"
,    Deployment = "DEPLOYMENT"
,    Discovery = "DISCOVERY"
,    Attestation = "ATTESTATION"
,    Upgrade = "UPGRADE"
,    Compliance = "COMPLIANCE"
,    DsseAttestation = "DSSE_ATTESTATION"
}


// Note
/** 
 * A type of analysis that can be done for a resource.
**/
export class Note extends SpeakeasyBase {
  @Metadata({ data: "json, name=attestation" })
  attestation?: AttestationNote;

  @Metadata({ data: "json, name=build" })
  build?: BuildNote;

  @Metadata({ data: "json, name=compliance" })
  compliance?: ComplianceNote;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deployment" })
  deployment?: DeploymentNote;

  @Metadata({ data: "json, name=discovery" })
  discovery?: DiscoveryNote;

  @Metadata({ data: "json, name=dsseAttestation" })
  dsseAttestation?: DsseAttestationNote;

  @Metadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @Metadata({ data: "json, name=image" })
  image?: ImageNote;

  @Metadata({ data: "json, name=kind" })
  kind?: NoteKindEnum;

  @Metadata({ data: "json, name=longDescription" })
  longDescription?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=package" })
  package?: PackageNote;

  @Metadata({ data: "json, name=relatedNoteNames" })
  relatedNoteNames?: string[];

  @Metadata({ data: "json, name=relatedUrl", elemType: shared.RelatedUrl })
  relatedUrl?: RelatedUrl[];

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upgrade" })
  upgrade?: UpgradeNote;

  @Metadata({ data: "json, name=vulnerability" })
  vulnerability?: VulnerabilityNote;
}
