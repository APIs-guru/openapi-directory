package shared

type AndroidVersion struct {
	APILevel      *int32        `json:"apiLevel,omitempty"`
	CodeName      *string       `json:"codeName,omitempty"`
	Distribution  *Distribution `json:"distribution,omitempty"`
	ID            *string       `json:"id,omitempty"`
	ReleaseDate   *Date         `json:"releaseDate,omitempty"`
	Tags          []string      `json:"tags,omitempty"`
	VersionString *string       `json:"versionString,omitempty"`
}
