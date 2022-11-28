package shared

// GoogleCloudVisionV1p1beta1ImageSource
// External image source (Google Cloud Storage or web URL image location).
type GoogleCloudVisionV1p1beta1ImageSource struct {
	GcsImageURI *string `json:"gcsImageUri,omitempty"`
	ImageURI    *string `json:"imageUri,omitempty"`
}
