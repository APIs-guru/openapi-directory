package shared

// SideInputInfo
// Information about a side input of a DoFn or an input of a SeqDoFn.
type SideInputInfo struct {
	Kind    map[string]interface{} `json:"kind,omitempty"`
	Sources []Source               `json:"sources,omitempty"`
	Tag     *string                `json:"tag,omitempty"`
}
