package shared

type PlaceholderTypeEnum string

const (
	PlaceholderTypeEnumNone          PlaceholderTypeEnum = "NONE"
	PlaceholderTypeEnumBody          PlaceholderTypeEnum = "BODY"
	PlaceholderTypeEnumChart         PlaceholderTypeEnum = "CHART"
	PlaceholderTypeEnumClipArt       PlaceholderTypeEnum = "CLIP_ART"
	PlaceholderTypeEnumCenteredTitle PlaceholderTypeEnum = "CENTERED_TITLE"
	PlaceholderTypeEnumDiagram       PlaceholderTypeEnum = "DIAGRAM"
	PlaceholderTypeEnumDateAndTime   PlaceholderTypeEnum = "DATE_AND_TIME"
	PlaceholderTypeEnumFooter        PlaceholderTypeEnum = "FOOTER"
	PlaceholderTypeEnumHeader        PlaceholderTypeEnum = "HEADER"
	PlaceholderTypeEnumMedia         PlaceholderTypeEnum = "MEDIA"
	PlaceholderTypeEnumObject        PlaceholderTypeEnum = "OBJECT"
	PlaceholderTypeEnumPicture       PlaceholderTypeEnum = "PICTURE"
	PlaceholderTypeEnumSlideNumber   PlaceholderTypeEnum = "SLIDE_NUMBER"
	PlaceholderTypeEnumSubtitle      PlaceholderTypeEnum = "SUBTITLE"
	PlaceholderTypeEnumTable         PlaceholderTypeEnum = "TABLE"
	PlaceholderTypeEnumTitle         PlaceholderTypeEnum = "TITLE"
	PlaceholderTypeEnumSlideImage    PlaceholderTypeEnum = "SLIDE_IMAGE"
)

// Placeholder
// The placeholder information that uniquely identifies a placeholder shape.
type Placeholder struct {
	Index          *int32               `json:"index,omitempty"`
	ParentObjectID *string              `json:"parentObjectId,omitempty"`
	Type           *PlaceholderTypeEnum `json:"type,omitempty"`
}
