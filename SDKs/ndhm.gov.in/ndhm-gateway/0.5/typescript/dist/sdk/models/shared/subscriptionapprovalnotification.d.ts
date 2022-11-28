import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionStatusEnum } from "./subscriptionstatusenum";
import { HiuSubscription } from "./hiusubscription";
export declare class SubscriptionApprovalNotificationNotification extends SpeakeasyBase {
    status: SubscriptionStatusEnum;
    subscription?: HiuSubscription;
    subscriptionRequestId?: string;
}
export declare class SubscriptionApprovalNotification extends SpeakeasyBase {
    notification: SubscriptionApprovalNotificationNotification;
    requestId: string;
    timestamp: Date;
}
