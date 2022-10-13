package shared

type TestCaseReference struct {
	ClassName     *string `json:"className"`
	Name          *string `json:"name"`
	TestSuiteName *string `json:"testSuiteName"`
}
