package shared

type ParagraphBorderDashStyleEnum string

const (
	ParagraphBorderDashStyleEnumDashStyleUnspecified ParagraphBorderDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
	ParagraphBorderDashStyleEnumSolid                ParagraphBorderDashStyleEnum = "SOLID"
	ParagraphBorderDashStyleEnumDot                  ParagraphBorderDashStyleEnum = "DOT"
	ParagraphBorderDashStyleEnumDash                 ParagraphBorderDashStyleEnum = "DASH"
)

type ParagraphBorder struct {
	Color     *OptionalColor                `json:"color"`
	DashStyle *ParagraphBorderDashStyleEnum `json:"dashStyle"`
	Padding   *Dimension                    `json:"padding"`
	Width     *Dimension                    `json:"width"`
}
