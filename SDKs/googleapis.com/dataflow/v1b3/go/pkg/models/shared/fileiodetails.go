package shared

// FileIoDetails
// Metadata for a File connector used by the job.
type FileIoDetails struct {
	FilePattern *string `json:"filePattern,omitempty"`
}
