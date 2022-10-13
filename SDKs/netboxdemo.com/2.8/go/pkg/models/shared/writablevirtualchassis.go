package shared

type WritableVirtualChassis struct {
	Domain      *string  `json:"domain"`
	ID          *int64   `json:"id"`
	Master      int64    `json:"master"`
	MemberCount *int64   `json:"member_count"`
	Tags        []string `json:"tags"`
}
