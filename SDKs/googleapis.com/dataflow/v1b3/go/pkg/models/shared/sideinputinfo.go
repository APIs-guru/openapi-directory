package shared

type SideInputInfo struct {
	Kind    map[string]interface{} `json:"kind"`
	Sources []Source               `json:"sources"`
	Tag     *string                `json:"tag"`
}
