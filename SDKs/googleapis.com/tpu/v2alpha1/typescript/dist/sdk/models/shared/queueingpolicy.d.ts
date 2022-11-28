import { SpeakeasyBase } from "../../../internal/utils";
import { Interval } from "./interval";
/**
 * Defines the policy of the QueuedRequest.
**/
export declare class QueueingPolicy extends SpeakeasyBase {
    validAfterDuration?: string;
    validAfterTime?: string;
    validInterval?: Interval;
    validUntilDuration?: string;
    validUntilTime?: string;
}
