import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestIssue } from "./testissue";
import { TestSuiteOverview } from "./testsuiteoverview";
import { TestTiming } from "./testtiming";
import { ToolExecution } from "./toolexecution";


// TestExecutionStep
/** 
 * A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
**/
export class TestExecutionStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=testIssues", elemType: shared.TestIssue })
  testIssues?: TestIssue[];

  @Metadata({ data: "json, name=testSuiteOverviews", elemType: shared.TestSuiteOverview })
  testSuiteOverviews?: TestSuiteOverview[];

  @Metadata({ data: "json, name=testTiming" })
  testTiming?: TestTiming;

  @Metadata({ data: "json, name=toolExecution" })
  toolExecution?: ToolExecution;
}
