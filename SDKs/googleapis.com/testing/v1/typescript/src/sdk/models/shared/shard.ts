import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestTargetsForShard } from "./testtargetsforshard";



// Shard
/** 
 * Output only. Details about the shard.
**/
export class Shard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numShards" })
  numShards?: number;

  @SpeakeasyMetadata({ data: "json, name=shardIndex" })
  shardIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=testTargetsForShard" })
  testTargetsForShard?: TestTargetsForShard;
}
