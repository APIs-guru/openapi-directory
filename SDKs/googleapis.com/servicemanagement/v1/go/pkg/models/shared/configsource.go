package shared

type ConfigSource struct {
	Files []ConfigFile `json:"files,omitempty"`
	ID    *string      `json:"id,omitempty"`
}
