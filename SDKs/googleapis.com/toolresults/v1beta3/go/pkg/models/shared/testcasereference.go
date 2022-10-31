package shared

type TestCaseReference struct {
	ClassName     *string `json:"className,omitempty"`
	Name          *string `json:"name,omitempty"`
	TestSuiteName *string `json:"testSuiteName,omitempty"`
}
