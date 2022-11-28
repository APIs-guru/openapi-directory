package shared

type ShapePropertiesContentAlignmentEnum string

const (
	ShapePropertiesContentAlignmentEnumContentAlignmentUnspecified ShapePropertiesContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSPECIFIED"
	ShapePropertiesContentAlignmentEnumContentAlignmentUnsupported ShapePropertiesContentAlignmentEnum = "CONTENT_ALIGNMENT_UNSUPPORTED"
	ShapePropertiesContentAlignmentEnumTop                         ShapePropertiesContentAlignmentEnum = "TOP"
	ShapePropertiesContentAlignmentEnumMiddle                      ShapePropertiesContentAlignmentEnum = "MIDDLE"
	ShapePropertiesContentAlignmentEnumBottom                      ShapePropertiesContentAlignmentEnum = "BOTTOM"
)

// ShapeProperties
// The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.
type ShapeProperties struct {
	Autofit             *Autofit                             `json:"autofit,omitempty"`
	ContentAlignment    *ShapePropertiesContentAlignmentEnum `json:"contentAlignment,omitempty"`
	Link                *Link                                `json:"link,omitempty"`
	Outline             *Outline                             `json:"outline,omitempty"`
	Shadow              *Shadow                              `json:"shadow,omitempty"`
	ShapeBackgroundFill *ShapeBackgroundFill                 `json:"shapeBackgroundFill,omitempty"`
}
