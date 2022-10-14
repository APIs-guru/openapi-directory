package shared

type ParagraphStyleAlignmentEnum string

const (
	ParagraphStyleAlignmentEnumAlignmentUnspecified ParagraphStyleAlignmentEnum = "ALIGNMENT_UNSPECIFIED"
	ParagraphStyleAlignmentEnumStart                ParagraphStyleAlignmentEnum = "START"
	ParagraphStyleAlignmentEnumCenter               ParagraphStyleAlignmentEnum = "CENTER"
	ParagraphStyleAlignmentEnumEnd                  ParagraphStyleAlignmentEnum = "END"
	ParagraphStyleAlignmentEnumJustified            ParagraphStyleAlignmentEnum = "JUSTIFIED"
)

type ParagraphStyleDirectionEnum string

const (
	ParagraphStyleDirectionEnumTextDirectionUnspecified ParagraphStyleDirectionEnum = "TEXT_DIRECTION_UNSPECIFIED"
	ParagraphStyleDirectionEnumLeftToRight              ParagraphStyleDirectionEnum = "LEFT_TO_RIGHT"
	ParagraphStyleDirectionEnumRightToLeft              ParagraphStyleDirectionEnum = "RIGHT_TO_LEFT"
)

type ParagraphStyleSpacingModeEnum string

const (
	ParagraphStyleSpacingModeEnumSpacingModeUnspecified ParagraphStyleSpacingModeEnum = "SPACING_MODE_UNSPECIFIED"
	ParagraphStyleSpacingModeEnumNeverCollapse          ParagraphStyleSpacingModeEnum = "NEVER_COLLAPSE"
	ParagraphStyleSpacingModeEnumCollapseLists          ParagraphStyleSpacingModeEnum = "COLLAPSE_LISTS"
)

type ParagraphStyle struct {
	Alignment       *ParagraphStyleAlignmentEnum   `json:"alignment,omitempty"`
	Direction       *ParagraphStyleDirectionEnum   `json:"direction,omitempty"`
	IndentEnd       *Dimension                     `json:"indentEnd,omitempty"`
	IndentFirstLine *Dimension                     `json:"indentFirstLine,omitempty"`
	IndentStart     *Dimension                     `json:"indentStart,omitempty"`
	LineSpacing     *float32                       `json:"lineSpacing,omitempty"`
	SpaceAbove      *Dimension                     `json:"spaceAbove,omitempty"`
	SpaceBelow      *Dimension                     `json:"spaceBelow,omitempty"`
	SpacingMode     *ParagraphStyleSpacingModeEnum `json:"spacingMode,omitempty"`
}
