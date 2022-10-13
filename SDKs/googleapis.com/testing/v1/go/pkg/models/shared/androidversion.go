package shared

type AndroidVersion struct {
	APILevel      *int32        `json:"apiLevel"`
	CodeName      *string       `json:"codeName"`
	Distribution  *Distribution `json:"distribution"`
	ID            *string       `json:"id"`
	ReleaseDate   *Date         `json:"releaseDate"`
	Tags          []string      `json:"tags"`
	VersionString *string       `json:"versionString"`
}
