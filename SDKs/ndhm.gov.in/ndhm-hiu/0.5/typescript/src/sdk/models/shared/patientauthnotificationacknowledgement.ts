import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";

export enum PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum {
    Ok = "OK"
}


export class PatientAuthNotificationAcknowledgementAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum;
}


export class PatientAuthNotificationAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgement" })
  acknowledgement?: PatientAuthNotificationAcknowledgementAcknowledgement;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
