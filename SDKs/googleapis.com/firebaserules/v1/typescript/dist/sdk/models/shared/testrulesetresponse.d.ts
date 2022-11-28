import { SpeakeasyBase } from "../../../internal/utils";
import { Issue } from "./issue";
import { TestResult } from "./testresult";
/**
 * The response for FirebaseRulesService.TestRuleset.
**/
export declare class TestRulesetResponse extends SpeakeasyBase {
    issues?: Issue[];
    testResults?: TestResult[];
}
