package shared

type SideInputInfo struct {
	Kind    map[string]interface{} `json:"kind,omitempty"`
	Sources []Source               `json:"sources,omitempty"`
	Tag     *string                `json:"tag,omitempty"`
}
