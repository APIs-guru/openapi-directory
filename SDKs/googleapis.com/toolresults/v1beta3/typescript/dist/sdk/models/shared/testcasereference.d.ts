import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.
**/
export declare class TestCaseReference extends SpeakeasyBase {
    className?: string;
    name?: string;
    testSuiteName?: string;
}
