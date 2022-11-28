package shared

type TabStopAlignmentEnum string

const (
	TabStopAlignmentEnumTabStopAlignmentUnspecified TabStopAlignmentEnum = "TAB_STOP_ALIGNMENT_UNSPECIFIED"
	TabStopAlignmentEnumStart                       TabStopAlignmentEnum = "START"
	TabStopAlignmentEnumCenter                      TabStopAlignmentEnum = "CENTER"
	TabStopAlignmentEnumEnd                         TabStopAlignmentEnum = "END"
)

// TabStop
// A tab stop within a paragraph.
type TabStop struct {
	Alignment *TabStopAlignmentEnum `json:"alignment,omitempty"`
	Offset    *Dimension            `json:"offset,omitempty"`
}
