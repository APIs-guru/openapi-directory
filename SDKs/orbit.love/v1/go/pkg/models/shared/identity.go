package shared

type Identity struct {
	Email      *string `json:"email"`
	Name       *string `json:"name"`
	Source     string  `json:"source"`
	SourceHost *string `json:"source_host"`
	UID        *string `json:"uid"`
	URL        *string `json:"url"`
	Username   *string `json:"username"`
}
