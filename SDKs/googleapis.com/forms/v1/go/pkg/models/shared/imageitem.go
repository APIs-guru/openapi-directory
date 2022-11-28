package shared

// ImageItem
// An item containing an image.
type ImageItem struct {
	Image *Image `json:"image,omitempty"`
}

// ImageItemInput
// An item containing an image.
type ImageItemInput struct {
	Image *ImageInput `json:"image,omitempty"`
}
