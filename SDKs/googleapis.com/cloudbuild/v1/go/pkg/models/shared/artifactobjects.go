package shared

// ArtifactObjects
// Files in the workspace to upload to Cloud Storage upon successful completion of all build steps.
type ArtifactObjects struct {
	Location *string   `json:"location,omitempty"`
	Paths    []string  `json:"paths,omitempty"`
	Timing   *TimeSpan `json:"timing,omitempty"`
}
