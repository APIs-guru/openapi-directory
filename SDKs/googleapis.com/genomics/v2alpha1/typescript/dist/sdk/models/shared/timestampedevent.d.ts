import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event that occured in the operation assigned to the worker and the time of occurance.
**/
export declare class TimestampedEvent extends SpeakeasyBase {
    data?: Map<string, any>;
    timestamp?: string;
}
