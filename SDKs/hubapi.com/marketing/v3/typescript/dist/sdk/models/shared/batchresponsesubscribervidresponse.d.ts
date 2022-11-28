import { SpeakeasyBase } from "../../../internal/utils";
import { StandardError } from "./standarderror";
import { SubscriberVidResponse } from "./subscribervidresponse";
export declare enum BatchResponseSubscriberVidResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
export declare class BatchResponseSubscriberVidResponse extends SpeakeasyBase {
    completedAt: Date;
    errors?: StandardError[];
    links?: Map<string, string>;
    numErrors?: number;
    requestedAt?: Date;
    results: SubscriberVidResponse[];
    startedAt: Date;
    status: BatchResponseSubscriberVidResponseStatusEnum;
}
