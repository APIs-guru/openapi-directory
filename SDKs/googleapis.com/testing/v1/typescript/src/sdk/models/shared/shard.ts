import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestTargetsForShard } from "./testtargetsforshard";


// Shard
/** 
 * Output only. Details about the shard.
**/
export class Shard extends SpeakeasyBase {
  @Metadata({ data: "json, name=numShards" })
  numShards?: number;

  @Metadata({ data: "json, name=shardIndex" })
  shardIndex?: number;

  @Metadata({ data: "json, name=testTargetsForShard" })
  testTargetsForShard?: TestTargetsForShard;
}
