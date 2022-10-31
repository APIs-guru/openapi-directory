package shared

type ParagraphBorderDashStyleEnum string

const (
	ParagraphBorderDashStyleEnumDashStyleUnspecified ParagraphBorderDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
	ParagraphBorderDashStyleEnumSolid                ParagraphBorderDashStyleEnum = "SOLID"
	ParagraphBorderDashStyleEnumDot                  ParagraphBorderDashStyleEnum = "DOT"
	ParagraphBorderDashStyleEnumDash                 ParagraphBorderDashStyleEnum = "DASH"
)

type ParagraphBorder struct {
	Color     *OptionalColor                `json:"color,omitempty"`
	DashStyle *ParagraphBorderDashStyleEnum `json:"dashStyle,omitempty"`
	Padding   *Dimension                    `json:"padding,omitempty"`
	Width     *Dimension                    `json:"width,omitempty"`
}
