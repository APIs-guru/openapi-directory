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
	Autofit             *Autofit                             `json:"autofit"`
	ContentAlignment    *ShapePropertiesContentAlignmentEnum `json:"contentAlignment"`
	Link                *Link                                `json:"link"`
	Outline             *Outline                             `json:"outline"`
	Shadow              *Shadow                              `json:"shadow"`
	ShapeBackgroundFill *ShapeBackgroundFill                 `json:"shapeBackgroundFill"`
}
