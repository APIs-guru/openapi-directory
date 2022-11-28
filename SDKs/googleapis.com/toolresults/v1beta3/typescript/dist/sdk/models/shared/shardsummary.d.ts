import { SpeakeasyBase } from "../../../internal/utils";
import { MergedResult } from "./mergedresult";
/**
 * Result summary for a shard in an environment.
**/
export declare class ShardSummary extends SpeakeasyBase {
    runs?: Map<string, any>[];
    shardResult?: MergedResult;
}
