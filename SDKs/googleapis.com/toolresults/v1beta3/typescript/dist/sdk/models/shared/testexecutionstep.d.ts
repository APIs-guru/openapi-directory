import { SpeakeasyBase } from "../../../internal/utils";
import { TestIssue } from "./testissue";
import { TestSuiteOverview } from "./testsuiteoverview";
import { TestTiming } from "./testtiming";
import { ToolExecution } from "./toolexecution";
/**
 * A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
**/
export declare class TestExecutionStep extends SpeakeasyBase {
    testIssues?: TestIssue[];
    testSuiteOverviews?: TestSuiteOverview[];
    testTiming?: TestTiming;
    toolExecution?: ToolExecution;
}
