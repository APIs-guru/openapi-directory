package shared

// ImageSource
// External image source (Google Cloud Storage or web URL image location).
type ImageSource struct {
	GcsImageURI *string `json:"gcsImageUri,omitempty"`
	ImageURI    *string `json:"imageUri,omitempty"`
}
