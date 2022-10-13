package shared

type ImageInfo struct {
	BlurHash   *string        `json:"BlurHash"`
	Height     *int32         `json:"Height"`
	ImageIndex *int32         `json:"ImageIndex"`
	ImageTag   *string        `json:"ImageTag"`
	ImageType  *ImageTypeEnum `json:"ImageType"`
	Path       *string        `json:"Path"`
	Size       *int64         `json:"Size"`
	Width      *int32         `json:"Width"`
}
