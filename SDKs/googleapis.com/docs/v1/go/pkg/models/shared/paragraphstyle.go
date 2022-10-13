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
	Alignment           *ParagraphStyleAlignmentEnum      `json:"alignment"`
	AvoidWidowAndOrphan *bool                             `json:"avoidWidowAndOrphan"`
	BorderBetween       *ParagraphBorder                  `json:"borderBetween"`
	BorderBottom        *ParagraphBorder                  `json:"borderBottom"`
	BorderLeft          *ParagraphBorder                  `json:"borderLeft"`
	BorderRight         *ParagraphBorder                  `json:"borderRight"`
	BorderTop           *ParagraphBorder                  `json:"borderTop"`
	Direction           *ParagraphStyleDirectionEnum      `json:"direction"`
	HeadingID           *string                           `json:"headingId"`
	IndentEnd           *Dimension                        `json:"indentEnd"`
	IndentFirstLine     *Dimension                        `json:"indentFirstLine"`
	IndentStart         *Dimension                        `json:"indentStart"`
	KeepLinesTogether   *bool                             `json:"keepLinesTogether"`
	KeepWithNext        *bool                             `json:"keepWithNext"`
	LineSpacing         *float32                          `json:"lineSpacing"`
	NamedStyleType      *ParagraphStyleNamedStyleTypeEnum `json:"namedStyleType"`
	PageBreakBefore     *bool                             `json:"pageBreakBefore"`
	Shading             *Shading                          `json:"shading"`
	SpaceAbove          *Dimension                        `json:"spaceAbove"`
	SpaceBelow          *Dimension                        `json:"spaceBelow"`
	SpacingMode         *ParagraphStyleSpacingModeEnum    `json:"spacingMode"`
	TabStops            []TabStop                         `json:"tabStops"`
}
