import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { ConsentStatusEnum } from "./consentstatusenum";


export class HipConsentNotificationNotificationConsentDetailCareContexts extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @Metadata({ data: "json, name=patientReference" })
  patientReference: string;
}


export class HipConsentNotificationNotificationConsentDetailConsentManager extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class HipConsentNotificationNotificationConsentDetailHip extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class HipConsentNotificationNotificationConsentDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContexts", elemType: shared.HipConsentNotificationNotificationConsentDetailCareContexts })
  careContexts: HipConsentNotificationNotificationConsentDetailCareContexts[];

  @Metadata({ data: "json, name=consentId" })
  consentId: string;

  @Metadata({ data: "json, name=consentManager" })
  consentManager: HipConsentNotificationNotificationConsentDetailConsentManager;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=hiTypes" })
  hiTypes: HiTypeEnumEnum[];

  @Metadata({ data: "json, name=hip" })
  hip: HipConsentNotificationNotificationConsentDetailHip;

  @Metadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;

  @Metadata({ data: "json, name=permission" })
  permission: Permission;

  @Metadata({ data: "json, name=purpose" })
  purpose: UsePurpose;

  @Metadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}


export class HipConsentNotificationNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentDetail" })
  consentDetail: HipConsentNotificationNotificationConsentDetail;

  @Metadata({ data: "json, name=consentId" })
  consentId: string;

  @Metadata({ data: "json, name=signature" })
  signature: string;

  @Metadata({ data: "json, name=status" })
  status: ConsentStatusEnum;
}


export class HipConsentNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=notification" })
  notification: HipConsentNotificationNotification;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
