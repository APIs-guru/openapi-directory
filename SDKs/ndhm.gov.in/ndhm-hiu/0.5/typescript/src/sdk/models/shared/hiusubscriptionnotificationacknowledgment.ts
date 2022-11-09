import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";

export enum HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum {
    Ok = "OK"
}


export class HiuSubscriptionNotificationAcknowledgmentAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventId" })
  eventId: string;

  @Metadata({ data: "json, name=status" })
  status: HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum;
}


export class HiuSubscriptionNotificationAcknowledgment extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgement" })
  acknowledgement?: HiuSubscriptionNotificationAcknowledgmentAcknowledgement;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
