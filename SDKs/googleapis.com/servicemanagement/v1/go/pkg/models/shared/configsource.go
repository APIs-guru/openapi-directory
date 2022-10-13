package shared

type ConfigSource struct {
	Files []ConfigFile `json:"files"`
	ID    *string      `json:"id"`
}
