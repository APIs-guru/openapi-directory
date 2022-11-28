package shared

type GoogleAppsCardV1ImageCropStyleTypeEnum string

const (
	GoogleAppsCardV1ImageCropStyleTypeEnumImageCropTypeUnspecified GoogleAppsCardV1ImageCropStyleTypeEnum = "IMAGE_CROP_TYPE_UNSPECIFIED"
	GoogleAppsCardV1ImageCropStyleTypeEnumSquare                   GoogleAppsCardV1ImageCropStyleTypeEnum = "SQUARE"
	GoogleAppsCardV1ImageCropStyleTypeEnumCircle                   GoogleAppsCardV1ImageCropStyleTypeEnum = "CIRCLE"
	GoogleAppsCardV1ImageCropStyleTypeEnumRectangleCustom          GoogleAppsCardV1ImageCropStyleTypeEnum = "RECTANGLE_CUSTOM"
	GoogleAppsCardV1ImageCropStyleTypeEnumRectangle43              GoogleAppsCardV1ImageCropStyleTypeEnum = "RECTANGLE_4_3"
)

// GoogleAppsCardV1ImageCropStyle
// Represents the crop style applied to an image. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
type GoogleAppsCardV1ImageCropStyle struct {
	AspectRatio *float64                                `json:"aspectRatio,omitempty"`
	Type        *GoogleAppsCardV1ImageCropStyleTypeEnum `json:"type,omitempty"`
}
