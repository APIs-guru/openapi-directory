package shared

// OsPolicyResourceFile
// A remote or local file.
type OsPolicyResourceFile struct {
	AllowInsecure *bool                       `json:"allowInsecure,omitempty"`
	Gcs           *OsPolicyResourceFileGcs    `json:"gcs,omitempty"`
	LocalPath     *string                     `json:"localPath,omitempty"`
	Remote        *OsPolicyResourceFileRemote `json:"remote,omitempty"`
}
