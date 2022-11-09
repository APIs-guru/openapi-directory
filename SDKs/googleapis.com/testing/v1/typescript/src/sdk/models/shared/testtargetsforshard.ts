import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestTargetsForShard
/** 
 * Test targets for a shard.
**/
export class TestTargetsForShard extends SpeakeasyBase {
  @Metadata({ data: "json, name=testTargets" })
  testTargets?: string[];
}
