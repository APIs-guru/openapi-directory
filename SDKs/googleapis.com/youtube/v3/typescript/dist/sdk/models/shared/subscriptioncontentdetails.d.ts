import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubscriptionContentDetailsActivityTypeEnum {
    SubscriptionActivityTypeUnspecified = "subscriptionActivityTypeUnspecified",
    All = "all",
    Uploads = "uploads"
}
/**
 * Details about the content to witch a subscription refers.
**/
export declare class SubscriptionContentDetails extends SpeakeasyBase {
    activityType?: SubscriptionContentDetailsActivityTypeEnum;
    newItemCount?: number;
    totalItemCount?: number;
}
