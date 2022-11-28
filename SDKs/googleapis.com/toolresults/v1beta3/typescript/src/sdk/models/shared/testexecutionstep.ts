import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestIssue } from "./testissue";
import { TestSuiteOverview } from "./testsuiteoverview";
import { TestTiming } from "./testtiming";
import { ToolExecution } from "./toolexecution";



// TestExecutionStep
/** 
 * A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.
**/
export class TestExecutionStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testIssues", elemType: TestIssue })
  testIssues?: TestIssue[];

  @SpeakeasyMetadata({ data: "json, name=testSuiteOverviews", elemType: TestSuiteOverview })
  testSuiteOverviews?: TestSuiteOverview[];

  @SpeakeasyMetadata({ data: "json, name=testTiming" })
  testTiming?: TestTiming;

  @SpeakeasyMetadata({ data: "json, name=toolExecution" })
  toolExecution?: ToolExecution;
}
