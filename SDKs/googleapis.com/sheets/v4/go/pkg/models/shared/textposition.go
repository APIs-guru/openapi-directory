package shared

type TextPositionHorizontalAlignmentEnum string

const (
	TextPositionHorizontalAlignmentEnumHorizontalAlignUnspecified TextPositionHorizontalAlignmentEnum = "HORIZONTAL_ALIGN_UNSPECIFIED"
	TextPositionHorizontalAlignmentEnumLeft                       TextPositionHorizontalAlignmentEnum = "LEFT"
	TextPositionHorizontalAlignmentEnumCenter                     TextPositionHorizontalAlignmentEnum = "CENTER"
	TextPositionHorizontalAlignmentEnumRight                      TextPositionHorizontalAlignmentEnum = "RIGHT"
)

// TextPosition
// Position settings for text.
type TextPosition struct {
	HorizontalAlignment *TextPositionHorizontalAlignmentEnum `json:"horizontalAlignment,omitempty"`
}
