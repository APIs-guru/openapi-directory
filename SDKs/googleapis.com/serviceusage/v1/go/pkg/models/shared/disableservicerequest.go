package shared

type DisableServiceRequestCheckIfServiceHasUsageEnum string

const (
	DisableServiceRequestCheckIfServiceHasUsageEnumCheckIfServiceHasUsageUnspecified DisableServiceRequestCheckIfServiceHasUsageEnum = "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED"
	DisableServiceRequestCheckIfServiceHasUsageEnumSkip                              DisableServiceRequestCheckIfServiceHasUsageEnum = "SKIP"
	DisableServiceRequestCheckIfServiceHasUsageEnumCheck                             DisableServiceRequestCheckIfServiceHasUsageEnum = "CHECK"
)

// DisableServiceRequest
// Request message for the `DisableService` method.
type DisableServiceRequest struct {
	CheckIfServiceHasUsage   *DisableServiceRequestCheckIfServiceHasUsageEnum `json:"checkIfServiceHasUsage,omitempty"`
	DisableDependentServices *bool                                            `json:"disableDependentServices,omitempty"`
}
