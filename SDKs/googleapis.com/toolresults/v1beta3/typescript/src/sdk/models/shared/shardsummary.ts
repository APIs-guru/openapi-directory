import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MergedResult } from "./mergedresult";


// ShardSummary
/** 
 * Result summary for a shard in an environment.
**/
export class ShardSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=runs" })
  runs?: Map<string, any>[];

  @Metadata({ data: "json, name=shardResult" })
  shardResult?: MergedResult;
}
