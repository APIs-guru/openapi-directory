package shared

type Tier struct {
	DiskQuota *string  `json:"DiskQuota"`
	RAM       *string  `json:"RAM"`
	Kind      *string  `json:"kind"`
	Region    []string `json:"region"`
	Tier      *string  `json:"tier"`
}
