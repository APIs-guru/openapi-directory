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
	ParagraphStyleDirectionEnumContentDirectionUnspecified ParagraphStyleDirectionEnum = "CONTENT_DIRECTION_UNSPECIFIED"
	ParagraphStyleDirectionEnumLeftToRight                 ParagraphStyleDirectionEnum = "LEFT_TO_RIGHT"
	ParagraphStyleDirectionEnumRightToLeft                 ParagraphStyleDirectionEnum = "RIGHT_TO_LEFT"
)

type ParagraphStyleNamedStyleTypeEnum string

const (
	ParagraphStyleNamedStyleTypeEnumNamedStyleTypeUnspecified ParagraphStyleNamedStyleTypeEnum = "NAMED_STYLE_TYPE_UNSPECIFIED"
	ParagraphStyleNamedStyleTypeEnumNormalText                ParagraphStyleNamedStyleTypeEnum = "NORMAL_TEXT"
	ParagraphStyleNamedStyleTypeEnumTitle                     ParagraphStyleNamedStyleTypeEnum = "TITLE"
	ParagraphStyleNamedStyleTypeEnumSubtitle                  ParagraphStyleNamedStyleTypeEnum = "SUBTITLE"
	ParagraphStyleNamedStyleTypeEnumHeading1                  ParagraphStyleNamedStyleTypeEnum = "HEADING_1"
	ParagraphStyleNamedStyleTypeEnumHeading2                  ParagraphStyleNamedStyleTypeEnum = "HEADING_2"
	ParagraphStyleNamedStyleTypeEnumHeading3                  ParagraphStyleNamedStyleTypeEnum = "HEADING_3"
	ParagraphStyleNamedStyleTypeEnumHeading4                  ParagraphStyleNamedStyleTypeEnum = "HEADING_4"
	ParagraphStyleNamedStyleTypeEnumHeading5                  ParagraphStyleNamedStyleTypeEnum = "HEADING_5"
	ParagraphStyleNamedStyleTypeEnumHeading6                  ParagraphStyleNamedStyleTypeEnum = "HEADING_6"
)

type ParagraphStyleSpacingModeEnum string

const (
	ParagraphStyleSpacingModeEnumSpacingModeUnspecified ParagraphStyleSpacingModeEnum = "SPACING_MODE_UNSPECIFIED"
	ParagraphStyleSpacingModeEnumNeverCollapse          ParagraphStyleSpacingModeEnum = "NEVER_COLLAPSE"
	ParagraphStyleSpacingModeEnumCollapseLists          ParagraphStyleSpacingModeEnum = "COLLAPSE_LISTS"
)

type ParagraphStyle struct {
	Alignment           *ParagraphStyleAlignmentEnum      `json:"alignment,omitempty"`
	AvoidWidowAndOrphan *bool                             `json:"avoidWidowAndOrphan,omitempty"`
	BorderBetween       *ParagraphBorder                  `json:"borderBetween,omitempty"`
	BorderBottom        *ParagraphBorder                  `json:"borderBottom,omitempty"`
	BorderLeft          *ParagraphBorder                  `json:"borderLeft,omitempty"`
	BorderRight         *ParagraphBorder                  `json:"borderRight,omitempty"`
	BorderTop           *ParagraphBorder                  `json:"borderTop,omitempty"`
	Direction           *ParagraphStyleDirectionEnum      `json:"direction,omitempty"`
	HeadingID           *string                           `json:"headingId,omitempty"`
	IndentEnd           *Dimension                        `json:"indentEnd,omitempty"`
	IndentFirstLine     *Dimension                        `json:"indentFirstLine,omitempty"`
	IndentStart         *Dimension                        `json:"indentStart,omitempty"`
	KeepLinesTogether   *bool                             `json:"keepLinesTogether,omitempty"`
	KeepWithNext        *bool                             `json:"keepWithNext,omitempty"`
	LineSpacing         *float32                          `json:"lineSpacing,omitempty"`
	NamedStyleType      *ParagraphStyleNamedStyleTypeEnum `json:"namedStyleType,omitempty"`
	PageBreakBefore     *bool                             `json:"pageBreakBefore,omitempty"`
	Shading             *Shading                          `json:"shading,omitempty"`
	SpaceAbove          *Dimension                        `json:"spaceAbove,omitempty"`
	SpaceBelow          *Dimension                        `json:"spaceBelow,omitempty"`
	SpacingMode         *ParagraphStyleSpacingModeEnum    `json:"spacingMode,omitempty"`
	TabStops            []TabStop                         `json:"tabStops,omitempty"`
}
