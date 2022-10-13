package shared

type MediaPathDto struct {
	Name     string         `json:"Name"`
	Path     *string        `json:"Path"`
	PathInfo *MediaPathInfo `json:"PathInfo"`
}
