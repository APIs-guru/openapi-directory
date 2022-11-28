import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { Requester } from "./requester";
import { ConsentStatusEnum } from "./consentstatusenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";



export class ConsentArtefactResponseConsentConsentDetailCareContexts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @SpeakeasyMetadata({ data: "json, name=patientReference" })
  patientReference: string;
}


export class ConsentArtefactResponseConsentConsentDetailConsentManager extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class ConsentArtefactResponseConsentConsentDetailHip extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class ConsentArtefactResponseConsentConsentDetailHiu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class ConsentArtefactResponseConsentConsentDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContexts", elemType: ConsentArtefactResponseConsentConsentDetailCareContexts })
  careContexts: ConsentArtefactResponseConsentConsentDetailCareContexts[];

  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=consentManager" })
  consentManager: ConsentArtefactResponseConsentConsentDetailConsentManager;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=hiTypes" })
  hiTypes: HiTypeEnumEnum[];

  @SpeakeasyMetadata({ data: "json, name=hip" })
  hip: ConsentArtefactResponseConsentConsentDetailHip;

  @SpeakeasyMetadata({ data: "json, name=hiu" })
  hiu: ConsentArtefactResponseConsentConsentDetailHiu;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission: Permission;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: UsePurpose;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester?: Requester;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}


export class ConsentArtefactResponseConsent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentDetail" })
  consentDetail: ConsentArtefactResponseConsentConsentDetail;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ConsentStatusEnum;
}


export class ConsentArtefactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consent" })
  consent?: ConsentArtefactResponseConsent;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
