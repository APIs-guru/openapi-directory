package shared

type PositionedObjectPositioningLayoutEnum string

const (
	PositionedObjectPositioningLayoutEnumPositionedObjectLayoutUnspecified PositionedObjectPositioningLayoutEnum = "POSITIONED_OBJECT_LAYOUT_UNSPECIFIED"
	PositionedObjectPositioningLayoutEnumWrapText                          PositionedObjectPositioningLayoutEnum = "WRAP_TEXT"
	PositionedObjectPositioningLayoutEnumBreakLeft                         PositionedObjectPositioningLayoutEnum = "BREAK_LEFT"
	PositionedObjectPositioningLayoutEnumBreakRight                        PositionedObjectPositioningLayoutEnum = "BREAK_RIGHT"
	PositionedObjectPositioningLayoutEnumBreakLeftRight                    PositionedObjectPositioningLayoutEnum = "BREAK_LEFT_RIGHT"
	PositionedObjectPositioningLayoutEnumInFrontOfText                     PositionedObjectPositioningLayoutEnum = "IN_FRONT_OF_TEXT"
	PositionedObjectPositioningLayoutEnumBehindText                        PositionedObjectPositioningLayoutEnum = "BEHIND_TEXT"
)

type PositionedObjectPositioning struct {
	Layout     *PositionedObjectPositioningLayoutEnum `json:"layout,omitempty"`
	LeftOffset *Dimension                             `json:"leftOffset,omitempty"`
	TopOffset  *Dimension                             `json:"topOffset,omitempty"`
}
