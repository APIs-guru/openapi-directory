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

// ParagraphStyle
// Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.
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
