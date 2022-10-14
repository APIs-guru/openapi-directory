package shared

type GoogleCloudDatalabelingV1beta1ImagePayload struct {
	ImageThumbnail *string `json:"imageThumbnail,omitempty"`
	ImageURI       *string `json:"imageUri,omitempty"`
	MimeType       *string `json:"mimeType,omitempty"`
	SignedURI      *string `json:"signedUri,omitempty"`
}
