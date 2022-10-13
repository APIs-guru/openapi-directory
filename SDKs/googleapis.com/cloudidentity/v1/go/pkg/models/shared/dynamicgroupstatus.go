package shared

type DynamicGroupStatusStatusEnum string

const (
	DynamicGroupStatusStatusEnumStatusUnspecified   DynamicGroupStatusStatusEnum = "STATUS_UNSPECIFIED"
	DynamicGroupStatusStatusEnumUpToDate            DynamicGroupStatusStatusEnum = "UP_TO_DATE"
	DynamicGroupStatusStatusEnumUpdatingMemberships DynamicGroupStatusStatusEnum = "UPDATING_MEMBERSHIPS"
	DynamicGroupStatusStatusEnumInvalidQuery        DynamicGroupStatusStatusEnum = "INVALID_QUERY"
)

type DynamicGroupStatus struct {
	Status     *DynamicGroupStatusStatusEnum `json:"status"`
	StatusTime *string                       `json:"statusTime"`
}
