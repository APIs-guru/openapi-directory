package shared

type Reference struct {
	Source *string `json:"source,omitempty"`
	URI    *string `json:"uri,omitempty"`
}
