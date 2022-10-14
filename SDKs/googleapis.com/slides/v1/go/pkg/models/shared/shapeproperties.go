package shared

type ShapePropertiesContentAlignmentEnum string

const (
	ShapePropertiesContentAlignmentEnumContentAlignmentUnspecified ShapePropertiesContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSPECIFIED"
	ShapePropertiesContentAlignmentEnumContentAlignmentUnsupported ShapePropertiesContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSUPPORTED"
	ShapePropertiesContentAlignmentEnumTop                         ShapePropertiesContentAlignmentEnum = "TOP"
	ShapePropertiesContentAlignmentEnumMiddle                      ShapePropertiesContentAlignmentEnum = "MIDDLE"
	ShapePropertiesContentAlignmentEnumBottom                      ShapePropertiesContentAlignmentEnum = "BOTTOM"
)

type ShapeProperties struct {
	Autofit             *Autofit                             `json:"autofit,omitempty"`
	ContentAlignment    *ShapePropertiesContentAlignmentEnum `json:"contentAlignment,omitempty"`
	Link                *Link                                `json:"link,omitempty"`
	Outline             *Outline                             `json:"outline,omitempty"`
	Shadow              *Shadow                              `json:"shadow,omitempty"`
	ShapeBackgroundFill *ShapeBackgroundFill                 `json:"shapeBackgroundFill,omitempty"`
}
