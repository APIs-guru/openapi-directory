import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Issue } from "./issue";
import { TestResult } from "./testresult";


// TestRulesetResponse
/** 
 * The response for FirebaseRulesService.TestRuleset.
**/
export class TestRulesetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=issues", elemType: shared.Issue })
  issues?: Issue[];

  @Metadata({ data: "json, name=testResults", elemType: shared.TestResult })
  testResults?: TestResult[];
}
