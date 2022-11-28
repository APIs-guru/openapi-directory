package shared

// CropProperties
// The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.
type CropProperties struct {
	Angle        *float32 `json:"angle,omitempty"`
	OffsetBottom *float32 `json:"offsetBottom,omitempty"`
	OffsetLeft   *float32 `json:"offsetLeft,omitempty"`
	OffsetRight  *float32 `json:"offsetRight,omitempty"`
	OffsetTop    *float32 `json:"offsetTop,omitempty"`
}
