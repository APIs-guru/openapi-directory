import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestCase } from "./testcase";



// TestSuite
/** 
 * `TestSuite` is a collection of `TestCase` instances that validate the logical correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within a `TestRuleset` invocation or as part of a `Release` object as a pre-release check.
**/
export class TestSuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testCases", elemType: TestCase })
  testCases?: TestCase[];
}
