import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestTargetsForShard } from "./testtargetsforshard";


// ManualSharding
/** 
 * Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
**/
export class ManualSharding extends SpeakeasyBase {
  @Metadata({ data: "json, name=testTargetsForShard", elemType: shared.TestTargetsForShard })
  testTargetsForShard?: TestTargetsForShard[];
}
