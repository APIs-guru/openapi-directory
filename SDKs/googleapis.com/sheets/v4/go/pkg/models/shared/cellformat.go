package shared

type CellFormatHorizontalAlignmentEnum string

const (
	CellFormatHorizontalAlignmentEnumHorizontalAlignUnspecified CellFormatHorizontalAlignmentEnum = "HORIZONTAL_ALIGN_UNSPECIFIED"
	CellFormatHorizontalAlignmentEnumLeft                       CellFormatHorizontalAlignmentEnum = "LEFT"
	CellFormatHorizontalAlignmentEnumCenter                     CellFormatHorizontalAlignmentEnum = "CENTER"
	CellFormatHorizontalAlignmentEnumRight                      CellFormatHorizontalAlignmentEnum = "RIGHT"
)

type CellFormatHyperlinkDisplayTypeEnum string

const (
	CellFormatHyperlinkDisplayTypeEnumHyperlinkDisplayTypeUnspecified CellFormatHyperlinkDisplayTypeEnum = "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED"
	CellFormatHyperlinkDisplayTypeEnumLinked                          CellFormatHyperlinkDisplayTypeEnum = "LINKED"
	CellFormatHyperlinkDisplayTypeEnumPlainText                       CellFormatHyperlinkDisplayTypeEnum = "PLAIN_TEXT"
)

type CellFormatTextDirectionEnum string

const (
	CellFormatTextDirectionEnumTextDirectionUnspecified CellFormatTextDirectionEnum = "TEXT_DIRECTION_UNSPECIFIED"
	CellFormatTextDirectionEnumLeftToRight              CellFormatTextDirectionEnum = "LEFT_TO_RIGHT"
	CellFormatTextDirectionEnumRightToLeft              CellFormatTextDirectionEnum = "RIGHT_TO_LEFT"
)

type CellFormatVerticalAlignmentEnum string

const (
	CellFormatVerticalAlignmentEnumVerticalAlignUnspecified CellFormatVerticalAlignmentEnum = "VERTICAL_ALIGN_UNSPECIFIED"
	CellFormatVerticalAlignmentEnumTop                      CellFormatVerticalAlignmentEnum = "TOP"
	CellFormatVerticalAlignmentEnumMiddle                   CellFormatVerticalAlignmentEnum = "MIDDLE"
	CellFormatVerticalAlignmentEnumBottom                   CellFormatVerticalAlignmentEnum = "BOTTOM"
)

type CellFormatWrapStrategyEnum string

const (
	CellFormatWrapStrategyEnumWrapStrategyUnspecified CellFormatWrapStrategyEnum = "WRAP_STRATEGY_UNSPECIFIED"
	CellFormatWrapStrategyEnumOverflowCell            CellFormatWrapStrategyEnum = "OVERFLOW_CELL"
	CellFormatWrapStrategyEnumLegacyWrap              CellFormatWrapStrategyEnum = "LEGACY_WRAP"
	CellFormatWrapStrategyEnumClip                    CellFormatWrapStrategyEnum = "CLIP"
	CellFormatWrapStrategyEnumWrap                    CellFormatWrapStrategyEnum = "WRAP"
)

type CellFormat struct {
	BackgroundColor      *Color                              `json:"backgroundColor,omitempty"`
	BackgroundColorStyle *ColorStyle                         `json:"backgroundColorStyle,omitempty"`
	Borders              *Borders                            `json:"borders,omitempty"`
	HorizontalAlignment  *CellFormatHorizontalAlignmentEnum  `json:"horizontalAlignment,omitempty"`
	HyperlinkDisplayType *CellFormatHyperlinkDisplayTypeEnum `json:"hyperlinkDisplayType,omitempty"`
	NumberFormat         *NumberFormat                       `json:"numberFormat,omitempty"`
	Padding              *Padding                            `json:"padding,omitempty"`
	TextDirection        *CellFormatTextDirectionEnum        `json:"textDirection,omitempty"`
	TextFormat           *TextFormat                         `json:"textFormat,omitempty"`
	TextRotation         *TextRotation                       `json:"textRotation,omitempty"`
	VerticalAlignment    *CellFormatVerticalAlignmentEnum    `json:"verticalAlignment,omitempty"`
	WrapStrategy         *CellFormatWrapStrategyEnum         `json:"wrapStrategy,omitempty"`
}
