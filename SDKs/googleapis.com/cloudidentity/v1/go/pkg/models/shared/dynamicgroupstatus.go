package shared

type DynamicGroupStatusStatusEnum string

const (
	DynamicGroupStatusStatusEnumStatusUnspecified   DynamicGroupStatusStatusEnum = "STATUS_UNSPECIFIED"
	DynamicGroupStatusStatusEnumUpToDate            DynamicGroupStatusStatusEnum = "UP_TO_DATE"
	DynamicGroupStatusStatusEnumUpdatingMemberships DynamicGroupStatusStatusEnum = "UPDATING_MEMBERSHIPS"
	DynamicGroupStatusStatusEnumInvalidQuery        DynamicGroupStatusStatusEnum = "INVALID_QUERY"
)

// DynamicGroupStatus
// The current status of a dynamic group along with timestamp.
type DynamicGroupStatus struct {
	Status     *DynamicGroupStatusStatusEnum `json:"status,omitempty"`
	StatusTime *string                       `json:"statusTime,omitempty"`
}
