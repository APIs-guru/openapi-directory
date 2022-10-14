package shared

type Pipe struct {
	Mode *int64  `json:"mode,omitempty"`
	Path *string `json:"path,omitempty"`
}
