package shared

type WritableVirtualChassis struct {
	Domain *string  `json:"domain"`
	ID     *int64   `json:"id"`
	Master int64    `json:"master"`
	Tags   []string `json:"tags"`
}
