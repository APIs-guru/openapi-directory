package shared

type VirtualChassis struct {
	Domain *string      `json:"domain"`
	ID     *int64       `json:"id"`
	Master NestedDevice `json:"master"`
	Tags   []string     `json:"tags"`
}
