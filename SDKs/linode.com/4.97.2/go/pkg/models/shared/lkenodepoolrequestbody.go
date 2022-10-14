package shared

type LkeNodePoolRequestBody struct {
	Count *int64   `json:"count,omitempty"`
	Disks []Items  `json:"disks,omitempty"`
	Tags  []string `json:"tags,omitempty"`
	Type  *string  `json:"type,omitempty"`
}
