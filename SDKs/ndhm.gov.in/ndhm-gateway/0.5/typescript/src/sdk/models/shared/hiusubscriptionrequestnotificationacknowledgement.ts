import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";

export enum HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum {
    Ok = "OK"
}


export class HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum;

  @Metadata({ data: "json, name=subscriptionRequestId" })
  subscriptionRequestId: string;
}


export class HiuSubscriptionRequestNotificationAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgement" })
  acknowledgement?: HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
