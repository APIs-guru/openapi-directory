package shared

type GoogleCloudDatalabelingV1beta1VideoPayload struct {
	FrameRate       *float32                                       `json:"frameRate"`
	MimeType        *string                                        `json:"mimeType"`
	SignedURI       *string                                        `json:"signedUri"`
	VideoThumbnails []GoogleCloudDatalabelingV1beta1VideoThumbnail `json:"videoThumbnails"`
	VideoURI        *string                                        `json:"videoUri"`
}
