package shared

type WritableVirtualChassisInput struct {
	Domain *string  `json:"domain,omitempty"`
	Master int64    `json:"master"`
	Tags   []string `json:"tags,omitempty"`
}
