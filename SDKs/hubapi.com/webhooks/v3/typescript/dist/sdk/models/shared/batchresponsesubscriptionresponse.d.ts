import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionResponse } from "./subscriptionresponse";
export declare enum BatchResponseSubscriptionResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
export declare class BatchResponseSubscriptionResponse extends SpeakeasyBase {
    completedAt: Date;
    links?: Map<string, string>;
    requestedAt?: Date;
    results: SubscriptionResponse[];
    startedAt: Date;
    status: BatchResponseSubscriptionResponseStatusEnum;
}
