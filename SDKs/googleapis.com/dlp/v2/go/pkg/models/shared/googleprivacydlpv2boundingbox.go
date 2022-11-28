package shared

// GooglePrivacyDlpV2BoundingBox
// Bounding box encompassing detected text within an image.
type GooglePrivacyDlpV2BoundingBox struct {
	Height *int32 `json:"height,omitempty"`
	Left   *int32 `json:"left,omitempty"`
	Top    *int32 `json:"top,omitempty"`
	Width  *int32 `json:"width,omitempty"`
}
