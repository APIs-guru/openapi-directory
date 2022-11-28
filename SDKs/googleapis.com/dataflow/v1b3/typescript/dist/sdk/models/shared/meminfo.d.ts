import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the memory usage of a worker or a container within a worker.
**/
export declare class MemInfo extends SpeakeasyBase {
    currentLimitBytes?: string;
    currentOoms?: string;
    currentRssBytes?: string;
    timestamp?: string;
    totalGbMs?: string;
}
