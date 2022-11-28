package shared

// GoogleCloudDatalabelingV1beta1VideoPayload
// Container of information of a video.
type GoogleCloudDatalabelingV1beta1VideoPayload struct {
	FrameRate       *float32                                       `json:"frameRate,omitempty"`
	MimeType        *string                                        `json:"mimeType,omitempty"`
	SignedURI       *string                                        `json:"signedUri,omitempty"`
	VideoThumbnails []GoogleCloudDatalabelingV1beta1VideoThumbnail `json:"videoThumbnails,omitempty"`
	VideoURI        *string                                        `json:"videoUri,omitempty"`
}
