import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestCaseReference
/** 
 * A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.
**/
export class TestCaseReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=className" })
  className?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testSuiteName" })
  testSuiteName?: string;
}
