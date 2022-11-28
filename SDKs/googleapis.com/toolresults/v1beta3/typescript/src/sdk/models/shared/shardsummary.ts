import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MergedResult } from "./mergedresult";



// ShardSummary
/** 
 * Result summary for a shard in an environment.
**/
export class ShardSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runs" })
  runs?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=shardResult" })
  shardResult?: MergedResult;
}
