import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestTargetsForShard
/** 
 * Test targets for a shard.
**/
export class TestTargetsForShard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testTargets" })
  testTargets?: string[];
}
