package shared

type Identity struct {
	Email      *string `json:"email,omitempty"`
	Name       *string `json:"name,omitempty"`
	Source     string  `json:"source"`
	SourceHost *string `json:"source_host,omitempty"`
	UID        *string `json:"uid,omitempty"`
	URL        *string `json:"url,omitempty"`
	Username   *string `json:"username,omitempty"`
}
