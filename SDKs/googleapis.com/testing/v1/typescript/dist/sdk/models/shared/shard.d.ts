import { SpeakeasyBase } from "../../../internal/utils";
import { TestTargetsForShard } from "./testtargetsforshard";
/**
 * Output only. Details about the shard.
**/
export declare class Shard extends SpeakeasyBase {
    numShards?: number;
    shardIndex?: number;
    testTargetsForShard?: TestTargetsForShard;
}
