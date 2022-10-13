package shared

type OsPolicyResourceFile struct {
	AllowInsecure *bool                       `json:"allowInsecure"`
	Gcs           *OsPolicyResourceFileGcs    `json:"gcs"`
	LocalPath     *string                     `json:"localPath"`
	Remote        *OsPolicyResourceFileRemote `json:"remote"`
}
