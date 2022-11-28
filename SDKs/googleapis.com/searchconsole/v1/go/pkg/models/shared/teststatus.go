package shared

type TestStatusStatusEnum string

const (
	TestStatusStatusEnumTestStatusUnspecified TestStatusStatusEnum = "TEST_STATUS_UNSPECIFIED"
	TestStatusStatusEnumComplete              TestStatusStatusEnum = "COMPLETE"
	TestStatusStatusEnumInternalError         TestStatusStatusEnum = "INTERNAL_ERROR"
	TestStatusStatusEnumPageUnreachable       TestStatusStatusEnum = "PAGE_UNREACHABLE"
)

// TestStatus
// Final state of the test, including error details if necessary.
type TestStatus struct {
	Details *string               `json:"details,omitempty"`
	Status  *TestStatusStatusEnum `json:"status,omitempty"`
}
