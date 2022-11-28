package shared

// GoogleCloudVisionV1p2beta1ImageSource
// External image source (Google Cloud Storage or web URL image location).
type GoogleCloudVisionV1p2beta1ImageSource struct {
	GcsImageURI *string `json:"gcsImageUri,omitempty"`
	ImageURI    *string `json:"imageUri,omitempty"`
}
