package shared

type UpdateLineCategoryRequestLineCategoryEnum string

const (
	UpdateLineCategoryRequestLineCategoryEnumLineCategoryUnspecified UpdateLineCategoryRequestLineCategoryEnum = "LINE_CATEGORY_UNSPECIFIED"
	UpdateLineCategoryRequestLineCategoryEnumStraight                UpdateLineCategoryRequestLineCategoryEnum = "STRAIGHT"
	UpdateLineCategoryRequestLineCategoryEnumBent                    UpdateLineCategoryRequestLineCategoryEnum = "BENT"
	UpdateLineCategoryRequestLineCategoryEnumCurved                  UpdateLineCategoryRequestLineCategoryEnum = "CURVED"
)

type UpdateLineCategoryRequest struct {
	LineCategory *UpdateLineCategoryRequestLineCategoryEnum `json:"lineCategory,omitempty"`
	ObjectID     *string                                    `json:"objectId,omitempty"`
}
