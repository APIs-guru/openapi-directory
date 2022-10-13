package shared

type GoogleCloudDatalabelingV1beta1ImagePayload struct {
	ImageThumbnail *string `json:"imageThumbnail"`
	ImageURI       *string `json:"imageUri"`
	MimeType       *string `json:"mimeType"`
	SignedURI      *string `json:"signedUri"`
}
