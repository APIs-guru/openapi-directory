package shared

type LkeNodePoolRequestBody struct {
	Count *int64   `json:"count"`
	Disks []Items  `json:"disks"`
	Tags  []string `json:"tags"`
	Type  *string  `json:"type"`
}
