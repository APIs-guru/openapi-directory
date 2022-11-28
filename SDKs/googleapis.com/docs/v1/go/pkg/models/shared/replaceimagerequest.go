package shared

type ReplaceImageRequestImageReplaceMethodEnum string

const (
	ReplaceImageRequestImageReplaceMethodEnumImageReplaceMethodUnspecified ReplaceImageRequestImageReplaceMethodEnum = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
	ReplaceImageRequestImageReplaceMethodEnumCenterCrop                    ReplaceImageRequestImageReplaceMethodEnum = "CENTER_CROP"
)

// ReplaceImageRequest
// Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
type ReplaceImageRequest struct {
	ImageObjectID      *string                                    `json:"imageObjectId,omitempty"`
	ImageReplaceMethod *ReplaceImageRequestImageReplaceMethodEnum `json:"imageReplaceMethod,omitempty"`
	URI                *string                                    `json:"uri,omitempty"`
}
