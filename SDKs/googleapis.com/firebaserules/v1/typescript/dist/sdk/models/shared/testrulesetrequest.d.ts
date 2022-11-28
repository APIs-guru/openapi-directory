import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { TestSuite } from "./testsuite";
/**
 * The request for FirebaseRulesService.TestRuleset.
**/
export declare class TestRulesetRequest extends SpeakeasyBase {
    source?: Source;
    testSuite?: TestSuite;
}
