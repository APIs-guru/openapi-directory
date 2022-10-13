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

type ReplaceAllShapesWithImageRequest struct {
	ContainsText       *SubstringMatchCriteria                                 `json:"containsText"`
	ImageReplaceMethod *ReplaceAllShapesWithImageRequestImageReplaceMethodEnum `json:"imageReplaceMethod"`
	ImageURL           *string                                                 `json:"imageUrl"`
	PageObjectIds      []string                                                `json:"pageObjectIds"`
	ReplaceMethod      *ReplaceAllShapesWithImageRequestReplaceMethodEnum      `json:"replaceMethod"`
}
