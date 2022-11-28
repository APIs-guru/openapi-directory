import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export enum HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum {
    Ok = "OK"
}


export class HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: HiuSubscriptionRequestNotificationAcknowledgementAcknowledgementStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionRequestId" })
  subscriptionRequestId: string;
}


export class HiuSubscriptionRequestNotificationAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgement" })
  acknowledgement?: HiuSubscriptionRequestNotificationAcknowledgementAcknowledgement;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
