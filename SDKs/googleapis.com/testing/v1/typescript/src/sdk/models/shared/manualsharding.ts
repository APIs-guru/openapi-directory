import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestTargetsForShard } from "./testtargetsforshard";



// ManualSharding
/** 
 * Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
**/
export class ManualSharding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testTargetsForShard", elemType: TestTargetsForShard })
  testTargetsForShard?: TestTargetsForShard[];
}
