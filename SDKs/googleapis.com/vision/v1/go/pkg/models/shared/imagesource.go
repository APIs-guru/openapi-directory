package shared

type ImageSource struct {
	GcsImageURI *string `json:"gcsImageUri,omitempty"`
	ImageURI    *string `json:"imageUri,omitempty"`
}
