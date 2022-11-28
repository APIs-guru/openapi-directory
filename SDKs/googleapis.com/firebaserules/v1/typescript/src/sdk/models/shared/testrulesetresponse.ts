import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Issue } from "./issue";
import { TestResult } from "./testresult";



// TestRulesetResponse
/** 
 * The response for FirebaseRulesService.TestRuleset.
**/
export class TestRulesetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issues", elemType: Issue })
  issues?: Issue[];

  @SpeakeasyMetadata({ data: "json, name=testResults", elemType: TestResult })
  testResults?: TestResult[];
}
