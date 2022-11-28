package shared

// TestCaseReference
// A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.
type TestCaseReference struct {
	ClassName     *string `json:"className,omitempty"`
	Name          *string `json:"name,omitempty"`
	TestSuiteName *string `json:"testSuiteName,omitempty"`
}
