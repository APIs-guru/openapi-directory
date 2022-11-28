import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
**/
export declare class PubsubLocation extends SpeakeasyBase {
    dropLateData?: boolean;
    idLabel?: string;
    subscription?: string;
    timestampLabel?: string;
    topic?: string;
    trackingSubscription?: string;
    withAttributes?: boolean;
}
