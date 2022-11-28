import { SpeakeasyBase } from "../../../internal/utils";
import { TestTargetsForShard } from "./testtargetsforshard";
/**
 * Shards test cases into the specified groups of packages, classes, and/or methods. With manual sharding enabled, specifying test targets via environment_variables or in InstrumentationTest is invalid.
**/
export declare class ManualSharding extends SpeakeasyBase {
    testTargetsForShard?: TestTargetsForShard[];
}
