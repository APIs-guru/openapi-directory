import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
import { HiuSubscription } from "./hiusubscription";



export class SubscriptionApprovalNotificationNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: SubscriptionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: HiuSubscription;

  @SpeakeasyMetadata({ data: "json, name=subscriptionRequestId" })
  subscriptionRequestId?: string;
}


export class SubscriptionApprovalNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification: SubscriptionApprovalNotificationNotification;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
