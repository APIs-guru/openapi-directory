import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export enum PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum {
    Ok = "OK"
}


export class PatientAuthNotificationAcknowledgementAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
}


export class PatientAuthNotificationAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgement" })
  acknowledgement?: PatientAuthNotificationAcknowledgementAcknowledgement;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
