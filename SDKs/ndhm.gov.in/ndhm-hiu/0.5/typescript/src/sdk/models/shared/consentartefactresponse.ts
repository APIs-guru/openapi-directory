import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { Requester } from "./requester";
import { ConsentStatusEnum } from "./consentstatusenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export class ConsentArtefactResponseConsentConsentDetailCareContexts extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @Metadata({ data: "json, name=patientReference" })
  patientReference: string;
}


export class ConsentArtefactResponseConsentConsentDetailConsentManager extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ConsentArtefactResponseConsentConsentDetailHip extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ConsentArtefactResponseConsentConsentDetailHiu extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ConsentArtefactResponseConsentConsentDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContexts", elemType: shared.ConsentArtefactResponseConsentConsentDetailCareContexts })
  careContexts: ConsentArtefactResponseConsentConsentDetailCareContexts[];

  @Metadata({ data: "json, name=consentId" })
  consentId: string;

  @Metadata({ data: "json, name=consentManager" })
  consentManager: ConsentArtefactResponseConsentConsentDetailConsentManager;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=hiTypes" })
  hiTypes: HiTypeEnumEnum[];

  @Metadata({ data: "json, name=hip" })
  hip: ConsentArtefactResponseConsentConsentDetailHip;

  @Metadata({ data: "json, name=hiu" })
  hiu: ConsentArtefactResponseConsentConsentDetailHiu;

  @Metadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;

  @Metadata({ data: "json, name=permission" })
  permission: Permission;

  @Metadata({ data: "json, name=purpose" })
  purpose: UsePurpose;

  @Metadata({ data: "json, name=requester" })
  requester: Requester;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}


export class ConsentArtefactResponseConsent extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentDetail" })
  consentDetail: ConsentArtefactResponseConsentConsentDetail;

  @Metadata({ data: "json, name=signature" })
  signature: string;

  @Metadata({ data: "json, name=status" })
  status: ConsentStatusEnum;
}


export class ConsentArtefactResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consent" })
  consent?: ConsentArtefactResponseConsent;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
