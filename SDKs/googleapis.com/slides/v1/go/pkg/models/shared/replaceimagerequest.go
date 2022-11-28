package shared

type ReplaceImageRequestImageReplaceMethodEnum string

const (
	ReplaceImageRequestImageReplaceMethodEnumImageReplaceMethodUnspecified ReplaceImageRequestImageReplaceMethodEnum = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
	ReplaceImageRequestImageReplaceMethodEnumCenterInside                  ReplaceImageRequestImageReplaceMethodEnum = "CENTER_INSIDE"
	ReplaceImageRequestImageReplaceMethodEnumCenterCrop                    ReplaceImageRequestImageReplaceMethodEnum = "CENTER_CROP"
)

// ReplaceImageRequest
// Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image.
type ReplaceImageRequest struct {
	ImageObjectID      *string                                    `json:"imageObjectId,omitempty"`
	ImageReplaceMethod *ReplaceImageRequestImageReplaceMethodEnum `json:"imageReplaceMethod,omitempty"`
	URL                *string                                    `json:"url,omitempty"`
}
