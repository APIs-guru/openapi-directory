import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestCaseReference
/** 
 * A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.
**/
export class TestCaseReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=className" })
  className?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=testSuiteName" })
  testSuiteName?: string;
}
