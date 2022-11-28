import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HealthInformationNotificationNotificationNotifierTypeEnum {
    Hiu = "HIU",
    Hip = "HIP"
}


export class HealthInformationNotificationNotificationNotifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: HealthInformationNotificationNotificationNotifierTypeEnum;
}

export enum HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum {
    Transferred = "TRANSFERRED",
    Failed = "FAILED"
}

export enum HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum {
    Delivered = "DELIVERED",
    Ok = "OK",
    Errored = "ERRORED"
}


export class HealthInformationNotificationNotificationStatusNotificationStatusResponses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hiStatus" })
  hiStatus: HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;
}


export class HealthInformationNotificationNotificationStatusNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hipId" })
  hipId: string;

  @SpeakeasyMetadata({ data: "json, name=sessionStatus" })
  sessionStatus: HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusResponses", elemType: HealthInformationNotificationNotificationStatusNotificationStatusResponses })
  statusResponses?: HealthInformationNotificationNotificationStatusNotificationStatusResponses[];
}


export class HealthInformationNotificationNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=doneAt" })
  doneAt: Date;

  @SpeakeasyMetadata({ data: "json, name=notifier" })
  notifier: HealthInformationNotificationNotificationNotifier;

  @SpeakeasyMetadata({ data: "json, name=statusNotification" })
  statusNotification: HealthInformationNotificationNotificationStatusNotification;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class HealthInformationNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification: HealthInformationNotificationNotification;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
