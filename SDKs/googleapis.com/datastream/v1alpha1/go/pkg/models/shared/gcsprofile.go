package shared

// GcsProfile
// Cloud Storage bucket profile.
type GcsProfile struct {
	BucketName *string `json:"bucketName,omitempty"`
	RootPath   *string `json:"rootPath,omitempty"`
}
