package shared

type ArtifactObjects struct {
	Location *string   `json:"location"`
	Paths    []string  `json:"paths"`
	Timing   *TimeSpan `json:"timing"`
}
