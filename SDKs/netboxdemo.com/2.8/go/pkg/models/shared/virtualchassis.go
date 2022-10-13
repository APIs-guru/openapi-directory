package shared

type VirtualChassis struct {
	Domain      *string      `json:"domain"`
	ID          *int64       `json:"id"`
	Master      NestedDevice `json:"master"`
	MemberCount *int64       `json:"member_count"`
	Tags        []string     `json:"tags"`
}
