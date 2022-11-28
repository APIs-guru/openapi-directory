import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { HiuSubscriptionEventContent } from "./hiusubscriptioneventcontent";
export declare class HiuSubscriptionNotificationEvent extends SpeakeasyBase {
    category: SubscriptionCategoryEnum;
    content: HiuSubscriptionEventContent;
    id: string;
    published: Date;
    subscriptionId: string;
}
export declare class HiuSubscriptionNotification extends SpeakeasyBase {
    event: HiuSubscriptionNotificationEvent;
    requestId: string;
    timestamp: Date;
}
