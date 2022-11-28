package shared

// ImageInfo
// Class ImageInfo.
type ImageInfo struct {
	BlurHash   *string        `json:"BlurHash,omitempty"`
	Height     *int32         `json:"Height,omitempty"`
	ImageIndex *int32         `json:"ImageIndex,omitempty"`
	ImageTag   *string        `json:"ImageTag,omitempty"`
	ImageType  *ImageTypeEnum `json:"ImageType,omitempty"`
	Path       *string        `json:"Path,omitempty"`
	Size       *int64         `json:"Size,omitempty"`
	Width      *int32         `json:"Width,omitempty"`
}
