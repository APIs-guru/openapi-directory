package shared

type NestedVirtualChassis struct {
	ID          *int64       `json:"id"`
	Master      NestedDevice `json:"master"`
	MemberCount *int64       `json:"member_count"`
	URL         *string      `json:"url"`
}
