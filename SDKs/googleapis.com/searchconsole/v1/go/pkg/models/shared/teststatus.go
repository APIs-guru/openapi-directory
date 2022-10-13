package shared

type TestStatusStatusEnum string

const (
	TestStatusStatusEnumTestStatusUnspecified TestStatusStatusEnum = "TEST_STATUS_UNSPECIFIED"
	TestStatusStatusEnumComplete              TestStatusStatusEnum = "COMPLETE"
	TestStatusStatusEnumInternalError         TestStatusStatusEnum = "INTERNAL_ERROR"
	TestStatusStatusEnumPageUnreachable       TestStatusStatusEnum = "PAGE_UNREACHABLE"
)

type TestStatus struct {
	Details *string               `json:"details"`
	Status  *TestStatusStatusEnum `json:"status"`
}
