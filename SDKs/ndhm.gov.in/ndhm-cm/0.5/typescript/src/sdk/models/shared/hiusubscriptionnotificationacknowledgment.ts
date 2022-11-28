import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export enum HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum {
    Ok = "OK"
}


export class HiuSubscriptionNotificationAcknowledgmentAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: HiuSubscriptionNotificationAcknowledgmentAcknowledgementStatusEnum;
}


export class HiuSubscriptionNotificationAcknowledgment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgement" })
  acknowledgement?: HiuSubscriptionNotificationAcknowledgmentAcknowledgement;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
