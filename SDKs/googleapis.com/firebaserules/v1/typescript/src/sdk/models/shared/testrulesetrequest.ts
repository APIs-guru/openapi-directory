import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { TestSuite } from "./testsuite";



// TestRulesetRequest
/** 
 * The request for FirebaseRulesService.TestRuleset.
**/
export class TestRulesetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=testSuite" })
  testSuite?: TestSuite;
}
