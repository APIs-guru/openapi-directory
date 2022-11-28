package shared

type ReplaceAllShapesWithImageRequestImageReplaceMethodEnum string

const (
	ReplaceAllShapesWithImageRequestImageReplaceMethodEnumImageReplaceMethodUnspecified ReplaceAllShapesWithImageRequestImageReplaceMethodEnum = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
	ReplaceAllShapesWithImageRequestImageReplaceMethodEnumCenterInside                  ReplaceAllShapesWithImageRequestImageReplaceMethodEnum = "CENTER_INSIDE"
	ReplaceAllShapesWithImageRequestImageReplaceMethodEnumCenterCrop                    ReplaceAllShapesWithImageRequestImageReplaceMethodEnum = "CENTER_CROP"
)

type ReplaceAllShapesWithImageRequestReplaceMethodEnum string

const (
	ReplaceAllShapesWithImageRequestReplaceMethodEnumCenterInside ReplaceAllShapesWithImageRequestReplaceMethodEnum = "CENTER_INSIDE"
	ReplaceAllShapesWithImageRequestReplaceMethodEnumCenterCrop   ReplaceAllShapesWithImageRequestReplaceMethodEnum = "CENTER_CROP"
)

// ReplaceAllShapesWithImageRequest
// Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
type ReplaceAllShapesWithImageRequest struct {
	ContainsText       *SubstringMatchCriteria                                 `json:"containsText,omitempty"`
	ImageReplaceMethod *ReplaceAllShapesWithImageRequestImageReplaceMethodEnum `json:"imageReplaceMethod,omitempty"`
	ImageURL           *string                                                 `json:"imageUrl,omitempty"`
	PageObjectIds      []string                                                `json:"pageObjectIds,omitempty"`
	ReplaceMethod      *ReplaceAllShapesWithImageRequestReplaceMethodEnum      `json:"replaceMethod,omitempty"`
}
