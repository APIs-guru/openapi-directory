package shared

type TabStopAlignmentEnum string

const (
	TabStopAlignmentEnumTabStopAlignmentUnspecified TabStopAlignmentEnum = "TAB_STOP_ALIGNMENT_UNSPECIFIED"
	TabStopAlignmentEnumStart                       TabStopAlignmentEnum = "START"
	TabStopAlignmentEnumCenter                      TabStopAlignmentEnum = "CENTER"
	TabStopAlignmentEnumEnd                         TabStopAlignmentEnum = "END"
)

type TabStop struct {
	Alignment *TabStopAlignmentEnum `json:"alignment"`
	Offset    *Dimension            `json:"offset"`
}
