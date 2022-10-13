package shared

type MediaPropertiesAlignmentEnum string

const (
	MediaPropertiesAlignmentEnumAlignmentUnspecified MediaPropertiesAlignmentEnum = "ALIGNMENT_UNSPECIFIED"
	MediaPropertiesAlignmentEnumLeft                 MediaPropertiesAlignmentEnum = "LEFT"
	MediaPropertiesAlignmentEnumRight                MediaPropertiesAlignmentEnum = "RIGHT"
	MediaPropertiesAlignmentEnumCenter               MediaPropertiesAlignmentEnum = "CENTER"
)

type MediaProperties struct {
	Alignment *MediaPropertiesAlignmentEnum `json:"alignment"`
	Width     *int32                        `json:"width"`
}
