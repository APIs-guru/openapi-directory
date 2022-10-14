package shared

type NestedVirtualChassis struct {
	ID          *int64       `json:"id,omitempty"`
	Master      NestedDevice `json:"master"`
	MemberCount *int64       `json:"member_count,omitempty"`
	URL         *string      `json:"url,omitempty"`
}
