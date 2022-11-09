import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
import { HiuSubscription } from "./hiusubscription";


export class SubscriptionApprovalNotificationNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: SubscriptionStatusEnum;

  @Metadata({ data: "json, name=subscription" })
  subscription?: HiuSubscription;

  @Metadata({ data: "json, name=subscriptionRequestId" })
  subscriptionRequestId?: string;
}


export class SubscriptionApprovalNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=notification" })
  notification: SubscriptionApprovalNotificationNotification;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
