package shared

// UploadItemRef
// Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef.
type UploadItemRef struct {
	Name *string `json:"name,omitempty"`
}
