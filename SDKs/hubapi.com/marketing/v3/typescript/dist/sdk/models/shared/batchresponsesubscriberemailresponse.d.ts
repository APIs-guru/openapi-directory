import { SpeakeasyBase } from "../../../internal/utils";
import { StandardError } from "./standarderror";
import { SubscriberEmailResponse } from "./subscriberemailresponse";
export declare enum BatchResponseSubscriberEmailResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
export declare class BatchResponseSubscriberEmailResponse extends SpeakeasyBase {
    completedAt: Date;
    errors?: StandardError[];
    links?: Map<string, string>;
    numErrors?: number;
    requestedAt?: Date;
    results: SubscriberEmailResponse[];
    startedAt: Date;
    status: BatchResponseSubscriberEmailResponseStatusEnum;
}
