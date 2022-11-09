import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardError } from "./standarderror";
import { SubscriptionResponse } from "./subscriptionresponse";
export declare enum BatchResponseSubscriptionResponseWithErrorsStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
export declare class BatchResponseSubscriptionResponseWithErrors extends SpeakeasyBase {
    completedAt: Date;
    errors?: StandardError[];
    links?: Map<string, string>;
    numErrors?: number;
    requestedAt?: Date;
    results: SubscriptionResponse[];
    startedAt: Date;
    status: BatchResponseSubscriptionResponseWithErrorsStatusEnum;
}
