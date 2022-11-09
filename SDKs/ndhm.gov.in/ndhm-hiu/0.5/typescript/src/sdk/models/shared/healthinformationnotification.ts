import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum HealthInformationNotificationNotificationNotifierTypeEnum {
    Hiu = "HIU"
,    Hip = "HIP"
}


export class HealthInformationNotificationNotificationNotifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: HealthInformationNotificationNotificationNotifierTypeEnum;
}

export enum HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum {
    Transferred = "TRANSFERRED"
,    Failed = "FAILED"
}

export enum HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum {
    Delivered = "DELIVERED"
,    Ok = "OK"
,    Errored = "ERRORED"
}


export class HealthInformationNotificationNotificationStatusNotificationStatusResponses extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hiStatus" })
  hiStatus: HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;
}


export class HealthInformationNotificationNotificationStatusNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=hipId" })
  hipId: string;

  @Metadata({ data: "json, name=sessionStatus" })
  sessionStatus: HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;

  @Metadata({ data: "json, name=statusResponses", elemType: shared.HealthInformationNotificationNotificationStatusNotificationStatusResponses })
  statusResponses?: HealthInformationNotificationNotificationStatusNotificationStatusResponses[];
}


export class HealthInformationNotificationNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentId" })
  consentId: string;

  @Metadata({ data: "json, name=doneAt" })
  doneAt: Date;

  @Metadata({ data: "json, name=notifier" })
  notifier: HealthInformationNotificationNotificationNotifier;

  @Metadata({ data: "json, name=statusNotification" })
  statusNotification: HealthInformationNotificationNotificationStatusNotification;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class HealthInformationNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=notification" })
  notification: HealthInformationNotificationNotification;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
