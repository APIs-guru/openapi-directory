import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";
import { TestSuite } from "./testsuite";


// TestRulesetRequest
/** 
 * The request for FirebaseRulesService.TestRuleset.
**/
export class TestRulesetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=testSuite" })
  testSuite?: TestSuite;
}
