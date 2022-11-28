import { SpeakeasyBase } from "../../../internal/utils";
import { StandardError } from "./standarderror";
import { MarketingEventPublicDefaultResponse } from "./marketingeventpublicdefaultresponse";
export declare enum BatchResponseMarketingEventPublicDefaultResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
export declare class BatchResponseMarketingEventPublicDefaultResponse extends SpeakeasyBase {
    completedAt: Date;
    errors?: StandardError[];
    links?: Map<string, string>;
    numErrors?: number;
    requestedAt?: Date;
    results: MarketingEventPublicDefaultResponse[];
    startedAt: Date;
    status: BatchResponseMarketingEventPublicDefaultResponseStatusEnum;
}
