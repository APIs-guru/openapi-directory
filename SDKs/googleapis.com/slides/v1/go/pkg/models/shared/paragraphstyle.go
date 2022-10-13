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
	Alignment       *ParagraphStyleAlignmentEnum   `json:"alignment"`
	Direction       *ParagraphStyleDirectionEnum   `json:"direction"`
	IndentEnd       *Dimension                     `json:"indentEnd"`
	IndentFirstLine *Dimension                     `json:"indentFirstLine"`
	IndentStart     *Dimension                     `json:"indentStart"`
	LineSpacing     *float32                       `json:"lineSpacing"`
	SpaceAbove      *Dimension                     `json:"spaceAbove"`
	SpaceBelow      *Dimension                     `json:"spaceBelow"`
	SpacingMode     *ParagraphStyleSpacingModeEnum `json:"spacingMode"`
}
