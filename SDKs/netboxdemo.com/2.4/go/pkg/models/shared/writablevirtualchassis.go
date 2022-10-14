package shared

type WritableVirtualChassis struct {
	Domain *string  `json:"domain,omitempty"`
	ID     *int64   `json:"id,omitempty"`
	Master int64    `json:"master"`
	Tags   []string `json:"tags,omitempty"`
}
