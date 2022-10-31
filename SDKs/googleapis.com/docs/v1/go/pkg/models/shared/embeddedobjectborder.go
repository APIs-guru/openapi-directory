package shared

type EmbeddedObjectBorderDashStyleEnum string

const (
	EmbeddedObjectBorderDashStyleEnumDashStyleUnspecified EmbeddedObjectBorderDashStyleEnum = "DASH_STYLE_UNSPECIFIED"
	EmbeddedObjectBorderDashStyleEnumSolid                EmbeddedObjectBorderDashStyleEnum = "SOLID"
	EmbeddedObjectBorderDashStyleEnumDot                  EmbeddedObjectBorderDashStyleEnum = "DOT"
	EmbeddedObjectBorderDashStyleEnumDash                 EmbeddedObjectBorderDashStyleEnum = "DASH"
)

type EmbeddedObjectBorderPropertyStateEnum string

const (
	EmbeddedObjectBorderPropertyStateEnumRendered    EmbeddedObjectBorderPropertyStateEnum = "RENDERED"
	EmbeddedObjectBorderPropertyStateEnumNotRendered EmbeddedObjectBorderPropertyStateEnum = "NOT_RENDERED"
)

type EmbeddedObjectBorder struct {
	Color         *OptionalColor                         `json:"color,omitempty"`
	DashStyle     *EmbeddedObjectBorderDashStyleEnum     `json:"dashStyle,omitempty"`
	PropertyState *EmbeddedObjectBorderPropertyStateEnum `json:"propertyState,omitempty"`
	Width         *Dimension                             `json:"width,omitempty"`
}
