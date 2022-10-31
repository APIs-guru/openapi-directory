package shared

type MediaPathDto struct {
	Name     string         `json:"Name"`
	Path     *string        `json:"Path,omitempty"`
	PathInfo *MediaPathInfo `json:"PathInfo,omitempty"`
}
