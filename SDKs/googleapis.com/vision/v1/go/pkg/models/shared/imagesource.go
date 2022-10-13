package shared

type ImageSource struct {
	GcsImageURI *string `json:"gcsImageUri"`
	ImageURI    *string `json:"imageUri"`
}
