package shared

// GcsProfile
// Cloud Storage bucket profile.
type GcsProfile struct {
	Bucket   *string `json:"bucket,omitempty"`
	RootPath *string `json:"rootPath,omitempty"`
}
