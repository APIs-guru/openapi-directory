import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HiTypeEnumEnum } from "./hitypeenumenum";
import { ConsentManagerPatientId } from "./consentmanagerpatientid";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
import { ConsentStatusEnum } from "./consentstatusenum";



export class HipConsentNotificationNotificationConsentDetailCareContexts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @SpeakeasyMetadata({ data: "json, name=patientReference" })
  patientReference: string;
}


export class HipConsentNotificationNotificationConsentDetailConsentManager extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class HipConsentNotificationNotificationConsentDetailHip extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class HipConsentNotificationNotificationConsentDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContexts", elemType: HipConsentNotificationNotificationConsentDetailCareContexts })
  careContexts: HipConsentNotificationNotificationConsentDetailCareContexts[];

  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=consentManager" })
  consentManager: HipConsentNotificationNotificationConsentDetailConsentManager;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=hiTypes" })
  hiTypes: HiTypeEnumEnum[];

  @SpeakeasyMetadata({ data: "json, name=hip" })
  hip: HipConsentNotificationNotificationConsentDetailHip;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: ConsentManagerPatientId;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission: Permission;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: UsePurpose;

  @SpeakeasyMetadata({ data: "json, name=schemaVersion" })
  schemaVersion?: string;
}


export class HipConsentNotificationNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentDetail" })
  consentDetail: HipConsentNotificationNotificationConsentDetail;

  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ConsentStatusEnum;
}


export class HipConsentNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification: HipConsentNotificationNotification;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
